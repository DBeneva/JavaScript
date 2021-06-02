const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: { type: String, required: true },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: (v) => v.startsWith('http'),
            message: props => `${props} is not a valid http address`
        }
    },
    description: { type: String, required: true, maxlength: 100 },
    cubes: [{ type: Schema.Types.ObjectId, ref: 'Cube' }]
});

module.exports = model('Accessory', schema);