const Animal = require('../models/Animal');
const User = require('../models/User');

module.exports = {
    createGame: addAnimal,
    getAllAnimals,
    getAnimalById,
    editAnimal,
    donateToAnimal,
    deleteAnimal
};

async function addAnimal(animalData, userData) {
    const animal = await new Animal(animalData);
    const user = await User.findById(userData._id);
    user.animals = user.animals ? [...user.animals, animal._id.toString()] : [animal._id.toString()];

    return Promise.all([animal.save(), user.save()]);
}

async function getAllAnimals(query) {
    const search = query
        ? { location: { $regex: query.search || /.*/, $options: 'i' } }
        : {};

    const animals = await Animal.find(search).lean();
    return animals;
}

async function getAnimalById(id) {
    return await Animal.findById(id).lean();
}

async function editAnimal(id, animalData) {
    return await Animal.findByIdAndUpdate(id, animalData, { runValidators: true });    
}

async function donateToAnimal(animalID, userID) {
    const animal = await Animal.findById(animalID);
    animal.donations.push(userID);

    return animal.save();
}

async function deleteAnimal(id) {
    return await Animal.findByIdAndRemove(id);
}