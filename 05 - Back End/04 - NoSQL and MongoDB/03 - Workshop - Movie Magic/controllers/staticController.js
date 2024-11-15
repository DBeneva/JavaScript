const router = require('express').Router();

router.get('/about', async (req, res) => {
    res.render('about', { title: 'About Page' });
});

router.get('*', async (req, res) => {
    res.render('404', { title: '404 Page' });
});

module.exports = router;