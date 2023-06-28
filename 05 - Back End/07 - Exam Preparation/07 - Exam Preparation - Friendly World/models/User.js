const { Schema, model } = require('mongoose');

const schema = new Schema({
    email: {
        type: String,
        minLength: [10, 'Email must be at least 10 characters long']
    },
    hashedPassword: { type: String },
    animals: [{ type: Schema.Types.ObjectId, ref: 'Game' }]
});

module.exports = model('User', schema);