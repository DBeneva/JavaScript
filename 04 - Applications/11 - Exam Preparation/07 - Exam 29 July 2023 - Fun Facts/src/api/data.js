import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

const login = api.login;
const register = api.register;
const logout = api.logout;
const getUserId = api.getUserId;

async function getAllEvents() {
    return await api.get(host + '/data/events?sortBy=_createdOn%20desc');
}

async function getEventById(id) {
    return await api.get(host + '/data/events/' + id);
}

async function getEventsBySearch(search) {
    return await api.get(host + `/data/events?where=name%20LIKE%20%22${search}%22`);
}

async function goToEvent(event) {
    return await api.post(host + `/data/going`, event);
}

async function getPeopleGoingToEvent(eventId) {
    return await api.get(host + `/data/going?where=eventId%3D%22${eventId}%22&distinct=_ownerId&count`);
}

async function isUserGoingToEvent(eventId, userId) {
    return await api.get(host + `/data/going?where=eventId%3D%22${eventId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}

async function createEvent(event) {
    return await api.post(host + '/data/events', event);
}

async function editEvent(id, event) {
    return await api.put(host + '/data/events/' + id, event);
}

async function deleteEvent(id) {
    return await api.del(host + '/data/events/' + id);
}

export {
    login,
    register,
    logout,
    getAllEvents,
    getEventById,
    getEventsBySearch,
    goToEvent,
    getPeopleGoingToEvent,
    isUserGoingToEvent,
    createEvent,
    editEvent,
    deleteEvent,
    getUserId
};