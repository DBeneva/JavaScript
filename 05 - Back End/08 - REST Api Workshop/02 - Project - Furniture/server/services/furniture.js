const Furniture = require('../models/Furniture');

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};

async function create(data) {
    return await new Furniture(data).save();
}

async function getAll() {
    return await Furniture.find({}).lean();
}

async function getById(id) {
    return await Furniture.findById(id);
}

async function update(original, updated) {
    Object.assign(original, updated);
    await original.save();

    return original;
}

async function remove(id) {
    return Furniture.findByIdAndDelete(id);
}