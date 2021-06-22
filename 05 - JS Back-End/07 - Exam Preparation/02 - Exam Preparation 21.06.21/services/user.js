const User = require('../models/User');

module.exports = {
    createUser,
    getUserByUsername
};

async function createUser(username, hashedPassword) {
    const user = await new User({
        username,
        hashedPassword,
        liked: []
    });
    user.save();

    return user;
}

async function getUserByUsername(username) {
    const pattern = new RegExp(`^${username}$`, 'i');
    const user = await User.findOne({ username: { $regex: pattern } });

    return user;
}