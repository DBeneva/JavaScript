import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

const login = api.login;
const register = api.register;
const logout = api.logout;
const getUserId = api.getUserId;

async function getAllRecords() {
    return await api.get(host + '/data/setups?sortBy=_createdOn%20desc');
}

async function getRecordById(id) {
    return await api.get(host + '/data/setups/' + id);
}

async function getRecordsBySearchQuery(query) {
    return await api.get(host + `/data/setups?where=model%20LIKE%20%22${query}%22`);
}

async function createRecord(setup) {
    return await api.post(host + '/data/setups', setup);
}

async function editRecord(id, setup) {
    return await api.put(host + '/data/setups/' + id, setup);
}

async function deleteRecord(id) {
    return await api.del(host + '/data/setups/' + id);
}

async function likeRecord(setupId) {
    return await api.post(host + '/data/likes', { setupId });
}

async function getTotalLikes(setupId) {
    return await api.get(host + `/data/likes?where=setupId%3D%22${setupId}%22&distinct=_ownerId&count`);
}

async function getLikesForUser(setupId, userId) {
    return await api.get(host + `/data/likes?where=setupId%3D%22${setupId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
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
    likeRecord,
    getTotalLikes,
    getLikesForUser,
    getUserId
};