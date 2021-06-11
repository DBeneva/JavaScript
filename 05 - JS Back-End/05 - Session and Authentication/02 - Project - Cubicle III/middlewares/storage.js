const productService = require('../services/product');
const stickerService = require('../services/sticker');

module.exports = async function init() {
    return (req, res, next) => {
        const storage = Object.assign({}, productService, stickerService);
        req.storage = storage;
        next();
    }
};