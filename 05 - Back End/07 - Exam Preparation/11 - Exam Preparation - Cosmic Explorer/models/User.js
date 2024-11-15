const { Schema, model } = require('mongoose');

const schema = new Schema({
    username: {
        type: String,
        minLength: [2, 'Username must be at least 2 characters long'],
        maxLength: [20, 'Username cannot be longer than 20 characters']
    },
    email: {
        type: String,
        minLength: [10, 'Email must be at least 10 characters long']
    },
    hashedPassword: { type: String },
    planets: [{ type: Schema.Types.ObjectId, ref: 'Planet' }],
    likedPlanets: [{ type: Schema.Types.ObjectId, ref: 'Planet' }]
});

module.exports = model('User', schema);