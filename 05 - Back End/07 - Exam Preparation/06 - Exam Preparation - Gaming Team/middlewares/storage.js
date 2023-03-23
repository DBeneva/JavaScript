const photo = require('../services/game');
const user = require('../services/user');

module.exports = () => (req, res, next) => {
    req.storage = {
        ...photo,
        ...user
    };

    next();
};