const User = require('../models/User');

module.exports = {
    createUser,
    getUserById,
    getUserByEmail
};

async function createUser(firstName, lastName, email, hashedPassword) {
    const user = await new User({ firstName, lastName, email, hashedPassword });
    return user.save();
}

async function getUserById(id) {
    return await User.findById(id).populate('creatures').lean();
}

async function getUserByEmail(email) {
    const pattern = new RegExp(`^${email}$`, 'i');
    return await User.findOne({ email: { $regex: pattern } }).lean();
}