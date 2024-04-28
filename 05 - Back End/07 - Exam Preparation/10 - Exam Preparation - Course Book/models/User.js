const { Schema, model } = require('mongoose');

const schema = new Schema({
    username: {
        type: String,
        minLength: [2, 'Username must be at least 2 characters long']
    },
    email: {
        type: String,
        minLength: [10, 'Email must be at least 10 characters long']
    },
    hashedPassword: { type: String },
    courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
    signedUpFor: [{ type: Schema.Types.ObjectId, ref: 'Course' }]
});

module.exports = model('User', schema);