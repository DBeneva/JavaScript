const animal = require('../services/animal');
const user = require('../services/user');

module.exports = () => (req, res, next) => {
    req.storage = {
        ...animal,
        ...user
    };

    next();
};