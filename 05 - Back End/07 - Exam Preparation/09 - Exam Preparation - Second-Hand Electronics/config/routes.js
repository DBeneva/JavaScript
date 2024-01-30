const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');
const offerController = require('../controllers/offerController');

module.exports = (app) => {
    app.use('/auth', authController);
    app.use('/offers', offerController);
    app.use('/', homeController);
};