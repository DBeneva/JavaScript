const planet = require('../services/planet');
const user = require('../services/user');

module.exports = () => (req, res, next) => {
    req.storage = {
        ...planet,
        ...user
    };

    next();
};