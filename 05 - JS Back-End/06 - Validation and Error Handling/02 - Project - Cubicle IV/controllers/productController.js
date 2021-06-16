const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const { parseMongooseError } = require('../util/parse');

router.get('/', async (req, res) => {
    const cubes = await req.storage.getAll(req.query);
    const ctx = {
        title: 'Cubicle',
        cubes,
        search: req.query.search || '',
        from: req.query.from || '',
        to: req.query.to || ''
    };

    res.render('catalog', ctx);
});

router.get(
    '/create',
    (req, res, next) => req.isAuth(req, res, next),
    (req, res) => {
        res.render('create', { title: 'Create Cube', cube: {} });
    });

router.post(
    '/create',
    //body('imageURL', 'Image must be a valid URL').isURL(),
    body('difficulty').notEmpty().toInt(),
    (req, res, next) => req.isAuth(req, res, next),
    async (req, res) => {
        const cube = {
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            difficulty: req.body.difficulty,
            author: req.user._id
        };
        cube[`selected${req.body.difficulty}`] = true;
        console.log(cube);

        const { errors } = validationResult(req);
        console.log(errors);

        try {
            // throw new Error('Gotcha!');
            await req.storage.create(cube);
            res.redirect('/');
        } catch (err) {
            const ctx = {
                title: 'Create Cube',
                cube
            };

            if (err.name == 'ValidationError') {
                ctx.errors = parseMongooseError(err);
            } else {
                ctx.errors = [err.message];
            }
            
            res.render('create', ctx);
        }

    });

router.get('/details/:id',
    async (req, res, next) => await req.preloadCube(req, res, next),
    async (req, res) => {
        const cube = req.data.cube;

        if (cube == undefined) {
            res.redirect('/404');
        } else {
            cube.isOwner = req.user && (cube.authorId == req.user._id);
            const loggedUser = req.user ? req.user.username : '';

            const ctx = {
                title: 'Cubicle',
                cube,
                loggedUser
            };

            res.render('details', ctx);
        }
    });

router.get('/edit/:id',
    async (req, res, next) => await req.preloadCube(req, res, next),
    (req, res, next) => req.isOwner(req, res, next),
    async (req, res) => {
        const cube = req.data.cube;

        if (!cube) {
            res.redirect('/404');
        } else {
            cube[`select${cube.difficulty}`] = true;
            const ctx = {
                title: 'Edit Cube',
                cube
            };

            res.render('edit', ctx);
        }
    });

router.post('/edit/:id',
    async (req, res, next) => await req.preloadCube(req, res, next),
    (req, res, next) => req.isOwner(req, res, next),
    async (req, res) => {
        const cube = {
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            difficulty: Number(req.body.difficulty)
        };

        try {
            await req.storage.edit(req.params.id, cube);
            res.redirect(`/products/details/${req.params.id}`);
        } catch (err) {
            res.redirect('/404');
        }
    });

router.get('/details/:cubeId/attach', async (req, res) => {
    const cube = await req.storage.getById(req.params.cubeId);
    const stickers = await req.storage.getAllStickers((cube.stickers || []).map(s => s._id));

    res.render('attach', {
        title: 'Attach Stickers',
        cube,
        stickers
    });
});

router.post('/details/:cubeId/attach', async (req, res) => {
    const cubeId = req.params.cubeId;
    const stickerId = req.body.sticker;

    await req.storage.attachSticker(cubeId, stickerId);
    res.redirect(`/products/details/${cubeId}`);
});

router.get('/delete/:id',
    async (req, res, next) => await req.preloadCube(req, res, next),
    (req, res, next) => req.isOwner(req, res, next),
    async (req, res) => {
        const cube = await req.storage.getById(req.params.id);

        if (!cube) {
            res.redirect('/404');
        } else {
            cube[`select${cube.difficulty}`] = true;
            const ctx = {
                title: 'Delete Cube',
                cube
            };

            res.render('delete', ctx);
        }
    });

router.post('/delete/:id',
    async (req, res, next) => await req.preloadCube(req, res, next),
    (req, res, next) => req.isOwner(req, res, next),
    async (req, res) => {
        await req.storage.deleteCube(req.params.id);
        res.redirect('/');
    });

module.exports = router;