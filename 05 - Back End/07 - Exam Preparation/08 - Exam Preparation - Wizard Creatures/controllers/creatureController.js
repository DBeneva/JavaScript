const router = require('express').Router();
const { isUser } = require('../middlewares/guards');

router.get('/', async (req, res) => {
    try {
        const creatures = await req.storage.getAllCreatures();

        res.render('allPosts', { title: 'Catalog Page', creatures });
    } catch (err) {
        console.log(err.message);
    }
});

router.get('/add', isUser(), (req, res) => {
    res.render('create', { title: 'Create Page' });
});

router.post('/add', isUser(), async (req, res) => {
    const creatureData = {
        name: req.body.name.trim(),
        species: req.body.species.trim(),
        skinColor: req.body.skinColor.trim(),
        eyeColor: req.body.eyeColor.trim(),
        image: req.body.image.trim(),
        description: req.body.description.trim(),
        owner: req.user._id,
        votedEmails: ''
    };

    try {
        await req.storage.addCreature(creatureData, req.user);
        res.redirect('/creatures');
    } catch (err) {
        console.log(err.message);

        const ctx = {
            title: 'Create Page',
            error: err.name == 'ValidationError' ?
                Object.values(err.errors).map(e => e.properties.message)[0] :
                err.message,
            creatureData
        };
        console.log(ctx);

        res.render('create', ctx);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const creature = await req.storage.getCreatureById(req.params.id);
        creature.isOwner = req.user ? creature.owner == req.user._id : false;
        creature.isUser = req.user ? true : false;
        creature.hasVoted = req.user && creature.votes.toString().includes(req.user._id);

        console.log(creature);

        res.render('details', { title: 'Details Page', creature });
    } catch (err) {
        console.log(err.message);

        res.redirect('/');
    }
});

router.get('/edit/:id', isUser(), async (req, res) => {
    try {
        const creatureData = await req.storage.getCreatureById(req.params.id);

        if (creatureData.owner != req.user._id) {
            throw new Error('You cannot edit a record you haven\'t created');
        }

        res.render('edit', { title: 'Edit Page', creatureData });
    } catch (err) {
        console.log(err.message);
        res.redirect(`/creatures/${req.params.id}`);
    }
});

router.post('/edit/:id', isUser(), async (req, res) => {
    const creatureData = {
        _id: req.params.id,
        name: req.body.name.trim(),
        species: req.body.species.trim(),
        skinColor: req.body.skinColor.trim(),
        eyeColor: req.body.eyeColor.trim(),
        image: req.body.image.trim(),
        description: req.body.description.trim()
    };

    try {
        const creature = await req.storage.getCreatureById(req.params.id);

        if (creature.owner != req.user._id) {
            throw new Error('You cannot edit a record you haven\'t created');
        }

        await req.storage.editCreature(req.params.id, creatureData);
        res.redirect(`/creatures/${req.params.id}`);
    } catch (err) {
        console.log(err.message);

        const ctx = {
            title: 'Edit Page',
            errors: err.name == 'ValidationError' ?
                Object.values(err.errors).map(e => e.properties.message)[0] :
                err.message,
            creatureData
        };

        res.render('edit', ctx);
    }
});

router.get('/vote/:id', isUser(), async (req, res) => {
    try {
        const creature = await req.storage.getCreatureById(req.params.id);

        if (req.user._id == creature.owner) {
            throw new Error('You cannot vote for your own creature!');
        }

        await req.storage.voteForCreature(req.params.id, req.user._id);
        res.redirect(`/creatures/${req.params.id}`);
    } catch (err) {
        console.log(err.message);
        res.redirect(`/creatures/${req.params.id}`);
    }
});

router.get('/delete/:id', isUser(), async (req, res) => {
    try {
        const creature = await req.storage.getCreatureById(req.params.id);

        if (creature.owner != req.user._id) {
            throw new Error('You cannot delete a record you haven\'t created');
        }

        await req.storage.deleteCreature(req.params.id);
        res.redirect('/creatures');
    } catch (err) {
        console.log(err.message);
        res.redirect(`/creatures/details/${req.params.id}`);
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