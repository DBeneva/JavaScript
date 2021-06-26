const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const courses = await req.storage.getAllCourses(req.user, req.query.search);
        courses.map(c => Object.assign(c, { user: req.user }));
        courses.map(c => c.createdAt =
            `${c.createdAt.toDateString()} \
            ${c.createdAt.getHours().toString().padStart(2, '0')}:${(c.createdAt.getMinutes()).toString().padStart(2, '0')}:${c.createdAt.getSeconds().toString().padStart(2, '0')}`);
        
        res.render('home', { title: 'Tutorials', courses, search: req.query.search });
    } catch (err) {
        console.log(err.message);
    }
});

module.exports = router;