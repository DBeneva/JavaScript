const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: {
        type: String,
        minLength: [2, 'Name must be at least 2 characters long']
    },
    species: {
        type: String,
        minLength: [3, 'Species must be at least 3 characters long']
    },
    skinColor: {
        type: String,
        minLength: [3, 'Skin color must be at least 3 characters long']
    },
    eyeColor: {
        type: String,
        minLength: [3, 'Eye color must be at least 3 characters long']
    },
    image: {
        type: String,
        required: [true, 'Image URL is required'],
        match: [/^https?:\/\//, 'Image must be a valid URL']
    },
    description: {
        type: String,
        minLength: [5, 'Description must be at least 5 characters long'],
        maxLength: [500, 'Description must be no longer than 500 characters']
    },
    votes: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }],
    votedEmails: { type: String },
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    authorName: { type: String }
});

module.exports = model('Creature', schema);