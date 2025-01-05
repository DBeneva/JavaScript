const cosmetic = require('../services/cosmetic');
const user = require('../services/user');

module.exports = () => (req, res, next) => {
    req.storage = {
        ...cosmetic,
        ...user
    };

    next();
};