const storage = require('../middlewares/storage');
const auth = require('../middlewares/auth');
const logger = require('../middlewares/logger');

module.exports = async (app) => {
    app.use(await storage());
    app.use(auth());
    app.use(logger());    
};