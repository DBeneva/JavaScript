const Cosmetic = require('../models/Cosmetic');
const User = require('../models/User');

module.exports = {
    addRecord,
    getAllRecords,
    getRecordById,
    editRecord,
    recommendCosmetic,
    deleteRecord
};

async function addRecord(recordData, userData) {
    const cosmetic = await new Cosmetic({ ...recordData, ownerEmail: userData.email });
    const user = await User.findById(userData._id);
    user.cosmetics = user.cosmetics ? [...user.cosmetics, cosmetic._id.toString()] : [cosmetic._id.toString()];

    return Promise.all([cosmetic.save(), user.save()]);
}

async function getAllRecords(query) {
    const search = query
        ? { name: { $regex: query || /.*/, $options: 'i' }}
        : {};

    console.log(search);
    
    const cosmetics = await Cosmetic.find(search).lean();
    return cosmetics;
}

async function getRecordById(id) {
    return await Cosmetic.findById(id).populate('owner').lean();
}

async function editRecord(id, recordData) {
    return await Cosmetic.findByIdAndUpdate(id, recordData, { runValidators: true });    
}

async function recommendCosmetic(cosmeticID, userID) {
    const cosmetic = await Cosmetic.findById(cosmeticID);
    cosmetic.recommendList.push(userID);

    const user = await User.findById(userID);
    user.recommendedCosmetics.push(cosmetic._id);

    return Promise.all([cosmetic.save(), user.save()]);
}

async function deleteRecord(id) {
    return await Cosmetic.findByIdAndRemove(id);
}