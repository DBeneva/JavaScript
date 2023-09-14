import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

const login = api.login;
const register = api.register;
const logout = api.logout;
const getUserId = api.getUserId;

async function getAllPosts() {
    return await api.get(host + '/data/motorcycles?sortBy=_createdOn%20desc');
}

async function getPostById(id) {
    return await api.get(host + '/data/motorcycles/' + id);
}

async function getPostsBySearch(search) {
    return await api.get(host + `/data/motorcycles?where=model%20LIKE%20%22${search}%22`);
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

async function createPost(motorcycle) {
    return await api.post(host + '/data/motorcycles', motorcycle);
}

async function editPost(id, motorcycle) {
    return await api.put(host + '/data/motorcycles/' + id, motorcycle);
}

async function deletePost(id) {
    return await api.del(host + '/data/motorcycles/' + id);
}

export {
    login,
    register,
    logout,
    getAllPosts,
    getPostById,
    getPostsBySearch,
    likeFact,
    getPeopleLikedFact,
    hasUserLikedFact,
    createPost,
    editPost,
    deletePost,
    getUserId
};