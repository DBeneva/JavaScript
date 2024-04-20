import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

const login = api.login;
const register = api.register;
const logout = api.logout;
const getUserId = api.getUserId;

async function getAllPosts() {
    return await api.get(host + '/data/characters?sortBy=_createdOn%20desc');
}

async function getPostById(id) {
    return await api.get(host + '/data/characters/' + id);
}

async function like(characterId) {
    return await api.post(host + `/data/useful`, { characterId });
}

async function getLikes(characterId) {
    return await api.get(host + `/data/useful?where=characterId%3D%22${characterId}%22&distinct=_ownerId&count`);
}

async function getUserLikes(characterId, userId) {
    return await api.get(host + `/data/useful?where=characterId%3D%22${characterId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}

async function createPost(character) {
    return await api.post(host + '/data/characters', character);
}

async function editPost(id, character) {
    return await api.put(host + '/data/characters/' + id, character);
}

async function deletePost(id) {
    return await api.del(host + '/data/characters/' + id);
}

export {
    login,
    register,
    logout,
    getAllPosts,
    getPostById,
    like,
    getLikes,
    getUserLikes,
    createPost,
    editPost,
    deletePost,
    getUserId
};