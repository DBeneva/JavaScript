const router = require('express').Router();
const { isUser } = require('../middlewares/guards');


router.get('/search', async (req, res) => {
    try {
        console.log(req.query);
        
        const planets = await req.storage.getAllRecords(req.query);
        
        res.render('search', { title: 'Planet Search', planets, name: req.query.name, solarSystem: req.query.solarSystem });
    } catch (err) {
        console.log(err.message);
    }
});

router.get('/', async (req, res) => {
    try {
        const planets = await req.storage.getAllRecords();

        res.render('catalog', { title: 'Planet Catalog', planets });
    } catch (err) {
        console.log(err.message);
    }
});

router.get('/add', isUser(), (req, res) => {
    res.render('create', { title: 'Create Page' });
});

router.post('/add', isUser(), async (req, res) => {
    const planetData = {
        name: req.body.name.trim(),
        age: req.body.age.trim(),
        solarSystem: req.body.solarSystem.trim(),
        type: req.body.type,
        moons: req.body.moons.trim(),
        size: req.body.size.trim(),
        rings: req.body.rings,
        description: req.body.description.trim(),
        image: req.body.image.trim(),
        likedList: req.body.likedList,
        owner: req.user._id
    };

    planetData[planetData.type] = true;
    planetData[planetData.rings] = true;

    try {
        await req.storage.addRecord(planetData, req.user);
        res.redirect('/planets');
    } catch (err) {
        console.log(err.message);

        const ctx = {
            title: 'Add New Planet',
            error: err.name == 'ValidationError' ?
                Object.values(err.errors).map(e => e.properties.message)[0] :
                err.message,
            planetData
        };
        console.log(ctx);

        res.render('create', ctx);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const planet = await req.storage.getRecordById(req.params.id);
        planet.isOwner = req.user ? planet.owner._id == req.user._id : false;
        planet.isUser = req.user ? true : false;
        // planet.hasSignedUp = req.user && planet.signUpList.toString().includes(req.user._id);

        console.log(planet);

        res.render('details', { title: 'Planet Details', planet });
    } catch (err) {
        console.log(err.message);

        res.redirect('/');
    }
});

router.get('/edit/:id', isUser(), async (req, res) => {
    try {
        const planetData = await req.storage.getRecordById(req.params.id);

        if (planetData.owner._id != req.user._id) {
            throw new Error('You cannot edit a record you haven\'t created');
        }

        res.render('edit', { title: 'Edit Planet', planetData });
    } catch (err) {
        console.log(err.message);
        res.redirect(`/planets/${req.params.id}`);
    }
});

router.post('/edit/:id', isUser(), async (req, res) => {
    const planetData = {
        _id: req.params.id,
        name: req.body.name.trim(),
        age: req.body.age.trim(),
        solarSystem: req.body.solarSystem.trim(),
        type: req.body.type,
        moons: req.body.moons.trim(),
        size: req.body.size.trim(),
        rings: req.body.rings,
        description: req.body.description.trim(),
        image: req.body.image.trim(),
        likedList: req.body.likedList,
        owner: req.user._id
    };

    planetData[planetData.type] = true;
    planetData[planetData.rings] = true;

    try {
        const planet = await req.storage.getRecordById(req.params.id);
        console.log('planet to be edited:', planet.owner._id.toString().includes(req.user._id));

        if (!planet.owner._id.toString().includes(req.user._id)) {
            throw new Error('You cannot edit a record you haven\'t created');
        }

        await req.storage.editRecord(req.params.id, planetData);
        res.redirect(`/planets/${req.params.id}`);
    } catch (err) {
        console.log(err.name);
        console.log(planetData);
        

        const ctx = {
            title: 'Edit Planet',
            error: err.name == 'ValidationError' ?
                Object.values(err.errors).map(e => e.properties.message)[0] :
                err.message,
            planetData
        };

        res.render('edit', ctx);
    }
});

router.get('/like/:id', isUser(), async (req, res) => {
    try {
        const planet = await req.storage.getRecordById(req.params.id);

        if (req.user._id === planet.owner._id) {
            throw new Error('You cannot like your own planet!');
        }

        await req.storage.likePlanet(req.params.id, req.user._id);
        res.redirect(`/planets/${req.params.id}`);
    } catch (err) {
        console.log(err.message);
        res.redirect(`/planets/${req.params.id}`);
    }
});

router.get('/delete/:id', isUser(), async (req, res) => {
    try {
        const planet = await req.storage.getRecordById(req.params.id);

        if (planet.owner._id != req.user._id) {
            throw new Error('You cannot delete a record you haven\'t created');
        }

        await req.storage.deleteRecord(req.params.id);
        res.redirect('/planets');
    } catch (err) {
        console.log(err.message);
        res.redirect(`/planets/details/${req.params.id}`);
    }
});

module.exports = router;