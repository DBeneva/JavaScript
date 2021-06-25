const { Schema, model } = require('mongoose');

const schema = new Schema({
    email: { type: String },
    username: { type: String },
    hashedPassword: { type: String, required: true },
    reservations: [{ type: Schema.Types.ObjectId, ref: 'Hotel', default: [] }],
    offers: [{ type: Schema.Types.ObjectId, ref: 'Hotel' }]
});

module.exports = model('User', schema);