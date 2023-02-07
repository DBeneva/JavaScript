const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: {
        type: String,
        minLength: [2, 'Name must be at least 2 characters long']
    },
    imageUrl: {
        type: String,
        required: [true, 'Image URL is required'],
        match: [/^https?:\/\//, 'Image must be a valid URL']
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0.01, 'Price should be a positive number']
    },
    description: {
        type: String,
        minLength: [10, 'Description must be at least 10 characters long']
    },
    payment: {
        type: String,
        required: [true, 'Payment method is required'],
        enum: {
            values: ['crypto-wallet', 'credit-card', 'debit-card', 'paypal'],
            message: 'Please select a valid payment method'
        }
    },
    boughtBy: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }],
    owner: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = model('Offer', schema);