const router = require('express').Router();
const { isUser } = require('../middlewares/guards');

router.get('/create', isUser(), (req, res) => {
    res.render('create', { title: 'Create a Course' });
});

router.post('/create', isUser(), async (req, res) => {
    const courseData = {
        title: req.body.title.trim(),
        description: req.body.description.trim(),
        imageUrl: req.body.imageUrl.trim(),
        duration: req.body.duration.trim(),
        author: req.user._id
    };

    try {
        await req.storage.createCourse(courseData);
        res.redirect('/');
    } catch (err) {
        console.log(err.message);

        const ctx = {
            title: 'Create a Course',
            errors: err.name == 'ValidationError' ?
                Object.values(err.errors).map(e => e.properties.message) :
                [err.message],
            courseData
        };
        console.log(ctx);

        res.render('create', ctx);
    }
});

router.get('/details/:id', isUser(), async (req, res) => {
    try {
        const course = await req.storage.getCourseById(req.params.id);
        course.isAuthor = course.author == req.user._id;
        course.isEnrolled = course.users.some(u => u._id == req.user._id);

        res.render('details', { title: course.title, course });
    } catch (err) {
        console.log(err.message);

        res.redirect('/');
    }
});

router.get('/edit/:id', isUser(), async (req, res) => {
    try {
        const courseData = await req.storage.getCourseById(req.params.id);

        if (courseData.author != req.user._id) {
            throw new Error('You cannot edit a course you haven\'t created');
        }

        res.render('edit', { title: 'Edit Course', courseData });
    } catch (err) {
        console.log(err.message);
        res.redirect(`/courses/details/${req.params.id}`);
    }
});

router.post('/edit/:id', isUser(), async (req, res) => {
    const courseData = {
        _id: req.params.id,
        title: req.body.title.trim(),
        description: req.body.description.trim(),
        imageUrl: req.body.imageUrl.trim(),
        duration: req.body.duration.trim()
    };

    try {
        const course = await req.storage.getCourseById(req.params.id);

        if (course.author != req.user._id) {
            throw new Error('You cannot edit a course you haven\'t created');
        }

        await req.storage.editCourse(req.params.id, courseData);
        res.redirect(`/courses/details/${req.params.id}`);
    } catch (err) {
        console.log(err.message);

        const ctx = {
            title: 'Edit Course',
            errors: err.name == 'ValidationError' ?
                Object.values(err.errors).map(e => e.properties.message) :
                [err.message],
            courseData
        };

        res.render('edit', ctx);
    }
});

router.get('/enroll/:id', isUser(), async (req, res) => {
    try {
        const course = await req.storage.getCourseById(req.params.id);

        if (req.user._id == course.author || course.users.some(u => u._id == req.user._id)) {
            const err = req.user._id == course.author ?
                new Error('You cannot enroll in your own course!') :
                new Error('You are already enrolled in this course');

            throw err;
        }

        await req.storage.enrollCourse(req.params.id, req.user._id);
        res.redirect(`/courses/details/${req.params.id}`);
    } catch (err) {
        console.log(err.message);
        res.redirect(`/courses/details/${req.params.id}`);
    }
});

router.get('/delete/:id', isUser(), async (req, res) => {
    try {
        const course = await req.storage.getCourseById(req.params.id);

        if (course.author != req.user._id) {
            throw new Error('You cannot delete a course you haven\'t created');
        }

        await req.storage.deleteCourse(req.params.id);
        res.redirect('/');
    } catch (err) {
        console.log(err.message);
        res.redirect(`/courses/details/${req.params.id}`);
    }
});

module.exports = router;