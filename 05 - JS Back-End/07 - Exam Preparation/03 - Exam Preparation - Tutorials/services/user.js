const User = require('../models/User');

module.exports = {
    createUser,
    getUserById,
    getUserByUsername
};

async function createUser(username, hashedPassword) {
    const user = await new User({ username, hashedPassword });
    return user.save();
}

async function getUserById(id) {
    return await User.findById(id).lean();
}

async function getUserByUsername(username) {
    const pattern = new RegExp(`^${username}$`, 'i');
    return await User.findOne({ username: { $regex: pattern } }).lean();
}