const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: {
        type: String,
        required: [true, 'Hotel name is required'],
        minLength: 4
    },
    city: {
        type: String,
        required: [true, 'City is required'],
        minLength: 3
    },
    imageUrl: {
        type: String,
        required: [true, 'Image URL is required'],
        match: [/^https?:\/\//, 'Image must be a valid URL']
    },
    rooms: {
        type: Number,
        required: [true, 'Number of free rooms is required'],
        min: [1, 'Number of free rooms must be between 1 and 100'],
        max: [100, 'Number of free rooms must be between 1 and 100']
    },
    bookedBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true }    
});

module.exports = model('Hotel', schema);