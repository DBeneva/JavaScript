const Cube = require('../models/Cube');
const Sticker = require('../models/Sticker');

module.exports = {
    async getById(id) {
        const cube = await Cube.findById(id)
            .populate('comments')
            .populate('stickers')
            .lean();
    
        if (cube) {
            return cube;
        } else {
            return undefined;
        }
    },
    async getAllStickers(existing) {
        return Sticker.find({ _id: { $nin: existing } }).lean();
    },
    async attachSticker(cubeId, stickerId) {
        const cube = await Cube.findById(cubeId);
        const sticker = await Sticker.findById(stickerId);
    
        if (!cube || !sticker) {
            throw new ReferenceError('No such ID in database');
        }
    
        cube.stickers.push(sticker);
        return cube.save();
    }
};