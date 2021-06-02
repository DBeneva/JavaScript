module.exports = {
    create(req, res) {
        res.render('create', { title: 'Create Cube' });
    },
    async post(req, res) {
        try {
            const cube = {
                name: req.body.name,
                description: req.body.description,
                imageUrl: req.body.imageUrl,
                difficulty: Number(req.body.difficulty)
            };
    
            await req.storage.create(cube);
    
            console.log(req.body);
            res.redirect('/');
        } catch (err) {
            console.error(err.message);
        }
    }
};