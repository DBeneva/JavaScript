import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

const login = api.login;
const register = api.register;
const logout = api.logout;
const getUserId = api.getUserId;

async function getAllRecords() {
    return await api.get(host + '/data/drones?sortBy=_createdOn%20desc');
}

async function getRecordById(id) {
    return await api.get(host + '/data/drones/' + id);
}

async function getRecordsBySearchQuery(query) {
    return await api.get(host + `/data/drones?where=model%20LIKE%20%22${query}%22`);
}

async function createRecord(drone) {
    return await api.post(host + '/data/drones', drone);
}

async function editRecord(id, drone) {
    return await api.put(host + '/data/drones/' + id, drone);
}

async function deleteRecord(id) {
    return await api.del(host + '/data/drones/' + id);
}

export {
    login,
    register,
    logout,
    getAllRecords,
    getRecordById,
    getRecordsBySearchQuery,
    createRecord,
    editRecord,
    deleteRecord,
    getUserId
};