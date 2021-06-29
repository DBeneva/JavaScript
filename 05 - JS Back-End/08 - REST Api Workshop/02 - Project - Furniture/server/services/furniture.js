const Furniture = require('../models/Furniture');

module.exports = {
    getAll,
    getById,
    create
};

async function create(data) {
    return await new Furniture(data).save();
}

async function getAll() {
    return Furniture.find({}).lean();
}

async function getById(id) {
    return Furniture.findById(id).lean();
}