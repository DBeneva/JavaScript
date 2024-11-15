const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');
const recordController = require('../controllers/recordController');
const userController = require('../controllers/userController');

module.exports = (app) => {
    app.use('/auth', authController);
    app.use('/planets', recordController);
    app.use('/users', userController);
    app.use('/', homeController);
};