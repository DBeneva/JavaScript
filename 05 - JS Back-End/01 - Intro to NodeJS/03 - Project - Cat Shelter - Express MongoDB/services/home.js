const Cat = require('../models/Cat');

module.exports = {
    async getAll(query) {
        return Cat.find({ name: { $regex: query || '' } }).lean();
    }
};