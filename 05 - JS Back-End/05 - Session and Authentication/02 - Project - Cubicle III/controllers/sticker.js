module.exports = {
    createSticker(req, res) {
        res.render('createSticker', { title: 'Create Sticker' });
    },
    async post(req, res) {
        const sticker = {
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl
        };
        
        try {
            await req.storage.createSticker(sticker);
            res.redirect('/');
        } catch (err) {
            if (err.name == 'ValidationError') {
                return res.render('sticker/create', { title: 'Create Sticker', error: 'All fields are required. Image URL must be a valid URL' });
            }
        }
    }
};