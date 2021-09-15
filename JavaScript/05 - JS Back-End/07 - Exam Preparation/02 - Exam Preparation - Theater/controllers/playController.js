const router = require('express').Router();
const { isUser } = require('../middlewares/guards');
const { parseError } = require('../util/parsers');

router.get('/create', isUser(), (req, res) => {
    res.render('create', { title: 'Add a Play' });
});

router.post('/create', isUser(), async (req, res) => {
    const playData = {
        title: req.body.title.trim(),
        description: req.body.description.trim(),
        imageUrl: req.body.imageUrl.trim(),
        isPublic: Boolean(req.body.isPublic),
        owner: req.user._id
    };

    try {
        await req.storage.createPlay(playData);
        res.redirect('/');
    } catch (err) {
        console.log(err.message);

        const ctx = {
            title: 'Add a Play',
            playData,
            errors: parseError(err)
        };

        res.render('create', ctx);
    }
});

router.get('/details/:id', async (req, res) => {
    try {
        const play = await req.storage.getPlayById(req.params.id);
        play.isOwner = req.user && play.owner == req.user._id
        play.liked = req.user && play.usersLiked.find(u => u._id.toString() == req.user._id);
        console.log(play.liked);
        res.render('details', { title: play.title, play });
    } catch (err) {
        console.log(err.message);
        res.redirect('/404');
    }
});

router.get('/edit/:id', isUser(), async (req, res) => {
    try {
        const playData = await req.storage.getPlayById(req.params.id);

        if (playData.owner != req.user._id) {
            throw new Error('Cannot edit a play you haven\'t created');
        }

        res.render('edit', { title: 'Edit Play', playData });
    } catch (err) {
        console.log(err.message);
        res.redirect(`/plays/details/${req.params.id}`);
    }
});

router.post('/edit/:id', isUser(), async (req, res) => {
    const playData = {
        _id: req.params.id,
        title: req.body.title.trim(),
        description: req.body.description.trim(),
        imageUrl: req.body.imageUrl.trim(),
        isPublic: Boolean(req.body.isPublic)
    };

    try {
        const play = await req.storage.getPlayById(req.params.id);

        if (play.owner != req.user._id) {
            throw new Error('Cannot edit a play you haven\'t created');
        }

        await req.storage.editPlay(req.params.id, playData);
        res.redirect('/');
    } catch (err) {
        const ctx = {
            title: 'Edit Play',
            playData,
            errors: parseError(err)
        };

        res.render('edit', ctx);
    }
});

router.get('/like/:id', isUser(), async (req, res) => {
    try {
        const play = await req.storage.getPlayById(req.params.id);

        if (play.owner == req.user._id) {
            throw new Error('You cannot like your own play!');
        }

        if (play.usersLiked.find(u => u._id.toString() == req.user._id)) {
            throw new Error('You can like this play only once!');
        }

        await req.storage.likePlay(req.params.id, req.user._id);
        res.redirect(`/plays/details/${req.params.id}`);
    } catch (err) {
        console.log(err.message);
        res.redirect(`/plays/details/${req.params.id}`);
    }
});

router.get('/delete/:id', isUser(), async (req, res) => {
    try {
        const play = await req.storage.getPlayById(req.params.id);

        if (play.owner != req.user._id) {
            throw new Error('Cannot delete a play you haven\'t created');
        }

        await req.storage.deletePlay(req.params.id);
        res.redirect('/');
    } catch (err) {
        console.log(err.message);
        res.redirect(`/plays/details/${req.params.id}`);
    }
});

module.exports = router;