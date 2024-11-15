const router = require('express').Router();
const { isGuest } = require('../middlewares/guards');
const { body, validationResult } = require('express-validator');

router.get('/register', isGuest(), (req, res) => {
    res.render('register', { title: 'Register Page' });
});

router.post(
    '/register',
    isGuest(),
    body('email')
        .isEmail().withMessage('Please enter a valid email').bail()
        .isLength({ min: 10 }).withMessage('Email must be at least 10 characters long').bail(),
    body('password')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long').bail()
        .matches(/^[a-zA-Z0-9]+$/).withMessage('The password must consist only of English letters and digits'),
    body('repass').custom((value, { req }) => {
        if (value != req.body.password) {
            throw new Error('Passwords don\'t match');
        }
        return true;
    }),
    async (req, res) => {
        const { errors } = validationResult(req);

        try {
            if (errors.length > 0) {
                const message = errors.map(e => e.msg).join('\n');
                throw new Error(message);
            }

            await req.auth.register(req.body.email.trim(), req.body.password.trim());
            res.redirect('/');
        } catch (err) {
            console.log(err.message);

            const ctx = {
                title: 'Register Page',
                error: err.message.split('\n')[0],
                email: req.body.email
            };

            res.render('register', ctx);
        }
    });

router.get('/login', isGuest(), (req, res) => {
    res.render('login', { title: 'Login Page' });
});

router.post('/login', isGuest(), async (req, res) => {
    try {
        console.log('REQ AUTH', req.auth);
        await req.auth.login(req.body.email.trim(), req.body.password.trim());
        res.redirect('/');
    } catch (err) {
        console.log(err.message);

        const ctx = {
            title: 'Login Page',
            error: err.type == 'credential' ? 'Incorrect email or password' : err.message,
            email: req.body.email
        };

        res.render('login', ctx);
    }
});

router.get('/logout', (req, res) => {
    req.auth.logout();
    res.redirect('/');
});

module.exports = router;