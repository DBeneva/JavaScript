const auth = require('../middlewares/auth');
const guards = require('../middlewares/guards');
const storage = require('../middlewares/storage');
const logger = require('../middlewares/logger');

module.exports = async (app) => {
    app.use(await storage());
    app.use(auth());
    app.use(guards());
    app.use(logger());
}