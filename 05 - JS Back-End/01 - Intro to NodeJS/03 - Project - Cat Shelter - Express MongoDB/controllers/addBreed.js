module.exports = {
    addBreed(req, res) {
        res.render('addBreed');
    },
    async breedPost(req, res) {
        const breed = { name: req.body.name };
        console.log(breed);

        try {
            await req.storage.addBreed(breed);
            res.redirect('/');
        } catch (err) {
            if (err.name == 'ValidationError') {
                return res.render('addBreed', { error: 'All fields are required. Image must be a valid URL.' });
            }
        }
    }
};