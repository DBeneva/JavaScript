const router = require('express').Router();
const { isUser } = require('../middlewares/guards');

router.get('/', async (req, res) => {
    try {
        const animals = await req.storage.getAllAnimals();

        res.render('dashboard', { title: 'Dashboard Page', animals });
    } catch (err) {
        console.log(err.message);
    }
});

router.get('/create', isUser(), (req, res) => {
    res.render('create', { title: 'Create Page' });
});

router.post('/create', isUser(), async (req, res) => {
    const animalData = {
        name: req.body.name.trim(),
        years: req.body.years.trim(),
        kind: req.body.kind.trim(),
        image: req.body.image.trim(),
        need: req.body.need.trim(),
        location: req.body.location.trim(),
        description: req.body.description.trim(),
        owner: req.user._id
    };

    try {
        await req.storage.createGame(animalData, req.user);
        res.redirect('/animals');
    } catch (err) {
        console.log(err.message);

        animalData[animalData.platform] = true;

        const ctx = {
            title: 'Create Page',
            error: err.name == 'ValidationError' ?
                Object.values(err.errors).map(e => e.properties.message)[0] :
                err.message,
            animalData
        };
        console.log(ctx);

        res.render('create', ctx);
    }
});

router.get('/details/:id', async (req, res) => {
    try {
        const animal = await req.storage.getAnimalById(req.params.id);
        animal.isOwner = req.user ? animal.owner == req.user._id : false;
        animal.isUser = req.user ? true : false;
        animal.hasDonated = req.user && animal.donations.toString().includes(req.user._id);

        console.log(animal);

        res.render('details', { title: 'Details Page', animal });
    } catch (err) {
        console.log(err.message);

        res.redirect('/');
    }
});

router.get('/edit/:id', isUser(), async (req, res) => {
    try {
        const animalData = await req.storage.getAnimalById(req.params.id);

        if (animalData.owner != req.user._id) {
            throw new Error('You cannot edit a post you haven\'t created');
        }

        res.render('edit', { title: 'Edit Page', animalData });
    } catch (err) {
        console.log(err.message);
        res.redirect(`/animals/details/${req.params.id}`);
    }
});

router.post('/edit/:id', isUser(), async (req, res) => {
    const animalData = {
        _id: req.params.id,
        name: req.body.name.trim(),
        years: req.body.years,
        kind: req.body.kind,
        image: req.body.image.trim(),
        need: req.body.need.trim(),
        location: req.body.location.trim(),
        description: req.body.description.trim(),
    };

    try {
        const animal = await req.storage.getAnimalById(req.params.id);

        if (animal.owner != req.user._id) {
            throw new Error('You cannot edit a post you haven\'t created');
        }

        await req.storage.editAnimal(req.params.id, animalData);
        res.redirect(`/animals/details/${req.params.id}`);
    } catch (err) {
        console.log(err.message);

        const ctx = {
            title: 'Edit Page',
            errors: err.name == 'ValidationError' ?
                Object.values(err.errors).map(e => e.properties.message)[0] :
                err.message,
            animalData
        };

        res.render('edit', ctx);
    }
});

router.get('/donate/:id', isUser(), async (req, res) => {
    try {
        const animal = await req.storage.getAnimalById(req.params.id);

        if (req.user._id == animal.owner) {
            throw new Error('You cannot donate to your own animal!');
        }

        await req.storage.donateToAnimal(req.params.id, req.user._id);
        res.redirect(`/animals/details/${req.params.id}`);
    } catch (err) {
        console.log(err.message);
        res.redirect(`/animals/details/${req.params.id}`);
    }
});

router.get('/delete/:id', isUser(), async (req, res) => {
    try {
        const animal = await req.storage.getAnimalById(req.params.id);

        if (animal.owner != req.user._id) {
            throw new Error('You cannot delete a post you haven\'t created');
        }

        await req.storage.deleteAnimal(req.params.id);
        res.redirect('/animals');
    } catch (err) {
        console.log(err.message);
        res.redirect(`/animals/details/${req.params.id}`);
    }
});

router.get('/search', async (req, res) => {
    try {
        const animals = await req.storage.getAllAnimals(req.query);

        res.render('search', { title: 'Search Page', animals, search: req.query.search });
    } catch (err) {
        console.log(err.message);
    }
});

module.exports = router;