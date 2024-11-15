const Planet = require('../models/Planet');
const User = require('../models/User');

module.exports = {
    addRecord,
    getAllRecords,
    getRecordById,
    editRecord,
    likePlanet,
    deleteRecord
};

async function addRecord(recordData, userData) {
    const planet = await new Planet({ ...recordData, ownerEmail: userData.email });
    const user = await User.findById(userData._id);
    user.planets = user.planets ? [...user.planets, planet._id.toString()] : [planet._id.toString()];

    return Promise.all([planet.save(), user.save()]);
}

async function getAllRecords(query) {
    const search = query
        ? { name: { $regex: query.name || /.*/, $options: 'i' },
            solarSystem: { $regex: query.solarSystem || /.*/, $options: 'i' }
          }
        : {};

    const planets = await Planet.find(search).lean();
    return planets;
}

async function getRecordById(id) {
    return await Planet.findById(id).populate('owner').lean();
}

async function editRecord(id, recordData) {
    return await Planet.findByIdAndUpdate(id, recordData, { runValidators: true });    
}

async function likePlanet(planetID, userID) {
    const planet = await Planet.findById(planetID);
    planet.likedList.push(userID);

    const user = await User.findById(userID);
    user.likedPlanets.push(planet._id);

    return Promise.all([planet.save(), user.save()]);
}

async function deleteRecord(id) {
    return await Planet.findByIdAndRemove(id);
}