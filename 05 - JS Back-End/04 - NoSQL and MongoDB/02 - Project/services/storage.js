const Cube = require('../models/Cube');
const Comment = require('../models/Comment')
const Sticker = require('../models/Sticker');

async function init() {
    return (req, res, next) => {
        req.storage = {
            getAll,
            getById,
            create,
            edit,
            createComment,
            createSticker,
            getAllStickers,
            attachSticker
        };

        next();
    }
}

async function getAll(query) {
    const searchParams = {
        name: { $regex: query.search || '', $options: 'i' },
        difficulty: { $gte: Number(query.from) || 0, $lte: Number(query.to) || 6 }
    };

    const cubes = Cube.find(searchParams).lean();
    return cubes;
}

async function getById(id) {
    const cube = await Cube.findById(id)
        .populate('comments')
        .populate('stickers')
        .lean();

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

async function getAllStickers(existing) {
    return Sticker.find({ _id: { $nin: existing } }).lean();
}

async function createSticker(sticker) {
    const record = new Sticker(sticker);
    return record.save();
}

async function attachSticker(cubeId, stickerId) {
    const cube = await Cube.findById(cubeId);
    const sticker = await Sticker.findById(stickerId);

    if (!cube || !sticker) {
        throw new ReferenceError('No such ID in database');
    }

    cube.stickers.push(sticker);
    return cube.save();
}

module.exports = {
    init,
    getAll,
    getById,
    create,
    edit,
    createComment,
    createSticker,
    getAllStickers,
    attachSticker
};