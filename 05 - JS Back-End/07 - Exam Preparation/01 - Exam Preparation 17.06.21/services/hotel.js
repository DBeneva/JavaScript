const Hotel = require('../models/Hotel');

module.exports = {
    getAllHotels,
    getHotelById,
    createHotel
};

async function getAllHotels() {
    const hotel = await Hotel.find({}).lean();

    return hotel;
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