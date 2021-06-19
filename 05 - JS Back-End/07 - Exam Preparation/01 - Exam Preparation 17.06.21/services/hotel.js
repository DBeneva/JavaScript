const Hotel = require('../models/Hotel');

async function createHotel(hotelData) {
    const hotel = new Hotel(hotelData)
    await hotel.save();
    return hotel;
}

async function getAllHotels() {
    const hotel = await Hotel.find({});

    return hotel;
}