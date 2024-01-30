const User = require('../models/User');

module.exports = {
    createUser,
    getUserById,
    getUserByEmail
};

async function createUser(email, username, hashedPassword) {
    const user = await new User({ email, username, hashedPassword });
    return user.save();
}

async function getUserById(id) {
    return await User.findById(id).populate('offers').lean();
}

async function getUserByEmail(email) {
    const pattern = new RegExp(`^${email}$`, 'i');
    return await User.findOne({ email: { $regex: pattern } }).lean();
}