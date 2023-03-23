const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: {
        type: String,
        minLength: [4, 'Name must be at least 4 characters long']
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'The price should be a positive number']
    },
    image: {
        type: String,
        required: [true, 'Image URL is required'],
        match: [/^https?:\/\//, 'Image must be a valid URL']
    },
    description: {
        type: String,
        minLength: [10, 'Description must be at least 10 characters long']
    },
    genre: {
        type: String,
        minLength: [2, 'Genre must be at least 2 characters long']
    },
    platform: {
        type: String,
        required: [true, 'Platform is required'],
        enum: {
            values: ['PC', 'Nintendo', 'PS4', 'PS5', 'XBOX'],
            message: 'Please select a valid platform'
        }
    },
    boughtBy: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }],
    owner: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = model('Game', schema);