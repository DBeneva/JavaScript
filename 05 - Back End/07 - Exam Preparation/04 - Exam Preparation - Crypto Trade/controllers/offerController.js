const router = require('express').Router();
const { isUser } = require('../middlewares/guards');

router.get('/catalog', async (req, res) => {
    try {
        const offers = await req.storage.getAllOffers(req.user, req.query.search);
        offers.map(o => Object.assign(o, { user: req.user }));

        res.render('catalog', { title: 'Trade Catalog', offers, search: req.query.search });
    } catch (err) {
        console.log(err.message);
    }
});

router.get('/search', async (req, res) => {
    try {
        const offers = await req.storage.getAllOffers(req.user, req.query);
        // offers.map(o => Object.assign(o, { user: req.user }));
        const payment = {};

        switch (req.query.payment) {
            case 'crypto-wallet': payment.cryptoWallet = true; break;
            case 'credit-card': payment.creditCard = true; break;
            case 'debit-card': payment.debitCard = true; break;
            case 'paypal': payment.paypal = true; break;
        }

        res.render('search', { title: 'Search', offers, search: req.query.search, payment });
    } catch (err) {
        console.log(err.message);
    }
});

router.get('/create', isUser(), (req, res) => {
    res.render('create', { title: 'Create Page' });
});

router.post('/create', isUser(), async (req, res) => {
    const offerData = {
        name: req.body.name.trim(),
        imageUrl: req.body.imageUrl.trim(),
        price: req.body.price.trim(),
        description: req.body.description.trim(),
        payment: req.body.payment.trim(),
        owner: req.user._id
    };

    try {
        await req.storage.createOffer(offerData);
        res.redirect('/offers/catalog');
    } catch (err) {
        console.log(err.message);

        const ctx = {
            title: 'Create Page',
            errors: err.name == 'ValidationError' ?
                Object.values(err.errors).map(e => e.properties.message) :
                [err.message],
            offerData
        };
        console.log(ctx);

        res.render('create', ctx);
    }
});

router.get('/details/:id', async (req, res) => {
    try {
        const offer = await req.storage.getOfferById(req.params.id);
        offer.isOwner = req.user ? offer.owner == req.user._id : false;
        offer.hasBought = req.user ? offer.boughtBy.some(u => u._id == req.user._id) : false;

        res.render('details', { title: 'Details Page', offer });
    } catch (err) {
        console.log(err.message);

        res.redirect('/');
    }
});

router.get('/edit/:id', isUser(), async (req, res) => {
    try {
        const offerData = await req.storage.getOfferById(req.params.id);

        switch(offerData.payment) {
            case 'crypto-wallet': offerData.cryptoWallet = true; break;
            case 'credit-card': offerData.creditCard = true; break;
            case 'debit-card': offerData.debitCard = true; break;
            case 'paypal': offerData.paypal = true; break;
        }

        if (offerData.owner != req.user._id) {
            throw new Error('You cannot edit an offer you haven\'t created');
        }

        res.render('edit', { title: 'Edit Page', offerData });
    } catch (err) {
        console.log(err.message);
        res.redirect(`/offers/details/${req.params.id}`);
    }
});

router.post('/edit/:id', isUser(), async (req, res) => {
    const offerData = {
        _id: req.params.id,
        name: req.body.name.trim(),
        imageUrl: req.body.imageUrl.trim(),
        price: req.body.price.trim(),
        description: req.body.description.trim(),
        payment: req.body.payment.trim()
    };

    try {
        const offer = await req.storage.getOfferById(req.params.id);

        if (offer.owner != req.user._id) {
            throw new Error('You cannot edit an offer you haven\'t created');
        }

        await req.storage.editOffer(req.params.id, offerData);
        res.redirect(`/offers/details/${req.params.id}`);
    } catch (err) {
        console.log(err.message);

        const ctx = {
            title: 'Edit Page',
            errors: err.name == 'ValidationError' ?
                Object.values(err.errors).map(e => e.properties.message) :
                [err.message],
            offerData
        };

        res.render('edit', ctx);
    }
});

router.get('/buy/:id', isUser(), async (req, res) => {
    try {
        const offer = await req.storage.getOfferById(req.params.id);

        if (req.user._id == offer.owner || offer.boughtBy.some(u => u._id == req.user._id)) {
            const err = req.user._id == offer.owner ?
                new Error('You cannot buy your own offer!') :
                new Error('You have already bought this offer');

            throw err;
        }

        await req.storage.buyOffer(req.params.id, req.user._id);
        res.redirect(`/offers/details/${req.params.id}`);
    } catch (err) {
        console.log(err.message);
        res.redirect(`/offers/details/${req.params.id}`);
    }
});

router.get('/delete/:id', isUser(), async (req, res) => {
    try {
        const offer = await req.storage.getOfferById(req.params.id);

        if (offer.owner != req.user._id) {
            throw new Error('You cannot delete an offer you haven\'t created');
        }

        await req.storage.deleteOffer(req.params.id);
        res.redirect('/offers/catalog');
    } catch (err) {
        console.log(err.message);
        res.redirect(`/offers/details/${req.params.id}`);
    }
});

module.exports = router;