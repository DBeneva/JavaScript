const Cat = require("../models/Cat");
const Breed = require("../models/Breed");

module.exports = {
    async getById(id) {
        return Cat.findById(id).lean();
    },
    async getAllBreeds() {
        return Breed.find({}).lean();
    },
    async edit(id, cat) {
        const existing = await Cat.findById(id);

        if (!existing) {
            throw new ReferenceError('No such ID in the database');
        }

        Object.assign(existing, cat);
        return existing.save();
    }
};