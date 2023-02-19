const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');
const photoController = require('../controllers/photoController');
const userController = require('../controllers/userController');

module.exports = (app) => {
    app.use('/auth', authController);
    app.use('/photos', photoController);
    app.use('/users', userController);
    app.use('/', homeController);
};