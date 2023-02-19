const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: {
        type: String,
        minLength: [2, 'Name must be at least 2 characters long']
    },
    image: {
        type: String,
        required: [true, 'Image URL is required'],
        match: [/^https?:\/\//, 'Image must be a valid URL']
    },
    age: {
        type: Number,
        required: [true, 'Age is required'],
        min: [1, 'Age should be a positive number'],
        max: [100, 'Age cannot be higher than 100']
    },
    description: {
        type: String,
        minLength: [5, 'Description must be at least 5 characters long'],
        maxLength: [50, 'Description must be less than 50 characters long']
    },
    location: {
        type: String,
        minLength: [5, 'Location must be at least 5 characters long'],
        maxLength: [50, 'Location must be less than 50 characters long']
    },
    commentList: [],
    owner: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = model('Photo', schema);