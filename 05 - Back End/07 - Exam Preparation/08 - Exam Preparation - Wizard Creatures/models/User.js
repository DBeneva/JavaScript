const { Schema, model } = require('mongoose');

const schema = new Schema({
    firstName: {
        type: String,
        minLength: [3, 'First name must be at least 3 characters long']
    },
    lastName: {
        type: String,
        minLength: [3, 'Last name must be at least 3 characters long']
    },
    email: {
        type: String,
        minLength: [10, 'Email must be at least 10 characters lo']
    },
    hashedPassword: { type: String },
    creatures: [{ type: Schema.Types.ObjectId, ref: 'Creature' }]
});

module.exports = model('User', schema);