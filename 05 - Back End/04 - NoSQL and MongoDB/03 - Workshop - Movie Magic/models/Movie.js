const { Schema, model } = require('mongoose');

const schema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        minLength: [5, 'The title must be at least 5 characters long'],
        match: [/^[a-zA-Z0-9\s]$/, 'The title must consist only of English letters, digits, and whitespaces']
    },
    genre: {
        type: String,
        required: [true, 'Genre is required'],
        minLength: [5, 'The genre must be at least 5 characters long'],
        match: [/^[a-zA-Z0-9\s]$/, 'The genre must consist only of English letters, digits, and whitespaces']
    },
    director: {
        type: String,
        required: [true, 'Director is required'],
        minLength: [5, 'The director must be at least 5 characters long'],
        match: [/^[a-zA-Z0-9\s]$/, 'The director must consist only of English letters, digits, and whitespaces']
    },
    year: {
        type: Number,
        required: [true, 'Year is required'],
        min: [1900, 'Please enter a year after 1900'],
        max: [2024, 'Please enter a year that is not in the future']
    },
    imageURL: {
        type: String,
        required: [true, 'Movie Poster is required'],
        match: [/^https?:\/\//, 'Movie poster must be a valid URL']
    },
    rating: {
        type: Number,
        required: [true, 'Rating is required'],
        min: [1, 'The rating must be a positive number'],
        max: [5, 'The rating must be between 0 and 5']
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        minLength: [20, 'The description must be at least 20 characters long'],
        maxLength: [99, 'The description must be less than 100 characters long'],
        match: [/^[a-zA-Z0-9\s]$/, 'The description must consist only of English letters, digits, and whitespaces']
    },
    cast: [{ type: Schema.Types.ObjectId, ref: 'CastMember', default: [] }],
    creator: { type: String }
});

module.exports = model('Movie', schema);