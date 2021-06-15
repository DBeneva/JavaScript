const auth = require('../middlewares/auth');
const storage = require('../middlewares/storage');
const logger = require('../middlewares/logger');
const guards = require('../middlewares/guards');
const preloadCube = require('../middlewares/preload');

module.exports = async (app) => {
    app.use(await storage());
    app.use(auth());
    app.use(guards());
    app.use(await preloadCube());
    app.use(logger()); // console.log('>>>', req.method, req.url);
}