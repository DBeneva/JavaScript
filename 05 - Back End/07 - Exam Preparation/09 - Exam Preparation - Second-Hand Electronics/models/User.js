const { Schema, model } = require('mongoose');

const schema = new Schema({
    username: {
        type: String,
        minLength: [3, 'Username must be at least 3 characters long']
    },
    email: {
        type: String,
        minLength: [10, 'Email must be at least 10 characters lo']
    },
    hashedPassword: { type: String },
    offers: [{ type: Schema.Types.ObjectId, ref: 'Creature' }]
});

module.exports = model('User', schema);