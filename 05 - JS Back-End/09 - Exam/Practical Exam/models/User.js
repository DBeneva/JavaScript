const { Schema, model } = require('mongoose');

const schema = new Schema({
    email: { type: String },
    hashedPassword: { type: String, required: [true, 'Password is required'] },
    gender: {
        type: String,
        enum: {
            values: ['male', 'female'],
            message: 'Gender must be either "male" or "female"'
        },
        required: true
    },
    trips: [{ type: Schema.Types.ObjectId, ref: 'Trip', default: [] }]
});

module.exports = model('User', schema);