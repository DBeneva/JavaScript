const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        match: [/^[a-zA-Z0-9\s]$/, 'The name must consist only of English letters, digits, and whitespaces']
    },
    age: {
        type: Number,
        required: [true, 'Age is required'],
        min: [1, 'Too young to work'],
        max: [120, 'Please check the age']
    },
    born: {
        type: String,
        required: [true, 'Birth place is required'],
        minLength: [10, 'The birth place must be at least 10 characters long'],
        match: [/^[a-zA-Z0-9\s]$/, 'The birth place must consist only of English letters, digits, and whitespaces']
    },
    character: {
        type: String,
        required: [true, 'Character is required'],
        match: [/^[a-zA-Z0-9\s]$/, 'The character must consist only of English letters, digits, and whitespaces']
    },
    imageURL: {
        type: String,
        required: [true, 'Image URL is required'],
        match: [/^https?:\/\//, 'Image must be a valid URL']
    },
    movie: { type: Schema.Types.Object, ref: 'Movie' }
});

module.exports = model('CastMember', schema);