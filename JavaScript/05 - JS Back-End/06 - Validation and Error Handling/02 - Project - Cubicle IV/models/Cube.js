const { Schema, model } = require('mongoose');

const NAME_PATTERN = /^[A-Za-z0-9 ]+$/;
const IMAGE_PATTERN = /^https?:\/\//;

const schema = new Schema({
    name: {
        type: String,
        required: [true, 'Cube name is required'],
        minLength: [5, 'Cube name must be at least 5 characters long'],
        match: [NAME_PATTERN, 'Cube name may contain only alphanumeric characters']
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        minLength: [20, 'Description must be at least 20 characters long'],
        maxLength: [500, 'Description cannot exceed 500 characters'],
        match: [NAME_PATTERN, 'Description may contain only alphanumeric characters']
    },
    imageUrl: {
        type: String,
        required: [true, 'ImageUrl is required'],
        match: [IMAGE_PATTERN, 'ImageUrl must be a valid URL']
    },
    difficulty: { type: Number, min: 1, max: 6 },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    stickers: [{ type: Schema.Types.ObjectId, ref: 'Sticker' }],
    author: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = model('Cube', schema);