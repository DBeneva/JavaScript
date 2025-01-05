const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minLength: [2, 'Name must be at least 2 characters long']
    },
    skin: {
        type: String,
        required: [true, 'Skin is required'],
        minLength: [10, 'Skin must be at least 10 characters long'],
        maxLenght: [100, 'Skin must not be longer than 100 characters']
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        minLength: [20, 'Description must be at least 20 characters long'],
        maxLength: [200, 'Description must not be longer than 200 characters']
    },
    ingredients: {
        type: String,
        required: [true, 'Ingredients are required'],
        minLength: [2, 'Ingredients must be at least 2 characters long'],
        maxLength: [50, 'Ingredients must not be longer than 50 characters']
    },
    benefits: {
        type: String,
        required: [true, 'Benefits are required'],
        minLength: [10, 'Benefits must be at least 10 characters long'],
        maxLength: [100, 'Benefits must not be longer than 100 characters']
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [1, 'Price must be a positive number']
    },
    image: {
        type: String,
        required: [true, 'Image is required'],
        match: [/^https?:\/\//, 'Image must be a valid URL']
    },
    recommendList: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }],
    owner: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = model('Cosmetic', schema);