const mongoose = require('mongoose');
const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');

mongoose.set('useFindAndModify', false);

async function init() {
    return (req, res, next) => {
        req.storage = {
            getAll,
            getById,
            create,
            createAccessory,
            edit
        };

        next();
    }
}

async function getAll(query) {
    try {
        let cubes = await Cube
            .find({})
            .populate('accessories')
            .lean();

        if (query.search) {
            cubes = cubes.filter(c => c.name.toLowerCase().includes(query.search.toLowerCase()));
        }
        if (query.from) {
            cubes = cubes.filter(c => c.difficulty >= Number(query.from));
        }
        if (query.to) {
            cubes = cubes.filter(c => c.difficulty <= Number(query.to));
        }
    
        return cubes;
    } catch (err) {
        console.error(err.message)
    }
}

async function getById(id) {
    return await Cube.findById(id).lean();
}

async function create(cube) {
    await new Cube({
        name: cube.name,
        description: cube.description,
        imageUrl: cube.imageUrl,
        difficulty: cube.difficulty,
        accessories: cube.accessories
    }).save();
}

async function createAccessory(accessory) {
    await new Accessory({
        name: accessory.name,
        description: accessory.description,
        imageUrl: accessory.imageUrl,
    }).save();
}

async function edit(id, cube) {
    await Cube.findByIdAndUpdate(id, {
        $set: {
            name: cube.name,
            description: cube.description,
            imageUrl: cube.imageUrl,
            difficulty: cube.difficulty,
            accessories: cube.accessories
        }
    });
}

module.exports = {
    init,
    getAll,
    getById,
    create,
    edit
};