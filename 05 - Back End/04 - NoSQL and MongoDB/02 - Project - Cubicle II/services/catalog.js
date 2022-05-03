const Cube = require('../models/Cube');

module.exports = {
    async getAll(query) {
        const searchParams = {
            name: { $regex: query.search || '', $options: 'i' },
            difficulty: { $gte: Number(query.from) || 0, $lte: Number(query.to) || 6 }
        };
    
        const cubes = Cube.find(searchParams).lean();
        return cubes;
    }
};