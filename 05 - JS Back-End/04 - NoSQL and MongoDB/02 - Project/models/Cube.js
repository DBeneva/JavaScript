const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true, maxlength: 300 },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: (v) => v.startsWith('http'),
            message: props => `${props} is not a valid http address`
        }
    },
    difficulty: { type: Number, gte: 1, lte: 6 },
    accessories: [{ type: Schema.Types.ObjectId, ref: 'Accessory' }]
});

module.exports = model('Cube', schema);