const { Schema, model } = require('mongoose');

const schema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        minLength: [5, 'Title must be at least 5 characters long']
    },
    type: {
        type: String,
        required: [true, 'Type is required'],
        minLength: [3, 'Type must be at least 3 characters long']
    },
    certificate: {
        type: String,
        required: [true, 'Certificate is required'],
        minLength: [2, 'Certificate must be at least 2 characters long']
    },
    image: {
        type: String,
        required: [true, 'Image URL is required'],
        match: [/^https?:\/\//, 'Image must be a valid URL']
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        minLength: [10, 'Description must be at least 10 characters long']
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0.01, 'Price must be a positive number']
    },
    signUpList: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }],
    signedUpUsernames: { type: String, default: '' },
    owner: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = model('Course', schema);