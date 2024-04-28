const router = require('express').Router();
const { isUser } = require('../middlewares/guards');

router.get('/', async (req, res) => {
    try {
        const courses = await req.storage.getAllRecords();

        res.render('catalog', { title: 'Catalog Page', courses });
    } catch (err) {
        console.log(err.message);
    }
});

router.get('/add', isUser(), (req, res) => {
    res.render('create', { title: 'Create Page' });
});

router.post('/add', isUser(), async (req, res) => {
    const courseData = {
        title: req.body.title.trim(),
        type: req.body.type.trim(),
        certificate: req.body.certificate.trim(),
        image: req.body.image.trim(),
        description: req.body.description.trim(),
        price: req.body.price,
        owner: req.user._id
    };

    try {
        await req.storage.addRecord(courseData, req.user);
        res.redirect('/courses');
    } catch (err) {
        console.log(err.message);

        const ctx = {
            title: 'Create Page',
            error: err.name == 'ValidationError' ?
                Object.values(err.errors).map(e => e.properties.message)[0] :
                err.message,
            courseData
        };
        console.log(ctx);

        res.render('create', ctx);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const course = await req.storage.getRecordById(req.params.id);
        course.isOwner = req.user ? course.owner._id == req.user._id : false;
        course.isUser = req.user ? true : false;
        course.hasSignedUp = req.user && course.signUpList.toString().includes(req.user._id);

        console.log(course);

        res.render('details', { title: 'Details Page', course });
    } catch (err) {
        console.log(err.message);

        res.redirect('/');
    }
});

router.get('/edit/:id', isUser(), async (req, res) => {
    try {
        const courseData = await req.storage.getRecordById(req.params.id);

        if (courseData.owner._id != req.user._id) {
            throw new Error('You cannot edit a record you haven\'t created');
        }

        res.render('edit', { title: 'Edit Page', courseData });
    } catch (err) {
        console.log(err.message);
        res.redirect(`/courses/${req.params.id}`);
    }
});

router.post('/edit/:id', isUser(), async (req, res) => {
    const courseData = {
        _id: req.params.id,
        title: req.body.title.trim(),
        type: req.body.type.trim(),
        certificate: req.body.certificate.trim(),
        image: req.body.image.trim(),
        description: req.body.description.trim(),
        price: req.body.price,
        owner: req.user._id
    };

    try {
        const course = await req.storage.getRecordById(req.params.id);
        console.log('course to be edited:', course.owner._id.toString().includes(req.user._id));

        if (!course.owner._id.toString().includes(req.user._id)) {
            throw new Error('You cannot edit a record you haven\'t created');
        }

        await req.storage.editRecord(req.params.id, courseData);
        res.redirect(`/courses/${req.params.id}`);
    } catch (err) {
        console.log(err.name);

        const ctx = {
            title: 'Edit Page',
            error: err.name == 'ValidationError' ?
                Object.values(err.errors).map(e => e.properties.message)[0] :
                err.message,
            courseData
        };

        res.render('edit', ctx);
    }
});

router.get('/sign-up/:id', isUser(), async (req, res) => {
    try {
        const course = await req.storage.getRecordById(req.params.id);

        if (req.user._id === course.owner._id) {
            throw new Error('You cannot sign up for your own course!');
        }

        await req.storage.signUpForCourse(req.params.id, req.user._id);
        res.redirect(`/courses/${req.params.id}`);
    } catch (err) {
        console.log(err.message);
        res.redirect(`/courses/${req.params.id}`);
    }
});

router.get('/delete/:id', isUser(), async (req, res) => {
    try {
        const course = await req.storage.getRecordById(req.params.id);

        if (course.owner._id != req.user._id) {
            throw new Error('You cannot delete a record you haven\'t created');
        }

        await req.storage.deleteRecord(req.params.id);
        res.redirect('/courses');
    } catch (err) {
        console.log(err.message);
        res.redirect(`/courses/details/${req.params.id}`);
    }
});

// router.get('/search', async (req, res) => {
//     try {
//         const animals = await req.storage.getAllAnimals(req.query);

//         res.render('search', { title: 'Search Page', animals, search: req.query.search });
//     } catch (err) {
//         console.log(err.message);
//     }
// });

module.exports = router;