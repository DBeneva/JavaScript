const router = require('express').Router();
const { isUser } = require('../middlewares/guards');

router.get('/catalog', async (req, res) => {
    try {
        const photos = await req.storage.getAllPhotos();
        
        photos.map(p => Object.assign(p, { user: req.user }));

        photos.map(async (p) => {
            console.log('OWNER ID', p.owner);   
            const user = await req.storage.getUserById(p.owner.toString());
            const username = user.username;
            p.ownerUsername = username;
        });

        res.render('catalog', { title: 'Photo Catalog', photos });
    } catch (err) {
        console.log(err.message);
    }
});

router.get('/create', isUser(), (req, res) => {
    res.render('create', { title: 'Create' });
});

router.post('/create', isUser(), async (req, res) => {
    const photoData = {
        name: req.body.name.trim(),
        age: req.body.age.trim(),
        description: req.body.description.trim(),
        location: req.body.location.trim(),
        image: req.body.image.trim(),
        owner: req.user._id
    };

    try {
        await req.storage.createPhoto(photoData, req.user);
        res.redirect('/photos/catalog');
    } catch (err) {
        console.log(err.message);

        const ctx = {
            title: 'Create Page',
            errors: err.name == 'ValidationError' ?
                Object.values(err.errors).map(e => e.properties.message) :
                [err.message],
            photoData
        };
        console.log(ctx);

        res.render('create', ctx);
    }
});

router.get('/details/:id', async (req, res) => {
    try {
        const photo = await req.storage.getPhotoById(req.params.id);
        photo.isOwner = req.user ? photo.owner == req.user._id : false;
        photo.isUser = req.user ? true : false;
        const user = await req.storage.getUserById(photo.owner);
        photo.ownerUsername = user.username;
        photo.commentList.map(async c => {
            const user = await req.storage.getUserById(c.userID);
            c.username = user.username;
        });

        console.log(photo);

        res.render('details', { title: 'Details', photo });
    } catch (err) {
        console.log(err.message);

        res.redirect('/');
    }
});

router.get('/edit/:id', isUser(), async (req, res) => {
    try {
        const photoData = await req.storage.getPhotoById(req.params.id);

        if (photoData.owner != req.user._id) {
            throw new Error('You cannot edit a photo you haven\'t created');
        }

        res.render('edit', { title: 'Edit', photoData });
    } catch (err) {
        console.log(err.message);
        res.redirect(`/photos/details/${req.params.id}`);
    }
});

router.post('/edit/:id', isUser(), async (req, res) => {
    const photoData = {
        _id: req.params.id,
        name: req.body.name.trim(),
        age: req.body.age.trim(),
        description: req.body.description.trim(),
        location: req.body.location.trim(),
        image: req.body.image.trim()
    };

    try {
        const photo = await req.storage.getPhotoById(req.params.id);

        if (photo.owner != req.user._id) {
            throw new Error('You cannot edit a photo you haven\'t created');
        }

        await req.storage.editPhoto(req.params.id, photoData);
        res.redirect(`/photos/details/${req.params.id}`);
    } catch (err) {
        console.log(err.message);

        const ctx = {
            title: 'Edit Page',
            errors: err.name == 'ValidationError' ?
                Object.values(err.errors).map(e => e.properties.message) :
                [err.message],
            photoData
        };

        res.render('edit', ctx);
    }
});

router.post('/comment/:id', isUser(), async (req, res) => {
    try {
        const photo = await req.storage.getPhotoById(req.params.id);
        const comment = req.body.comment;

        console.log('comment', comment);

        if (req.user._id == photo.owner) {
            throw new Error('You cannot comment your own photo!');
        }

        await req.storage.commentPhoto(req.params.id, req.user._id, comment);
        res.redirect(`/photos/details/${req.params.id}`);
    } catch (err) {
        console.log(err.message);
        res.redirect(`/photos/details/${req.params.id}`);
    }
});

router.get('/delete/:id', isUser(), async (req, res) => {
    try {
        const photo = await req.storage.getPhotoById(req.params.id);

        if (photo.owner != req.user._id) {
            throw new Error('You cannot delete a photo you haven\'t created');
        }

        await req.storage.deletePhoto(req.params.id);
        res.redirect('/photos/catalog');
    } catch (err) {
        console.log(err.message);
        res.redirect(`/photos/details/${req.params.id}`);
    }
});

module.exports = router;