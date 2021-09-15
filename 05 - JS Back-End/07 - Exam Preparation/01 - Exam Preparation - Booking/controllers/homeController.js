const router = require('express').Router();
const { isUser } = require('../middlewares/guards');

router.get('/', async (req, res) => {
    const hotels = await req.storage.getAllHotels();
    res.render('home', { title: 'Home', hotels });
});

router.get('/user/:id', isUser(), async (req, res) => {
    const user = await req.storage.getUserById(req.params.id);
    user.reservations = user.reservations.map(h => h.name);
    res.render('profile', { title: 'Your Profile', user });
});

module.exports = router;