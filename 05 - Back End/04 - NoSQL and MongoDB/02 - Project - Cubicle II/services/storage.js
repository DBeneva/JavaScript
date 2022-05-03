const { getAll } = require('./catalog');
const { getById, getAllStickers, attachSticker } = require('./details');
const { create } = require('./create');
const { edit } = require('./edit');
const { createComment } = require('./comment');
const { createSticker } = require('./sticker');

async function init() {
    return (req, res, next) => {
        req.storage = {
            getAll,
            getById,
            create,
            edit,
            createComment,
            createSticker,
            getAllStickers,
            attachSticker
        };

        next();
    }
}

module.exports = {
    init,
    getAll,
    getById,
    create,
    edit,
    createComment,
    createSticker,
    getAllStickers,
    attachSticker
};