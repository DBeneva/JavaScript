const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = {
    register
};

async function register(email, password) {
    const existing = await User.findOne({ email });

    if (existing) {
        throw new Error('A user with this email already exists');
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await new User({ email, hashedPassword }).save();

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
    }, 'my_secret');
}