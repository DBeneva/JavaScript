const hotel = require('../services/hotel');
const user = require('../services/user');

module.exports = () => (req, res, next) => {
    req.storage = {
        ...hotel,
        ...user
    };
    next();
};