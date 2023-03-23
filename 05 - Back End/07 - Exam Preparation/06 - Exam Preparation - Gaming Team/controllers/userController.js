const router = require('express').Router();
const { isUser } = require('../middlewares/guards');

router.get('/:id', isUser(), async (req, res) => {
    const user = await req.storage.getUserById(req.user._id);
    user.singlePhoto = user.photos.length === 1;
    res.render('profile', { title: 'Profile', user });
});

module.exports = router;