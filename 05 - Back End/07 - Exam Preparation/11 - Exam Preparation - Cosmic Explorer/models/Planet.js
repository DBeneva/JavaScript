const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minLength: [2, 'Name must be at least 2 characters long']
    },
    age: {
        type: Number,
        required: [true, 'Age is required'],
        min: [1, 'Age must be a positive number']
    },
    solarSystem: {
        type: String,
        required: [true, 'Solar system is required'],
        minLength: [2, 'Type must be at least 2 characters long']
    },
    type: {
        type: String,
        enum: {
            values: ['Inner', 'Outer', 'Dwarf'],
            message: 'Type must be one of the following: "Inner", "Outer", "Dwarf"'
        }
    },
    moons: {
        type: Number,
        required: [true, 'Moons is required'],
        min: [1, 'Moons must be a positive number']
    },
    size: {
        type: Number,
        required: [true, 'Size is required'],
        min: [1, 'Size must be a positive number']
    },
    rings: {
        type: String,
        enum: {
            values: ['Yes', 'No'],
            message: 'Rings must be one of the following: "Yes", "No"'
        }
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        minLength: [10, 'Description must be at least 10 characters long'],
        maxLength: [101, 'Description must not be longer than 100 characters']
    },
    image: {
        type: String,
        required: [true, 'Image is required'],
        match: [/^https?:\/\//, 'Image must be a valid URL']
    },
    likedList: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }],
    owner: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = model('Planet', schema);