const Hotel = require('../models/Hotel');

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
    return hotel;
}

async function editHotel(id, hotel) {
    await Hotel.findByIdAndUpdate(id, hotel);
    return hotel;
}

async function bookHotel(id, bookerId) {
    const hotel = await Hotel.findById(id);
    const bookings = hotel.bookedBy;
    bookings.push(bookerId);
    await Hotel.findByIdAndUpdate(id, { bookedBy: bookings });
    return hotel;
}

async function deleteHotel(id) {
    await Hotel.findByIdAndRemove(id);
    return hotel;
}