const Play = require('../models/Play');

module.exports = {
    createPlay,
    getAllPlays,
    getPlayById,
    editPlay
};

async function createPlay(playData) {
    const pattern = new RegExp(`^${playData.title}$`, 'i');
    const existing = await Play.find({ title: { $regex: pattern } });

    if (existing) {
        throw new Error('A play with this name already exists!');
    }

    const play = await new Play(playData);
    await play.save();

    return play;
}

async function getAllPlays() {
    return await Play.find({ isPublic: true }).sort({ createdAt: -1 }).lean();
}

async function getPlayById(id) {
    return await Play.findById(id).lean();
}

async function editPlay(id, playData) {
    const play = await Play.findByIdAndUpdate(id, playData);

    return play;
}