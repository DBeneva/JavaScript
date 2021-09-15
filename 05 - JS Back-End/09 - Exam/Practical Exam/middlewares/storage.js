const trip = require('../services/trip');
const user = require('../services/user');

module.exports = () => (req, res, next) => {
    req.storage = {
        ...trip,
        ...user
    };

    next();
};