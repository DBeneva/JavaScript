const authController = require('../controllers/authController');
const movieController = require('../controllers/movieController');
const staticController = require('../controllers/staticController');

function routesConfig(app) {
    app.use(authController);
    app.use(movieController);
    app.use(staticController);
}

module.exports = routesConfig;