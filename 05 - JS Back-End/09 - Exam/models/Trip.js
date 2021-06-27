const { Schema, model } = require('mongoose');

const schema = new Schema({
    start: { type: String, minLength: [4, 'Start point must be at least 4 characters long'] },
    end: { type: String, minLength: [4, 'End point must be at least 4 characters long'] },
    date: { type: String, required: [true, 'Date is required'] },
    time: { type: String, required: [true, 'Time is required'] },
    carImage: {
        type: String,
        required: [true, 'Image URL is required'],
        match: [/^https?:\/\//, 'Car image must be a valid URL']
    },
    carBrand: { type: String, minLength: [4, 'Car brand must be at least 4 characters long'] },
    seats: {
        type: Number,
        required: [true, 'Seats field is required'],
        min: [0, 'Seats field requires a positive number'],
        max: [4, 'Seats may not be more than 4']
    },
    price: { type: Number, min: [1, 'Price must be more than 0 BGN'], max: [50, 'Price must be less than 51 BGN'] },
    description: {
        type: String,
        minLength: [10, 'Description must be at least 10 characters long']
    },
    creator: { type: Schema.Types.ObjectId, ref: 'User' },
    buddies: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }]
});

module.exports = model('Trip', schema);