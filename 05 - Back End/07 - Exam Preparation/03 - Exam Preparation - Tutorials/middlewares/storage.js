const course = require('../services/course');
const user = require('../services/user');

module.exports = () => (req, res, next) => {
    req.storage = {
        ...course,
        ...user
    };

    next();
};