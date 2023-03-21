import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

const login = api.login;
const register = api.register;
const logout = api.logout;
const getUserId = api.getUserId;

async function getAllFruits() {
    return await api.get(host + '/data/fruits?sortBy=_createdOn%20desc');
}

async function getFruitById(id) {
    return await api.get(host + '/data/fruits/' + id);
}

async function getFruitsBySearch(search) {
    return await api.get(host + `/data/fruits?where=name%20LIKE%20%22${search}%22`);
}

async function createFruit(fruit) {
    return await api.post(host + '/data/fruits', fruit);
}

async function editFruit(id, fruit) {
    return await api.put(host + '/data/fruits/' + id, fruit);
}

async function deleteFruit(id) {
    return await api.del(host + '/data/fruits/' + id);
}

export {
    login,
    register,
    logout,
    getAllFruits,
    getFruitById,
    getFruitsBySearch,
    createFruit,
    editFruit,
    deleteFruit,
    getUserId
};