const router = require('express').Router();

router.get('/', async (req, res) => {
    const hotels = await req.storage.getAllHotels();
    res.render('home', { title: 'Home', hotels });
});

router.get(
    '/user/:id',
    (req, res, next) => req.guards.isUser(req, res, next),
    async (req, res) => {
        const user = await req.storage.getUserById(req.params.id);
        res.render('profile', { title: 'Your Profile', user });
    });

module.exports = router;