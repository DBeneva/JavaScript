const router = require('express').Router();
const fs = require('fs');

router.get('/about', async (req, res) => {
    res.render('about', { title: 'About Page' });
});

router.get('*', async (req, res) => {
    res.render('404', { title: '404 Page' });
});

module.exports = router;