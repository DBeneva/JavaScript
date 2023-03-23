const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');
const gameController = require('../controllers/gameController');
const userController = require('../controllers/userController');

module.exports = (app) => {
    app.use('/auth', authController);
    app.use('/games', gameController);
    app.use('/users', userController);
    app.use('/', homeController);
};