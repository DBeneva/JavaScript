const staticController = require('../controllers/staticController');
const movieController = require('../controllers/movieController');

function routesConfig(app) {
    app.use(movieController);
    app.use(staticController);
}

module.exports = routesConfig;