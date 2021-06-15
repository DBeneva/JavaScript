const router = require('express').Router();
//const { isAuth, isGuest } = require('../middlewares/guards');

router.get('/register',
    (req, res, next) => req.isGuest(req, res, next),
    (req, res) => {
        res.render('register', { title: 'Register' });
    });

router.post('/register',
    (req, res, next) => req.isGuest(req, res, next),
    async (req, res) => {
        try {
            await req.auth.register(req.body);
            res.redirect('/products');
        } catch (err) {
            const ctx = {
                title: 'Register',
                error: err.message,
                data: { username: req.body.username }
            };

            res.render('register', ctx);
        }
    });

router.get('/login',
    (req, res, next) => req.isGuest(req, res, next),
    (req, res) => {
        res.render('login', { title: 'Login' });
    });

router.post('/login',
    (req, res, next) => req.isGuest(req, res, next),
    async (req, res) => {
        try {
            await req.auth.login(req.body);
            res.redirect('/products');
        } catch (err) {
            const ctx = {
                title: 'Login',
                error: err.message,
                data: { username: req.body.username }
            };

            res.render('login', ctx);
        }
    });

router.get('/logout',
    (req, res, next) => req.isAuth(req, res, next),
    (req, res) => {
        req.auth.logout();
        res.redirect('/products');
    });

module.exports = router;