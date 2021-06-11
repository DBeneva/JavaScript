const router = require('express').Router();

router.get('/create', (req, res) => {
    res.render('createSticker', { title: 'Create New Sticker' });
});

router.post('/create', async (req, res) => {
    const sticker = {
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl
    };
    
    await req.storage.createSticker(sticker);
    res.redirect('/');
});

module.exports = router;