module.exports = {
    async addBreed(req, res) {
        res.render('addBreed');
    },
    async breedPost(req, res) {
        const breed = { name: req.body.name };
        console.log(breed);
        await req.storage.addBreed(breed);

        res.redirect('/');
    }
};