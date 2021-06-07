module.exports = {
    async addCat(req, res) {
        const breeds = await req.storage.getAllBreeds();
        res.render('addCat', breeds);
    },
    async catPost(req, res) {
        const cat = {
            name: req.body.name,
            image: req.body.image,
            description: req.body.description,
            breed: req.body.breed
        };
    
        console.log(req.body);

    }
};