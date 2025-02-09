const productController = require('../controllers/productController');
const stickerController = require('../controllers/stickerController');
const commentController = require('../controllers/commentController');
const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');

module.exports = (app) => {
    app.use('/products', productController);
    app.use('/stickers', stickerController);
    app.use('/comments', commentController);
    app.use('/auth', authController);
    app.use('/', homeController);

    app.use((err, req, res, next) => {
        console.log('---', err.message);
        res.status(500).send('Something happened');
    }); // global error handler
};