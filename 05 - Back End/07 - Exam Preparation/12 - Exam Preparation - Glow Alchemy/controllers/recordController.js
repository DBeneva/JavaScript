const router = require('express').Router();
const { isUser } = require('../middlewares/guards');


router.get('/search', async (req, res) => {
    try {
        console.log(req.query);
        
        const cosmetics = await req.storage.getAllRecords(req.query.search);
        
        res.render('search', { title: 'Search Products - GlowAlchemy', cosmetics, search: req.query.search });
    } catch (err) {
        console.log(err.message);
    }
});

router.get('/', async (req, res) => {
    try {
        const cosmetics = await req.storage.getAllRecords();

        res.render('catalog', { title: 'Product Catalog - GlowAlchemy', cosmetics });
    } catch (err) {
        console.log(err.message);
    }
});

router.get('/add', isUser(), (req, res) => {
    res.render('create', { title: 'Create Product - GlowAlchemy' });
});

router.post('/add', isUser(), async (req, res) => {
    const cosmeticData = {
        name: req.body.name.trim(),
        skin: req.body.skin.trim(),
        description: req.body.description.trim(),
        ingredients: req.body.ingredients,
        benefits: req.body.benefits.trim(),
        price: req.body.price.trim(),
        image: req.body.image.trim(),
        recommendList: req.body.recommendList,
        owner: req.user._id
    };

    try {
        await req.storage.addRecord(cosmeticData, req.user);
        res.redirect('/cosmetics');
    } catch (err) {
        console.log(err.message);

        const ctx = {
            title: 'Create Product - GlowAlchemy',
            error: err.name == 'ValidationError' ?
                Object.values(err.errors).map(e => e.properties.message)[0] :
                err.message,
            cosmeticData
        };
        console.log(ctx);

        res.render('create', ctx);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const cosmetic = await req.storage.getRecordById(req.params.id);
        cosmetic.isOwner = req.user ? cosmetic.owner._id == req.user._id : false;
        cosmetic.isUser = req.user ? true : false;
        cosmetic.hasRecommended = req.user && cosmetic.recommendList.toString().includes(req.user._id);

        console.log(cosmetic);

        res.render('details', { title: 'Product\'s Details - GlowAlchemy', cosmetic });
    } catch (err) {
        console.log(err.message);

        res.redirect('/');
    }
});

router.get('/edit/:id', isUser(), async (req, res) => {
    try {
        const cosmeticData = await req.storage.getRecordById(req.params.id);

        if (cosmeticData.owner._id != req.user._id) {
            throw new Error('You cannot edit a record you haven\'t created');
        }

        res.render('edit', { title: 'Edit Product - GlowAlchemy', cosmeticData });
    } catch (err) {
        console.log(err.message);
        res.redirect(`/cosmetics/${req.params.id}`);
    }
});

router.post('/edit/:id', isUser(), async (req, res) => {
    const cosmeticData = {
        _id: req.params.id,
        name: req.body.name.trim(),
        skin: req.body.skin.trim().split(': ')[1].substring(0, req.body.skin.trim().length - 1),
        description: req.body.description.trim(),
        ingredients: req.body.ingredients,
        benefits: req.body.benefits.trim(),
        price: req.body.price.trim(),
        image: req.body.image.trim(),
        recommendList: req.body.recommendList,
        owner: req.user._id
    };

    try {
        const cosmetic = await req.storage.getRecordById(req.params.id);
        console.log('cosmetic to be edited:', cosmetic.owner._id.toString().includes(req.user._id));

        if (!cosmetic.owner._id.toString().includes(req.user._id)) {
            throw new Error('You cannot edit a record you haven\'t created');
        }

        await req.storage.editRecord(req.params.id, cosmeticData);
        res.redirect(`/cosmetics/${req.params.id}`);
    } catch (err) {
        console.log(err.name);
        console.log(cosmeticData);
        
        const ctx = {
            title: 'Edit Product - GlowAlchemy',
            error: err.name == 'ValidationError' ?
                Object.values(err.errors).map(e => e.properties.message)[0] :
                err.message,
            cosmeticData
        };

        res.render('edit', ctx);
    }
});

router.get('/recommend/:id', isUser(), async (req, res) => {
    try {
        const cosmetic = await req.storage.getRecordById(req.params.id);

        if (req.user._id === cosmetic.owner._id) {
            throw new Error('You cannot recommend your own cosmetic!');
        }

        await req.storage.recommendCosmetic(req.params.id, req.user._id);
        res.redirect(`/cosmetics/${req.params.id}`);
    } catch (err) {
        console.log(err.message);
        res.redirect(`/cosmetics/${req.params.id}`);
    }
});

router.get('/delete/:id', isUser(), async (req, res) => {
    try {
        const cosmetic = await req.storage.getRecordById(req.params.id);

        if (cosmetic.owner._id != req.user._id) {
            throw new Error('You cannot delete a record you haven\'t created');
        }

        await req.storage.deleteRecord(req.params.id);
        res.redirect('/cosmetics');
    } catch (err) {
        console.log(err.message);
        res.redirect(`/cosmetics/${req.params.id}`);
    }
});

module.exports = router;