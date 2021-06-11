const Sticker = require('../models/Sticker');

async function getAllAccessories(existing) {
    return Sticker.find({ _id: { $nin: existing } }).lean();
}

async function createAccessory(sticker) {
    const record = new Accessory(sticker);
    return record.save();
}

module.exports = {
    createAccessory,
    getAllAccessories,
};