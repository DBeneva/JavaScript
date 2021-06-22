const router = require('express').Router();

router.get(
    '/create',
    (req, res, next) => req.guards.isUser(req, res, next),
    (req, res) => {
        res.render('create', { title: 'Add a Play' });
    });

router.post(
    '/create',
    (req, res, next) => req.guards.isUser(req, res, next),
    async (req, res) => {
        const playData = {
            title: req.body.title,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            isPublic: (req.body.public == 'on') ? true : false,
            createdAt: new Date(),
            likes: []
        };

        try {
            await req.storage.createPlay(playData);
        } catch (err) {
            const ctx = {
                title: 'Add a Play',
                playData
            };

            if (err.name == 'ValidationError') {
                ctx.errors = Object.values(err.errors).map(e => e.properties.message);
            }

            res.render('create', ctx);
        }
    });

module.exports = router;