const Game = require('../models/Game');
const User = require('../models/User');

module.exports = {
    createGame,
    getAllGames,
    getGameById,
    editGame,
    buyGame,
    deleteGame
};

async function createGame(gameData, userData) {
    const game = await new Game(gameData);
    const user = await User.findById(userData._id);
    user.games = user.games ? [...user.games, game._id.toString()] : [game._id.toString()];

    return Promise.all([game.save(), user.save()]);
}

async function getAllGames(query) {
    const search = query
        ? {
            name: { $regex: query.search || /.*/, $options: 'i' },
            platform: { $regex: query.platform || /.*/ }
        }
        : {};

    const games = await Game.find(search).lean();
    return games;
}

async function getGameById(id) {
    return await Game.findById(id).lean();
}

async function editGame(id, photoData) {
    return await Game.findByIdAndUpdate(id, photoData, { runValidators: true });    
}

async function buyGame(gameID, userID) {
    const game = await Game.findById(gameID);
    game.boughtBy.push(userID);

    return game.save();
}

async function deleteGame(id) {
    return await Game.findByIdAndRemove(id);
}