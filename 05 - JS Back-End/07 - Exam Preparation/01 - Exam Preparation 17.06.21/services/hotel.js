const Hotel = require('../models/Hotel');
const User = require('../models/User');

module.exports = {
    getAllHotels,
    getHotelById,
    createHotel,
    editHotel,
    bookHotel,
    deleteHotel
};

async function getAllHotels() {
    const hotel = await Hotel.find({}).lean();

    return hotel.sort((a, b) => b.rooms - a.rooms);
}

async function getHotelById(id) {
    const hotel = await Hotel.findById(id).lean();

    return hotel;
}

async function createHotel(hotelData) {
    const hotel = new Hotel(hotelData)
    await hotel.save();

    const owner = await User.findById(hotel.owner);
    const offers = owner.offers;
    offers.push(hotel._id);
    await owner.save();
    
    return hotel;
}

async function editHotel(id, hotelData) {
    return await Hotel.findByIdAndUpdate(id, hotelData, { runValidators: true }).lean();
}

async function bookHotel(hotelId, userId) {
    const hotel = await Hotel.findById(hotelId);
    const user = await User.findById(userId);

    if (user._id == hotel.owner) {
        throw new Error('You cannot book your own hotel!');
    }

    user.reservations.push(hotelId);
    hotel.bookedBy.push(user);
    hotel.rooms--;

    return Promise.all([user.save(), hotel.save()]);
}

async function deleteHotel(id) {
    await Hotel.findByIdAndRemove(id);
    return hotel;
}