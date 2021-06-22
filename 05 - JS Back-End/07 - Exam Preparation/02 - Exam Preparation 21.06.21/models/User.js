const { Schema, model } = require('mongoose');

const schema = new Schema({
    username: { type: String },
    hashedPassword: { type: String },
    liked: [{ type: Schema.Types.ObjectId, ref: 'Play' }]
});

module.exports = model('User', schema);