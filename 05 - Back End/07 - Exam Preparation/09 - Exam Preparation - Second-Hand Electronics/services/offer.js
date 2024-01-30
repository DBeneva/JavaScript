const Offer = require('../models/Offer');
const User = require('../models/User');

module.exports = {
    addOffer,
    getAllOffers,
    getOfferById,
    editOffer,
    buyOffer,
    deleteOffer
};

async function addOffer(offerData, userData) {
    const offer = await new Offer(offerData);
    const user = await User.findById(userData._id);
    user.offers = user.offers ? [...user.offers, offer._id.toString()] : [offer._id.toString()];

    return Promise.all([offer.save(), user.save()]);
}

async function getAllOffers(query) {
    const search = Object.keys(query).length > 0
        ? {
              name: { $regex: query.name || /.*/, $options: 'i' },
              type: { $regex: query.type || /.*/, $options: 'i' }
          }
        : {};
    console.log('SEArch service', search);

    const offers = await Offer.find(search).lean();
    console.log('OFFERS', offers);
    return offers;
}

async function getOfferById(id) {
    return await Offer.findById(id).lean();
}

async function editOffer(id, offerData) {
    return await Offer.findByIdAndUpdate(id, offerData, { runValidators: true });
}

async function buyOffer(creatureID, userID) {
    const offer = await Offer.findById(creatureID);
    offer.boughtBy.push(userID);

    return offer.save();
}

async function deleteOffer(id) {
    return await Offer.findByIdAndRemove(id);
}