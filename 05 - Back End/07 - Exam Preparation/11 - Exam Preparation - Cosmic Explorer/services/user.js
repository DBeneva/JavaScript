const User = require('../models/User');

module.exports = {
    createUser,
    getUserById,
    getUserByUsername
};

async function createUser(username, email, hashedPassword) {
    const user = await new User({ username, email, hashedPassword });
    return user.save();
}

async function getUserById(id) {
    return await User.findById(id).populate('courses').populate('signedUpFor').lean();
}

async function getUserByUsername(username) {
    const pattern = new RegExp(`^${username}$`, 'i');
    return await User.findOne({ username: { $regex: pattern } }).lean();
}