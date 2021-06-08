const Cat = require('../models/Cat');

module.exports = {
    async addCat(cat) {
        const record = await new Cat(cat);
        return record.save();
    }
};