import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

const login = api.login;
const register = api.register;
const logout = api.logout;
const getUserId = api.getUserId;

async function getAllRecords() {
    return await api.get(host + '/data/cars?sortBy=_createdOn%20desc');
}

async function getRecordById(id) {
    return await api.get(host + '/data/cars/' + id);
}

async function getRecordsBySearchQuery(query) {
    return await api.get(host + `/data/cars?where=model%20LIKE%20%22${query}%22`);
}

async function createRecord(car) {
    return await api.post(host + '/data/cars', car);
}

async function editRecord(id, car) {
    return await api.put(host + '/data/cars/' + id, car);
}

async function deleteRecord(id) {
    return await api.del(host + '/data/cars/' + id);
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