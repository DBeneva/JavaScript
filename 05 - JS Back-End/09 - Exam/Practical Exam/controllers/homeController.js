const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('home', { title: 'Home' });
});

router.get('/404', async (req, res) => {
    res.render('404', { title: 'Not Found' });
});

router.get('/users/:id', async (req, res) => {
    try {
        const user = await req.storage.getUserById(req.params.id);
        res.render('profile', { title: 'My Profile', user });
    } catch (err) {
        console.log(err.message);
        res.redirect('/404');
    }
});

router.all('*', (req, res) => {
    res.render('404', { title: 'Not Found' });
});

module.exports = router;