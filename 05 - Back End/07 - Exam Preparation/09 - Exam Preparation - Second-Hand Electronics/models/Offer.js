const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: {
        type: String,
        minLength: [10, 'Name must be at least 10 characters long']
    },
    type: {
        type: String,
        minLength: [2, 'Type must be at least 2 characters long']
    },
    damages: {
        type: String,
        minLength: [10, 'Damages must be at least 10 characters long']
    },
    image: {
        type: String,
        required: [true, 'Image URL is required'],
        match: [/^https?:\/\//, 'Image must be a valid URL']
    },
    description: {
        type: String,
        minLength: [10, 'Description must be at least 10 characters long'],
        maxLength: [200, 'Description must be no longer than 200 characters']
    },
    production: {
        type: Number,
        min: [1900, 'Production year must be between 1900 and 2023'],
        max: [2023, 'Production year must be between 1900 and 2023']
    },
    exploitation: {
        type: Number,
        min: [0, 'Exploitation must be a positive number'],
    },
    price: {
        type: Number,
        min: [0, 'Price must be a positive number'],
    },
    boughtBy: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }],
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
});

module.exports = model('Offer', schema);