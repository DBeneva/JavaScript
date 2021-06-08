const Cat = require("../models/Cat");

module.exports = {
    async shelter(id) {
        const existing = await Cat.findById(id);

        if (!existing) {
            throw new ReferenceError('No such ID in the database');
        }

        return Cat.findByIdAndRemove(id);
    }
};