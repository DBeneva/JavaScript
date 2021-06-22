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

async function editHotel(id, hotel) {
    return await Hotel.findByIdAndUpdate(id, hotel).lean();
}

async function bookHotel(id, bookerId) {
    const hotel = await Hotel.findById(id).lean();
    const bookings = hotel.bookedBy;
    bookings.push(bookerId);
    const rooms = hotel.rooms - 1;
    await Hotel.findByIdAndUpdate(id, { bookedBy: bookings, rooms }).lean();

    const booker = await User.findById(bookerId).lean();
    const reservations = booker.reservations;
    reservations.push(hotel.name);
    await User.findByIdAndUpdate(bookerId, { reservations }).lean();
}

async function deleteHotel(id) {
    await Hotel.findByIdAndRemove(id);
    return hotel;
}