const router = require('express').Router();
const { body, validationResult } = require('express-validator');

router.get(
    '/register',
    (req, res, next) => req.isGuest(req, res, next),
    (req, res) => {
        res.render('register', { title: 'Register' });
    });

router.post(
    '/register',
    (req, res, next) => req.isGuest(req, res, next),
    body('username', 'Username must be at least 5 characters long and may contain only alphanumeric characters')
        .trim()
        .isLength({ min: 5 })
        .isAlphanumeric(),
    body('password', 'Password must be at least 8 characters long and may contain only alphanumeric characters')
        .trim()
        .isLength({ min: 8 })
        .isAlphanumeric(),
    body('repass').trim().notEmpty().custom((value, { req }) => {
        if (value != req.body.password) {
            throw new Error('Passwords don\'t match');
        }

        return true;
    }),
    async (req, res) => {
        try {
            const errors = Object.values(validationResult(req).mapped());

            if (errors.length > 0) {
                throw new Error(errors.map(e => e.msg).join('\n'));
            }
            
            await req.auth.register(req.body);
            res.redirect('/products');
        } catch (err) {
            const ctx = {
                title: 'Register',
                errors: err.message.split('\n'),
                data: { username: req.body.username, email: req.body.email }
            };

            res.render('register', ctx);
        }
    });

router.get(
    '/login',
    (req, res, next) => req.isGuest(req, res, next),
    (req, res) => {
        res.render('login', { title: 'Login' });
    });

router.post(
    '/login',
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

router.get(
    '/logout',
    (req, res, next) => req.isAuth(req, res, next),
    (req, res) => {
        req.auth.logout();
        res.redirect('/products');
    });

module.exports = router;