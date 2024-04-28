const User = require('../models/User');

module.exports = {
    createUser,
    getUserById,
    getUserByEmail
};

async function createUser(username, email, hashedPassword) {
    const user = await new User({ username, email, hashedPassword });
    return user.save();
}

async function getUserById(id) {
    return await User.findById(id).populate('courses').populate('signedUpFor').lean();
}

async function getUserByEmail(email) {
    const pattern = new RegExp(`^${email}$`, 'i');
    return await User.findOne({ email: { $regex: pattern } }).lean();
}