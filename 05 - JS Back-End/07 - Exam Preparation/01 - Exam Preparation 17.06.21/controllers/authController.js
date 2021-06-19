const router = require('express').Router();
const { body, validationResult } = require('express-validator');

router.get(
    '/register',
    (req, res, next) => req.guards.isGuest(req, res, next),
    (req, res) => {
        res.render('register');
    });

router.post(
    '/register',
    (req, res, next) => req.guards.isGuest(req, res, next),
    body('email', 'Invalid email').isEmail(),
    body('password')
        .isLength({ min: 5 }).withMessage('Password must be at least 5 characters long').bail()
        .matches(/[a-zA-Z0-9]/).withMessage('Password may contain only numbers and latin letters'),
    body('repass').custom((value, { req }) => {
        if (value != req.body.password) {
            throw new Error('Passwords don\'t match');
        }

        return true;
    }),
    async (req, res) => {
        console.log(req.body);
        const { errors } = validationResult(req);

        try {
            if (errors.length > 0) {
                const message = errors.map(e => e.msg).join('\n');
                throw new Error(message);
            }

            await req.auth.register(req.body.username, req.body.email, req.body.password);

            res.redirect('/');
        } catch (err) {
            console.log(err.message);
            const ctx = {
                errors: err.message.split('\n'),
                userData: {
                    username: req.body.username,
                    email: req.body.email
                }
            };

            res.render('register', ctx);
        }
    });

router.get(
    '/login',
    (req, res, next) => req.guards.isGuest(req, res, next),
    (req, res) => {
        res.render('login');
    });

router.post(
    '/login',
    (req, res, next) => req.guards.isGuest(req, res, next),
    async (req, res) => {
        try {
            await req.auth.login(req.body.username, req.body.password);
            res.redirect('/');
        } catch (err) {
            console.log(err.message);
            const ctx = {
                errors: [err.message],
                userData: {
                    username: req.body.username
                }
            };

            res.render('login', ctx);
        }
    });

router.get('/logout', (req, res) => {
    req.auth.logout();
    res.redirect('/');
});

module.exports = router;