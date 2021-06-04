const mongoose = require('mongoose');
const Cube = require('../models/Cube');
const Comment = require('../models/Comment')
const Accessory = require('../models/Accessory');

// mongoose.set('useFindAndModify', false);

async function init() {
    return (req, res, next) => {
        req.storage = {
            getAll,
            getById,
            create,
            createAccessory,
            edit,
            createComment,
            getAllAccessories
        };

        next();
    }
}

async function getAll(query) {
    const searchParams = {
        name: { $regex: query.search || '', $options: 'i' },
        difficulty: { $gte: Number(query.from) || 0, $lte: Number(query.to) || 6 }
    };

    const cubes = await Cube
        .find(searchParams)
        .populate('accessories')
        .lean();
    return cubes;
}

async function getById(id) {
    const cube = await Cube.findById(id).populate('comments').lean();

    if (cube) {
        return cube;
    } else {
        return undefined;
    }
}

async function create(cube) {
    const record = new Cube(cube);
    return record.save();
}

async function getAllAccessories() {
    return await Accessory.find({}).lean();
}

async function createAccessory(accessory) {
    return await new Accessory({
        name: accessory.name,
        description: accessory.description,
        imageUrl: accessory.imageUrl,
    }).save();
}

async function edit(id, cube) {
    const existing = await Cube.findById(id);

    if (!existing) {
        throw new ReferenceError('No such ID in database');
    }

    Object.assign(existing, cube); // goes through the setters (validation)
    return existing.save();
}

async function createComment(cubeId, comment) {
    const cube = await Cube.findById(cubeId);

    if (!cube) {
        throw new ReferenceError('No such ID in database');
    }

    const newComment = new Comment(comment);
    await newComment.save();
    cube.comments.push(newComment);
    await cube.save();
}

module.exports = {
    init,
    getAll,
    getById,
    create,
    edit,
    createComment,
    createAccessory,
    getAllAccessories
};