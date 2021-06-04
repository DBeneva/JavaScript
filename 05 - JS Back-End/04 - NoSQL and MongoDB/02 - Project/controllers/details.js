module.exports = {
    async details(req, res) {
        try {
            const cube = await req.storage.getById(req.params.id);

            if (cube == undefined) {
                res.redirect('/404');
            } else {
                const ctx = {
                    title: 'Cubicle',
                    cube
                };

                res.render('details', ctx);
            }
        } catch (err) {
            console.err(err.message);
        }
    },
    async attach(req, res) {
        const cube = await req.storage.getById(req.params.id);
        const accessories = await req.storage.getAllAccessories();
        res.render('attach', {
            title: 'Attach Stickers',
            cube,
            accessories
        })
    }
};