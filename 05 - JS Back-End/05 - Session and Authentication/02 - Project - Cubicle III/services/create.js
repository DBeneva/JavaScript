const Cube = require('../models/Cube');

module.exports = {
    async create(cube) {
        const record = new Cube(cube);
        return record.save();
    }
};