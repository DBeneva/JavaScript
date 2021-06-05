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
        const stickers = await req.storage.getAllStickers((cube.stickers || []).map(s => s._id));
        res.render('attach', {
            title: 'Attach Stickers',
            cube,
            stickers
        });
    },
    async attachPost(req, res) {
        const cubeId = req.params.cubeId;
        const stickerId = req.body.sticker;

        try {
            await req.storage.attachSticker(cubeId, stickerId);
            res.redirect(`/details/${cubeId}`);
        } catch (err) {
            console.error(err.message);
        }
    }
};