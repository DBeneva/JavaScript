import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

const login = api.login;
const register = api.register;
const logout = api.logout;
const getUserId = api.getUserId;

async function getAllFacts() {
    return await api.get(host + '/data/facts?sortBy=_createdOn%20desc');
}

async function getFactById(id) {
    return await api.get(host + '/data/facts/' + id);
}

async function getFactsBySearch(search) {
    return await api.get(host + `/data/facts?where=name%20LIKE%20%22${search}%22`);
}

async function likeFact(fact) {
    return await api.post(host + `/data/likes`, fact);
}

async function getPeopleLikedFact(factId) {
    return await api.get(host + `/data/likes?where=factId%3D%22${factId}%22&distinct=_ownerId&count`);
}

async function hasUserLikedFact(factId, userId) {
    return await api.get(host + `/data/likes?where=factId%3D%22${factId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}

async function createFact(fact) {
    return await api.post(host + '/data/facts', fact);
}

async function editFact(id, fact) {
    return await api.put(host + '/data/facts/' + id, fact);
}

async function deleteFact(id) {
    return await api.del(host + '/data/facts/' + id);
}

export {
    login,
    register,
    logout,
    getAllFacts,
    getFactById,
    getFactsBySearch,
    likeFact,
    getPeopleLikedFact,
    hasUserLikedFact,
    createFact,
    editFact,
    deleteFact,
    getUserId
};