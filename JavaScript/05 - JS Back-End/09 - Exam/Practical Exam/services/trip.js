const Trip = require('../models/Trip');
const User = require('../models/User');

module.exports = {
    createTrip,
    getAllTrips,
    getTripById,
    editTrip,
    joinTrip,
    deleteTrip
};

async function createTrip(tripData, userId) {
    const trip = await new Trip(tripData);
    const user = await User.findById(userId);

    user.trips.push(trip._id);
    return Promise.all([trip.save(), user.save()]);
}

async function getAllTrips() {
    return await Trip.find({}).lean();
}

async function getTripById(id) {
    return await Trip.findById(id).populate('buddies').populate('creator').lean();    
}

async function editTrip(id, tripData) {
    return await Trip.findByIdAndUpdate(id, tripData, { runValidators: true });    
}

async function joinTrip(tripId, userId) {
    const trip = await Trip.findById(tripId);

    trip.buddies.push(userId);
    trip.seats--;

    return trip.save();
}

async function deleteTrip(id) {
    return await Trip.findByIdAndRemove(id);
}