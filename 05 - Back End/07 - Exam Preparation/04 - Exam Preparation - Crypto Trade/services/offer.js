const Offer = require('../models/Offer');
const User = require('../models/User');

module.exports = {
    createOffer,
    getAllOffers,
    getOfferById,
    editOffer,
    buyOffer,
    deleteOffer
};

async function createOffer(offerData) {
    // const pattern = new RegExp(`^${offerData.name}$`, 'i');
    // const existing = await Offer.findOne({ name: { $regex: pattern } });

    // if (existing) {
    //     throw new Error('An offer with this name already exists!');
    // }

    console.log(offerData);
    const offer = await new Offer(offerData);
    return await offer.save();    
}

async function getAllOffers(user, query) {
    const search = query
        ? {
            name: { $regex: query.search || /.*/, $options: 'i' },
            payment: { $regex: query.payment || /.*/ }
        }
        : {};

    // const sort = user ? { createdAt: 1 } : { users: -1 };
    // const limit = user ? '' : 3;
    
    // return await Offer.find(search).sort(sort).limit(limit).lean();

    const offers = await Offer.find(search).lean();
    offers.map(o => o.price = o.price.toFixed(2));

    return offers;
}

async function getOfferById(id) {
    const offer = await Offer.findById(id).populate('boughtBy').lean();
    offer.price = offer.price.toFixed(2);

    return offer;
}

async function editOffer(id, offerData) {
    return await Offer.findByIdAndUpdate(id, offerData, { runValidators: true });    
}

async function buyOffer(offerID, userID) {
    const offer = await Offer.findById(offerID);
    const user = await User.findById(userID);

    offer.boughtBy.push(userID);
    user.offers.push(offerID);

    return Promise.all([offer.save(), user.save()]);
}

async function deleteOffer(id) {
    return await Offer.findByIdAndRemove(id);
}