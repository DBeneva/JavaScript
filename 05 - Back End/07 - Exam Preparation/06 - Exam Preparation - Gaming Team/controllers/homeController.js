const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('home', { title: 'Home Page - Gaming Team' });
});

router.get('/*', async (req, res) => {
    res.render('404', { title: '404 Page' });
});

module.exports = router;