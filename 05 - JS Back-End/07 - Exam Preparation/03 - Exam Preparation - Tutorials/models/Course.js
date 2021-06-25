const { Schema, model } = require('mongoose');

const schema = new Schema({
    title: { type: String, required: [true, 'Course title is required'] },
    description: {
        type: String,
        required: [true, 'Password is required'],
        maxLength: [50, 'Description must be less than 50 characters long']
    },
    imageUrl: {
        type: String,
        required: [true, 'Image URL is required'],
        match: [/^https?:\/\//, 'Image must be a valid URL']
    },
    duration: { type: String, required: [true, 'Duration is required'] },
    createdAt: { type: Date, default: Date.now },
    users: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }],
    author: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = model('Course', schema);