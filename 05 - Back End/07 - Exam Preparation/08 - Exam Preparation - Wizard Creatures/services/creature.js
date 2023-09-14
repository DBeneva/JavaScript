const Creature = require('../models/Creature');
const User = require('../models/User');

module.exports = {
    addCreature,
    getAllCreatures,
    getCreatureById,
    editCreature,
    voteForCreature,
    deleteCreature
};

async function addCreature(creatureData, userData) {
    const creature = await new Creature(creatureData);
    const user = await User.findById(userData._id);
    user.creatures = user.creatures ? [...user.creatures, creature._id.toString()] : [creature._id.toString()];

    creature.authorName = `${user.firstName} ${user.lastName}`;

    return Promise.all([creature.save(), user.save()]);
}

async function getAllCreatures(query) {
    const search = query
        ? { location: { $regex: query.search || /.*/, $options: 'i' } }
        : {};

    const creatures = await Creature.find(search).lean();
    return creatures;
}

async function getCreatureById(id) {
    return await Creature.findById(id).lean();
}

async function editCreature(id, creatureData) {
    return await Creature.findByIdAndUpdate(id, creatureData, { runValidators: true });    
}

async function voteForCreature(creatureID, userID) {
    const creature = await Creature.findById(creatureID);
    creature.votes.push(userID);

    const user = await User.findById(userID);
    creature.votedEmails += creature.votedEmails ? `, ${user.email}` : user.email;

    return creature.save();
}

async function deleteCreature(id) {
    return await Creature.findByIdAndRemove(id);
}