const asyncWrapper = require('../util/asyncWrapper');

const router = require('express').Router();

router.get('/', (req, res) => res.redirect('/products'));

router.get('/about', asyncWrapper((req, res) => {
    throw new Error('Simulated error');
    res.render('about', { title: 'About' });
}));

router.all('*', (req, res) => {
    res.render('404', { title: 'Page Not Found' });
});

module.exports = router;