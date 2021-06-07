const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true, match: /^https?:\/\// },
    breed: { type: String, required: true }
});

//schema.createIndex({ name: 'text', description: 'text' });

module.exports = model('Cat', schema);