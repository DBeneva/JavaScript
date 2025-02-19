const Play = require('../models/Play');

module.exports = {
    createPlay,
    getAllPlays,
    getPlayById,
    editPlay,
    likePlay,
    deletePlay
};

async function createPlay(playData) {
    const pattern = new RegExp(`^${playData.title}$`, 'i');
    const existing = await Play.findOne({ title: { $regex: pattern } });

    if (existing) {
        throw new Error('A play with this name already exists!');
    }

    const play = await new Play(playData);
    await play.save();

    return play;
}

async function getAllPlays(orderedBy, user) {
    let sort = { createdAt: -1 };
    let limit = 100;

    if (orderedBy == 'likes') {
        sort = { usersLiked: -1 };

        if (!user) {
            limit = 3;
        }
    }

    return await Play.find({ isPublic: true }).sort(sort).limit(limit).lean();

}

async function getPlayById(id) {
    return await Play.findById(id).populate('usersLiked').lean();
}

async function editPlay(id, playData) {
    return await Play.findByIdAndUpdate(id, playData, { runValidators: true });
}

async function likePlay(playId, userId) {
    const play = await Play.findById(playId);
    play.usersLiked.push(userId);
    return await play.save();
}

async function deletePlay(id) {
    return await Play.findByIdAndDelete(id);
}