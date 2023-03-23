const router = require('express').Router();
const { isUser } = require('../middlewares/guards');

router.get('/', async (req, res) => {
    try {
        const games = await req.storage.getAllGames();

        res.render('catalog', { title: 'Game Catalog', games });
    } catch (err) {
        console.log(err.message);
    }
});

router.get('/create', isUser(), (req, res) => {
    res.render('create', { title: 'Create Page - Gaming Team' });
});

router.post('/create', isUser(), async (req, res) => {
    const gameData = {
        platform: req.body.platform.trim(),
        name: req.body.name.trim(),
        image: req.body.image.trim(),
        price: req.body.price.trim(),
        genre: req.body.genre.trim(),
        description: req.body.description.trim(),
        owner: req.user._id
    };

    try {
        await req.storage.createGame(gameData, req.user);
        res.redirect('/games');
    } catch (err) {
        console.log(err.message);

        gameData[gameData.platform] = true;

        const ctx = {
            title: 'Create Page - Gaming Team',
            errors: err.name == 'ValidationError' ?
                Object.values(err.errors).map(e => e.properties.message) :
                [err.message],
            gameData
        };
        console.log(ctx);

        res.render('create', ctx);
    }
});

router.get('/details/:id', async (req, res) => {
    try {
        const game = await req.storage.getGameById(req.params.id);
        game.isOwner = req.user ? game.owner == req.user._id : false;
        game.isUser = req.user ? true : false;
        game.hasBought = req.user && game.boughtBy.toString().includes(req.user._id);

        console.log(game);

        res.render('details', { title: 'Details Page', game });
    } catch (err) {
        console.log(err.message);

        res.redirect('/');
    }
});

router.get('/edit/:id', isUser(), async (req, res) => {
    try {
        const gameData = await req.storage.getGameById(req.params.id);
        gameData[gameData.platform] = true;

        if (gameData.owner != req.user._id) {
            throw new Error('You cannot edit a game you haven\'t created');
        }

        res.render('edit', { title: 'Edit Page - Gaming Team', gameData });
    } catch (err) {
        console.log(err.message);
        res.redirect(`/games/details/${req.params.id}`);
    }
});

router.post('/edit/:id', isUser(), async (req, res) => {
    const gameData = {
        _id: req.params.id,
        platform: req.body.platform,
        name: req.body.name.trim(),
        image: req.body.image.trim(),
        price: req.body.price,
        genre: req.body.genre.trim(),
        description: req.body.description.trim(),
    };

    try {
        const game = await req.storage.getGameById(req.params.id);

        if (game.owner != req.user._id) {
            throw new Error('You cannot edit a game you haven\'t created');
        }

        await req.storage.editGame(req.params.id, gameData);
        res.redirect(`/games/details/${req.params.id}`);
    } catch (err) {
        console.log(err.message);

        gameData[gameData.platform] = true;

        const ctx = {
            title: 'Edit Page - Gaming Team',
            errors: err.name == 'ValidationError' ?
                Object.values(err.errors).map(e => e.properties.message) :
                [err.message],
            gameData
        };

        res.render('edit', ctx);
    }
});

router.get('/buy/:id', isUser(), async (req, res) => {
    try {
        const game = await req.storage.getGameById(req.params.id);

        if (req.user._id == game.owner) {
            throw new Error('You cannot buy your own game!');
        }

        await req.storage.buyGame(req.params.id, req.user._id);
        res.redirect(`/games/details/${req.params.id}`);
    } catch (err) {
        console.log(err.message);
        res.redirect(`/games/details/${req.params.id}`);
    }
});

router.get('/delete/:id', isUser(), async (req, res) => {
    try {
        const game = await req.storage.getGameById(req.params.id);

        if (game.owner != req.user._id) {
            throw new Error('You cannot delete a game you haven\'t created');
        }

        await req.storage.deleteGame(req.params.id);
        res.redirect('/games');
    } catch (err) {
        console.log(err.message);
        res.redirect(`/games/details/${req.params.id}`);
    }
});

router.get('/search', async (req, res) => {
    try {
        const games = await req.storage.getAllGames(req.query);
        const platform = { [req.query.platform]: true };

        res.render('search', { title: 'Search Page - Gaming Team', games, search: req.query.search, platform });
    } catch (err) {
        console.log(err.message);
    }
});

module.exports = router;