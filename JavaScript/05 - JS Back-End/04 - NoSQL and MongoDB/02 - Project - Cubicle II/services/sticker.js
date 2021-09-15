const Sticker = require('../models/Sticker');

module.exports = {
    async createSticker(sticker) {
        const record = new Sticker(sticker);
        return record.save();
    }
};