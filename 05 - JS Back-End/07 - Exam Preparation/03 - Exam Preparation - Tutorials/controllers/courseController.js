const router = require('express').Router();
const { isUser } = require('../middlewares/guards');

router.get('create', isUser(), (req, res) => {
    res.render('create', { title: 'Create a Course' });
});

router.post('create', isUser(), (req, res) => {
    
});

router.get('details/:id', isUser(), async (req, res) => {
    try {
        const course = await req.storage.getCourseById(req.params.id);
        res.render('details', { title: 'Create a Course', course });
    } catch (err) {

    }
});

router.get('edit/:id', isUser(), async (req, res) => {
    try {
        const course = await req.storage.getCourseById(req.params.id);
        res.render('edit', { title: 'Edit Course', course });
    } catch (err) {

    }
});

router.post('edit/:id', isUser(), async (req, res) => {
    try {
        
    } catch (err) {

    }
});

router.get('enroll/:id', isUser(), async (req, res) => {
    try {
        
    } catch (err) {

    }
});

router.get('delete/:id', isUser(), async (req, res) => {
    try {
        await req.storage.deleteCourse(req.params.id);
        res.redirect('/');
    } catch (err) {

    }
});

module.exports = router;