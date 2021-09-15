const Cat = require('../models/Cat');

module.exports = {
    async getAll(query) {
        const searchParams = (query == undefined || query == '') ? {} : { $text: { $search: query } };
        return await Cat.find(searchParams).lean();
    }
};