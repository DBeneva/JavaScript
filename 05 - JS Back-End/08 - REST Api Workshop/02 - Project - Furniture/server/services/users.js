const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { SECRET } = require('../config');

module.exports = {
    register,
    login
};

async function register(email, password) {
    const existing = await User.findOne({ email });

    if (existing) {
        const err = new Error('A user with this email already exists');
        err.status = 409;
        throw err;
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await new User({ email, hashedPassword }).save();

    return {
        _id: user._id,
        email: user.email,
        accessToken: createToken(user)
    };
}

async function login(email, password) {
    const user = await User.findOne({ email });
    const match = user ? await bcrypt.compare(password, user.hashedPassword) : false;

    if (!user || !match) {
        const err = new Error('Incorrect email or password');
        err.status = 401;
        throw err;
    }

    return {
        _id: user._id,
        email: user.email,
        accessToken: createToken(user)
    };
}

function createToken(user) {
    return jwt.sign({
        _id: user._id,
        email: user.email
    }, SECRET);
}