const Sticker = require('../models/Sticker');

async function getAllStickers(existing) {
    return await Sticker.find({ _id: { $nin: existing } }).lean();
}

async function createSticker(sticker) {
    const record = new Sticker(sticker);
    return await record.save();
}

module.exports = {
    createSticker,
    getAllStickers,
};