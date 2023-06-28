const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: {
        type: String,
        minLength: [2, 'Name must be at least 2 characters long']
    },
    years: {
        type: Number,
        required: [true, 'Years is required'],
        min: [1, 'Please enter years between 1 and 100'],
        max: [100, 'Please enter years between 1 and 100']
    },
    kind: {
        type: String,
        minLength: [3, 'Kind must be at least 3 characters long']
    },
    image: {
        type: String,
        required: [true, 'Image URL is required'],
        match: [/^https?:\/\//, 'Image must be a valid URL']
    },
    need: {
        type: String,
        minLength: [3, 'Need must be at least 3 characters long'],
        maxLength: [20, 'Need must be no longer than 20 characters']
    },
    location: {
        type: String,
        minLength: [5, 'Location must be at least 5 characters long'],
        maxLength: [15, 'Location must be no longer than 15 characters']
    },
    description: {
        type: String,
        minLength: [5, 'Description must be at least 5 characters long'],
        maxLength: [50, 'Description must be no longer than 50 characters']
    },
    donations: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }],
    owner: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = model('Animal', schema);