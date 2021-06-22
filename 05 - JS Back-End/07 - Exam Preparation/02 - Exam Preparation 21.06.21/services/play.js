const Play = require('../models/Play');

module.exports = {
    createPlay,
    getAllPlays,
    getPlayById,
    editPlay
};

async function createPlay(playData) {
    const play = await new Play(playData);
    await play.save();

    return play;
}

async function getAllPlays() {
    const plays = await Play.find({}).lean();

    return plays.sort((a, b) => b.likes.length - a.likes.length).slice(0, 3);
}

async function getPlayById(id) {
    const play = await Play.findById(id).lean();

    return play;
}

async function editPlay(id, playData) {
    const play = await Play.findByIdAndUpdate(id, playData);

    return play;
}