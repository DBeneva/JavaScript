const router = require('express').Router();

router.get('/', async (req, res) => { 
    const courses = await req.storage.getAllRecords();
    const recentCourses = courses.slice(-3);
    console.log('LAST COURSES', recentCourses);
    res.render('home', { title: 'Home Page', recentCourses });
});

router.get('/*', async (req, res) => {
    res.render('404', { title: '404 Page' });
});

module.exports = router;