module.exports = {
    async catalog(req, res) {
        try {
            const cubes = await req.storage.getAll(req.query);

            const ctx = {
                title: 'Cubicle',
                search: req.query.search || '',
                from: req.query.from || '',
                to: req.query.to || '',
                cubes
            };
            
            res.render('catalog', ctx);
        } catch (err) {
            console.error(err.message);
        }
    }
};