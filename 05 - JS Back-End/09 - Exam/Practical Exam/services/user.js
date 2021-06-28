const User = require('../models/User');

module.exports = {
    createUser,
    getUserById,
    getUserByEmail
};

async function createUser(email, hashedPassword, gender) {
    const user = await new User({ email, hashedPassword, gender });
    return user.save();
}

async function getUserById(id) {
    return await User.findById(id).populate('trips').lean();
}

async function getUserByEmail(email) {
    const pattern = new RegExp(`^${email}$`, 'i');
    return await User.findOne({ email: { $regex: pattern } }).lean();
}