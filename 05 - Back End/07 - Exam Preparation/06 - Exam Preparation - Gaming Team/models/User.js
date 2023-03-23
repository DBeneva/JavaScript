const { Schema, model } = require('mongoose');

const schema = new Schema({
    username: {
        type: String,
        minLength: [5, 'Username must be at least 5 characters long']
    },
    email: {
        type: String,
        minLength: [10, 'Email must be at least 10 characters long']
    },
    hashedPassword: { type: String },
    games: [{ type: Schema.Types.ObjectId, ref: 'Game' }]
});

module.exports = model('User', schema);