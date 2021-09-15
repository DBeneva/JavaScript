import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

const login = api.login;
const register = api.register;
const logout = api.logout;
const getUserId = api.getUserId;

async function getFurniture() {
    return await api.get(host + '/data/catalog');
}

async function getItemById(id) {
    return await api.get(host + '/data/catalog/' + id);    
}

async function getMyFurniture() {
    const userId = await api.getUserId();
    return await api.get(`${host}/data/catalog?where=_ownerId%3D%22${userId}%22`);
}

async function createFurniture(item) {
    return await api.post(host + '/data/catalog', item);
}

async function editFurniture(id, item) {
     return await api.put(host + '/data/catalog/' + id, item);
}

async function deleteFurniture(id) {
    return await api.del(host + '/data/catalog/' + id);
}

export {
    login,
    register,
    logout,
    getFurniture,
    getItemById,
    getMyFurniture,
    createFurniture,
    editFurniture,
    deleteFurniture,
    getUserId
};