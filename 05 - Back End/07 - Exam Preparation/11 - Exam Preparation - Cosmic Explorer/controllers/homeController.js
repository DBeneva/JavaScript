const router = require('express').Router();

router.get('/', async (req, res) => { 
    res.render('home', { title: 'Cosmic Explorer' });
});

router.get('/*', async (req, res) => {
    res.render('404', { title: '404 - Page Not Found' });
});

module.exports = router;