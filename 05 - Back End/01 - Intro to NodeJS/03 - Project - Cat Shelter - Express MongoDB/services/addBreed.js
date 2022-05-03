const Breed = require('../models/Breed');

module.exports = {
    async addBreed(breed) {
        const record = await new Breed(breed);
        return record.save();
    }
};