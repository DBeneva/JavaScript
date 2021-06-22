const play = require('../services/play');
const user = require('../services/user');

module.exports = () => (req, res, next) => {
    req.storage = {
        ...play,
        ...user
    };

    next();
};