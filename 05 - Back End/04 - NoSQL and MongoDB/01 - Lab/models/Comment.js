const { Schema, model } = require('mongoose');

const schema = new Schema({
    author: { type: Schema.Types.ObjectId, ref: 'Person' },
    content: { type: String, required: true },
    post: { type: Schema.Types.ObjectId, ref: 'Post' }
});

module.exports = model('Comment', schema);