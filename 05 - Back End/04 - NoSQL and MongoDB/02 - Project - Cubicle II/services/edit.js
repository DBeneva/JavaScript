const Cube = require('../models/Cube');

module.exports = {
    async edit(id, cube) {
        const existing = await Cube.findById(id);
    
        if (!existing) {
            throw new ReferenceError('No such ID in database');
        }
    
        Object.assign(existing, cube); // goes through the setters (validation)
        return existing.save();
    }
};