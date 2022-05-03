const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({ // the rules
    name: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                const letter = value.slice(0, 1);
                return letter == letter.toLocaleUpperCase();
            },
            message: props => `${props.value} does not begin with a capital letter`
        }
    }, // unique: only with index
    color: {
        type: String,
        required: function () { return this.age > 1 },
        enum: {
            values: ['Grey', 'Orange', 'White', 'Black', 'Mixed'],
            message: 'Color must be one of Grey, Orange, White, Black or Mixed, got {VALUE}'
        }
    },
    age: {
        type: Number,
        validate: {
            validator: function (v) { return v >= 0 },
            message: props => `${props.value} is a negative number`
        }
    }
});

const Cat = mongoose.model('Cat', catSchema); // returns constructor for a document

module.exports = Cat;