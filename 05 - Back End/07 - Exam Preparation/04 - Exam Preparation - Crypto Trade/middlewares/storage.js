const offer = require('../services/offer');
const user = require('../services/user');

module.exports = () => (req, res, next) => {
    req.storage = {
        ...offer,
        ...user
    };

    next();
};