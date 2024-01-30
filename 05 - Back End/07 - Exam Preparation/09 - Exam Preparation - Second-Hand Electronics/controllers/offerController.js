const router = require('express').Router();
const { isUser } = require('../middlewares/guards');

router.get('/', async (req, res) => {
    try {
        const offers = await req.storage.getAllOffers({});

        res.render('catalog', { offers });
    } catch (err) {
        console.log(err.message);
    }
});

router.get('/add', isUser(), (req, res) => {
    res.render('create');
});

router.post('/add', isUser(), async (req, res) => {
    const offerData = {
        name: req.body.name.trim(),
        type: req.body.type.trim(),
        production: req.body.production,
        exploitation: req.body.exploitation,
        damages: req.body.damages.trim(),
        image: req.body.image.trim(),
        price: req.body.price,
        description: req.body.description.trim(),
        owner: req.user._id
    };

    try {
        await req.storage.addOffer(offerData, req.user);
        res.redirect('/offers');
    } catch (err) {
        console.log(err.message);

        const ctx = {
            error: err.name == 'ValidationError' ?
                Object.values(err.errors).map(e => e.properties.message)[0] :
                err.message,
            offerData
        };

        console.log(ctx);

        res.render('create', ctx);
    }
});

router.get('/search', isUser(), async (req, res) => {
    try {
        console.log('req.query', req.query);

        const offers = await req.storage.getAllOffers(req.query);

        res.render('search', { offers, search: req.query });
    } catch (err) {
        console.log(err.message);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const offer = await req.storage.getOfferById(req.params.id);
        offer.isOwner = req.user ? offer.owner == req.user._id : false;
        offer.isUser = req.user ? true : false;
        offer.hasBeenBought = req.user && offer.boughtBy.toString().includes(req.user._id);

        console.log(offer);

        res.render('details', offer);
    } catch (err) {
        console.log(err.message);

        res.redirect('/');
    }
});

router.get('/edit/:id', isUser(), async (req, res) => {
    try {
        const offerData = await req.storage.getOfferById(req.params.id);

        if (offerData.owner != req.user._id) {
            throw new Error('You cannot edit a record you haven\'t created');
        }

        res.render('edit', offerData);
    } catch (err) {
        console.log(err.message);
        res.redirect(`/offers/${req.params.id}`);
    }
});

router.post('/edit/:id', isUser(), async (req, res) => {
    const offerData = {
        _id: req.params.id,
        name: req.body.name.trim(),
        type: req.body.type.trim(),
        production: req.body.production,
        exploitation: req.body.exploitation,
        damages: req.body.damages.trim(),
        image: req.body.image.trim(),
        price: req.body.price,
        description: req.body.description.trim()
    };

    try {
        const offer = await req.storage.getOfferById(req.params.id);

        if (offer.owner != req.user._id) {
            throw new Error('You cannot edit a record you haven\'t created');
        }

        await req.storage.editOffer(req.params.id, offerData);
        res.redirect(`/offers/${req.params.id}`);
    } catch (err) {
        console.log(err.message);

        const ctx = {
            errors: err.name == 'ValidationError' ?
                Object.values(err.errors).map(e => e.properties.message)[0] :
                err.message,
            offerData
        };

        res.render('edit', ctx);
    }
});

router.get('/buy/:id', isUser(), async (req, res) => {
    try {
        const offer = await req.storage.getOfferById(req.params.id);

        if (req.user._id == offer.owner) {
            throw new Error('You cannot buy your own item!');
        }

        await req.storage.buyOffer(req.params.id, req.user._id);
        res.redirect(`/offers/${req.params.id}`);
    } catch (err) {
        console.log(err.message);
        res.redirect(`/offers/${req.params.id}`);
    }
});

router.get('/delete/:id', isUser(), async (req, res) => {
    try {
        const offer = await req.storage.getOfferById(req.params.id);

        if (offer.owner != req.user._id) {
            throw new Error('You cannot delete an item you haven\'t created');
        }

        await req.storage.deleteOffer(req.params.id);
        res.redirect('/offers');
    } catch (err) {
        console.log(err.message);
        res.redirect(`/offers/details/${req.params.id}`);
    }
});

module.exports = router;