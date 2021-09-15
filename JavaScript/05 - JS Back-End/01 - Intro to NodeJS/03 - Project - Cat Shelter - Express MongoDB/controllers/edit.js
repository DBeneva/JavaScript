module.exports = {
    async edit(req, res) {
        const cat = await req.storage.getById(req.params.id);
        let breeds = await req.storage.getAllBreeds();
        breeds = breeds.map((b) => Object.assign({ current: (b.name == cat.breed) ? true : false }, b));
        
        if (!cat) {
            res.redirect('/');
        } else  {
            const ctx = {
                cat,
                breeds
            };

            res.render('edit', ctx);
        }        
    },
    async editPost(req, res) {
        const cat = {
            name: req.body.name,
            image: req.body.image,
            description: req.body.description,
            breed: req.body.breed
        };

        try {
            await req.storage.edit(req.params.id, cat);
            res.redirect('/');
        } catch (err) {
            console.error(err.message);
        }
    }
};