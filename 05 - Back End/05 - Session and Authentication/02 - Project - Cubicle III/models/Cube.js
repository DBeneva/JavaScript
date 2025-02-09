const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true, maxLength: 500 },
    imageUrl: { type: String, required: true, match: /^https?:\/\// },
    difficulty: { type: Number, min: 1, max: 6 },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    stickers: [{ type: Schema.Types.ObjectId, ref: 'Sticker' }],
    author: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = model('Cube', schema);