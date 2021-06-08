module.exports = {
    async addCat(req, res) {
        const breeds = await req.storage.getAllBreeds();
        res.render('addCat', { breeds });
    },
    async catPost(req, res) {
        const cat = {
            name: req.body.name,
            image: req.body.image,
            description: req.body.description,
            breed: req.body.breed
        };
    
        try {
            await req.storage.addCat(cat);
            res.redirect('/');
        } catch (err) {
            if (err.name == 'ValidationError') {
                return res.render('addCat', { error: 'All fields are required. Image must be a valid URL' });
            }
        }
    }
};