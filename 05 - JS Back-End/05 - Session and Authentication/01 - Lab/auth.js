const bcrypt = require('bcrypt');

const users = {};

module.exports = (req, res, next) => {
    req.register = async (username, password) => {
        const id = ('00000000' + Math.random() * 99999999 | 0).toString(16).slice(-8);
        const hashedPassword = await bcrypt.hash(password, 8);

        users[id] = {
            username: username,
            hashedPassword
        };

        console.log('New user', users);
    };

    req.login = async (username, password) => {
        const user = Object.values(users).find(u => u.username == username);

        if (user && await bcrypt.compare(password, user.hashedPassword)) {
            req.session.user = {
                _id: user.id,
                username
            };

            return true;
        } else {
            return false;
        }
    };

    next();
};