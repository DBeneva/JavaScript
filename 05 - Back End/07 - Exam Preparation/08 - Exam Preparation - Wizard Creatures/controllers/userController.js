const router = require('express').Router();
const { isUser } = require('../middlewares/guards');

router.get('/:id', isUser(), async (req, res) => {
    const user = await req.storage.getUserById(req.user._id);
    const creatures = user.creatures;
    res.render('profile', { title: 'My Posts', creatures });
});

module.exports = router;