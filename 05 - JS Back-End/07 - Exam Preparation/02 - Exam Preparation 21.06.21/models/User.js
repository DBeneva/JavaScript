const { Schema, model } = require('mongoose');

const schema = new Schema({
    username: { type: String },
    hashedPassword: { type: String },
    likedPlays: [{ type: Schema.Types.ObjectId, ref: 'Play', default: [] }]
});

module.exports = model('User', schema);