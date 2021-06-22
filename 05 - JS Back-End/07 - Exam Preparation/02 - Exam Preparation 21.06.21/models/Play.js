const { Schema, model } = require('mongoose');

const schema = new Schema({
    title: { type: String, required: [true, 'Title is required'] },
    description: {
        type: String,
        required: [true, 'Description is required'],
        maxLength: [50, 'Description length may not exceed 50 characters']
    },
    imageUrl: {
        type: String,
        required: [true, 'Image URL is required'],
        match: [/^https?:\/\//, 'Image URL must be a valid URL']
    },
    isPublic: { type: Boolean, default: false },
    createdAt: { type: Date || String, required: true },
    likes: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = model('Play', schema);