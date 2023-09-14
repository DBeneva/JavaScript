const creature = require('../services/creature');
const user = require('../services/user');

module.exports = () => (req, res, next) => {
    req.storage = {
        ...creature,
        ...user
    };

    next();
};