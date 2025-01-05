const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const { isGuest, isUser } = require('../middlewares/guards');

router.get('/register', isGuest(), (req, res) => {
    res.render('register', { title: 'Register - GlowAlchemy' });
});

router.post(
    '/register',
    isGuest(),
    body('username')
        .isLength({ min: 2, max: 20 }).withMessage('Username must be between 2 and 20 characters long').bail(),
    body('email')
        .isEmail().withMessage('Please enter a valid email').bail()
        .isLength({ min: 10 }).withMessage('Email must be at least 10 characters long').bail(),
    body('password')
        .isLength({ min: 4 }).withMessage('Password must be at least 4 characters long').bail(),
    body('confirm-password').custom((value, { req }) => {
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

            await req.auth.register(req.body.username.trim(), req.body.email.trim(), req.body.password.trim());
            res.redirect('/');
        } catch (err) {
            console.log(err.message);

            const ctx = {
                title: 'Register',
                error: err.message.split('\n')[0],
                username: req.body.username,
                email: req.body.email
            };

            res.render('register', ctx);
        }
    });

router.get('/login', isGuest(), (req, res) => {
    res.render('login', { title: 'Login - GlowAlchemy' });
});

router.post('/login', isGuest(), async (req, res) => {
    try {
        console.log(req.body);
        await req.auth.login(req.body.email.trim(), req.body.password.trim());
        res.redirect('/');
    } catch (err) {
        console.log(err.message);

        const ctx = {
            title: 'Login',
            error: err.type == 'credential' ? 'Incorrect email or password' : err.message,
            email: req.body.email
        };

        res.render('login', ctx);
    }
});

router.get('/logout', isUser(), (req, res) => {
    req.auth.logout();
    res.redirect('/');
});

module.exports = router;