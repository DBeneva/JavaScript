module.exports = {
    createAccessory(req, res) {
        res.render('createAccessory', { title: 'Create Accessory' });
    },
    async post(req, res) {
        try {
            const accessory = {
                name: req.body.name,
                description: req.body.description,
                imageUrl: req.body.imageUrl
            };
    
            await req.storage.createAccessory(accessory);
            res.redirect('/');
        } catch (err) {
            console.error(err.message);
        }
    }
};