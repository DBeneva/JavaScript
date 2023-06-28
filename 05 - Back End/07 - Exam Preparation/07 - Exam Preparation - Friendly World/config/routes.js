const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');
const gameController = require('../controllers/animalController');
const userController = require('../controllers/userController');

module.exports = (app) => {
    app.use('/auth', authController);
    app.use('/animals', gameController);
    app.use('/users', userController);
    app.use('/', homeController);
};