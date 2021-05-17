import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

const login = api.login;
const register = api.register;
const logout = api.logout;
const getUserId = api.getUserId;

const categories = {
    'JavaScript': 'js',
    'Python': 'python',
    'Java': 'java',
    'C#': 'csharp'
};

async function getAllArticles() {
    return await api.get(host + '/data/wiki?sortBy=_createdOn%20desc');
}

async function getArticleById(id) {
    return await api.get(host + '/data/wiki/' + id);
}

async function getRecentArticles() {
    const userId = await api.getUserId();
    return await api.get(host + '/data/wiki?sortBy=_createdOn%20desc&distinct=category');
}

async function getArticlesBySearch(search) {
    return await api.get(host + `/data/wiki?where=title%20LIKE%20%22${search}%22`);
}

async function createArticle(article) {
    return await api.post(host + '/data/wiki', article);
}

async function editArticle(id, article) {
    return await api.put(host + '/data/wiki/' + id, article);
}

async function deleteArticle(id) {
    return await api.del(host + '/data/wiki/' + id);
}

export {
    login,
    register,
    logout,
    getAllArticles,
    getArticleById,
    getRecentArticles,
    getArticlesBySearch,
    createArticle,
    editArticle,
    deleteArticle,
    getUserId,
    categories
};