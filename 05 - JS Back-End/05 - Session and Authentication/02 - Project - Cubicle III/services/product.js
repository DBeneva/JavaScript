const Cube = require('../models/Cube');
const Comment = require('../models/Comment');
const Sticker = require('../models/Sticker');

async function getAll(query) {
    const searchParams = {
        name: { $regex: query.search || '', $options: 'i' },
        difficulty: { $gte: Number(query.from) || 0, $lte: Number(query.to) || 6 }
    };

    const cubes = await Cube.find(searchParams).lean();

    return cubes;
}

async function getById(id) {
    const cube = await Cube
        .findById(id)
        .populate({
            path: 'comments',
            populate: { path: 'author' }
        })
        .populate('stickers')
        .populate('author')
        .lean();

    if (cube) {
        const viewModel = {
            _id: cube._id,
            name: cube.name,
            description: cube.description,
            imageUrl: cube.imageUrl,
            difficulty: cube.difficulty,
            comments: cube.comments.map(c => ({ content: c.content, author: c.author.username })),
            stickers: cube.stickers,
            author: cube.author && cube.author.username,
            authorId: cube.author && cube.author._id
        };

        return viewModel;
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

    Object.assign(existing, cube);

    return await existing.save();
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

async function attachSticker(cubeId, stickerId) {
    const cube = await Cube.findById(cubeId);
    const sticker = await Sticker.findById(stickerId);
    if (!cube || !sticker) {
        throw new ReferenceError('No such ID in database');
    }

    cube.stickers.push(sticker);
    return await cube.save();
}

async function deleteCube(id) {
    const cube = await Cube.findById(id);

    if (!cube) {
        throw new ReferenceError('No such ID in database');
    }

    return await Cube.findByIdAndRemove(id);
}

module.exports = {
    getAll,
    getById,
    create,
    edit,
    createComment,
    attachSticker,
    deleteCube
};