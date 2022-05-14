const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const { isGuest } = require('../middlewares/guards');

router.get('/register', isGuest(), (req, res) => {
    res.render('register', { title: 'Register' });
});

router.post(
    '/register',
    isGuest(),
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({ min: 4 }).withMessage('Password must be at least 4 characters long').bail(),
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

            await req.auth.register(req.body.email.trim(), req.body.password.trim(), req.body.gender);
            res.redirect('/');
        } catch (err) {
            const ctx = {
                title: 'Register',
                errors: err.message.split('\n'),
                email: req.body.email,
                female: req.body.gender == 'female'
            };

            console.log(ctx);

            res.render('register', ctx);
        }
    });

router.get('/login', isGuest(), (req, res) => {
    res.render('login', { title: 'Login' });
});

router.post('/login', isGuest(), async (req, res) => {
    try {
        await req.auth.login(req.body.email.trim(), req.body.password.trim());
        res.redirect('/');
    } catch (err) {
        console.log(err.message);

        const ctx = {
            title: 'Login',
            errors: err.type == 'credential' ? ['Incorrect email or password'] : [err.message],
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