const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true, maxLength: 500 },
    imageUrl: {
        type: String,
        required: true,
        match: /^https?:\/\//
    },
    difficulty: { type: Number, gte: 1, lte: 6 },
    accessories: [{ type: Schema.Types.ObjectId, ref: 'Accessory' }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
});

module.exports = model('Cube', schema);