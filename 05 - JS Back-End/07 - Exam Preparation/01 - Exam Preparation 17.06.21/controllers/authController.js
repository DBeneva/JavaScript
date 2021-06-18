const router = require('express').Router();
const { body, validationResult } = require('express-validator');

router.get('/register', (req, res) => {
    res.render('register');
});

router.post(
    '/register',
    body('username').isLength({ min: 3 }),
    body('repass').custom((value, { req }) => {
        if (value != req.body.password) {
            throw new Error('Passwords don\'t match');
        }

        return true;
    }),
    (req, res) => {
        console.log(body);
    });

router.get('/login', (req, res) => {
    res.render('login');
});


module.exports = router;