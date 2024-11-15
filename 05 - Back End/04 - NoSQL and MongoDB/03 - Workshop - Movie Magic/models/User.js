const { Schema, model } = require('mongoose');

const schema = new Schema({
    email: {
        type: String,
        unique: [true, 'This email is already taken']
    },
    hashedPassword: { type: String },
    movies: [{ type: Schema.Types.ObjectId, ref: 'Movie' }]
});

module.exports = model('User', schema);