const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userService = require('../services/user');
const { COOKIE_NAME, TOKEN_SECRET } = require('../config');

module.exports = () => (req, res, next) => {
    if (parseToken(req, res)) {
        req.auth = {
            async register(username, email, password) {
                const token = await register(username, email, password);
                res.cookie(COOKIE_NAME, token);
            },
            async login(email, password) {
                const token = await login(email, password);
                res.cookie(COOKIE_NAME, token);
            },
            logout() {
                res.clearCookie(COOKIE_NAME);
            }
        };
    }

    next();
};

async function register(username, email, password) {
    const existingEmail = await userService.getUserByEmail(email);

    if (existingEmail) {
        throw new Error('This email is taken!');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userService.createUser(username, email, hashedPassword);

    return generateToken(user);
}

async function login(email, password) {
    const user = await userService.getUserByEmail(email);
    const hasMatch = user ? await bcrypt.compare(password, user.hashedPassword) : false;

    if (!user || !hasMatch) {
        const err = !user ? new Error('No such user'): new Error('Incorrect password');
        err.type = 'credential';
        throw err;
    }

    return generateToken(user);
}

function generateToken(userData) {
    return jwt.sign({
        _id: userData._id,
        email: userData.email
    }, TOKEN_SECRET);
}

function parseToken(req, res) {
    const token = req.cookies[COOKIE_NAME];

    if (token) {
        try {
            const userData = jwt.verify(token, TOKEN_SECRET);
            req.user = userData;
            res.locals.user = userData;

            console.log('Known user', req.user.email);
        } catch (err) {
            res.clearCookie(COOKIE_NAME);
            res.redirect('/auth/login');

            return false;
        }
    }

    return true;
}