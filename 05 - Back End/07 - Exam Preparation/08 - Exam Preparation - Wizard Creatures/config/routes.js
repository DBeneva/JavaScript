const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');
const creatureController = require('../controllers/creatureController');
const userController = require('../controllers/userController');

module.exports = (app) => {
    app.use('/auth', authController);
    app.use('/creatures', creatureController);
    app.use('/users', userController);
    app.use('/', homeController);
};