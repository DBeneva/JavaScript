import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;

export async function getMovies(page) {
    return await api.get(host + '/data/movies' + `&offset=${(page - 1) * 5}&pageSize=5`);
}

export async function getMovieCount() {
    return await Object.values(api.get(host + '/data/movies')).length;
}

export async function createMovie(movie) {
    return await api.post(host + 'data/movies', movie);
}

export async function getMovieById(id) {
    return await api.get(host + '/data/movies/' + id);
}

export async function getLikesByMovieId(movieId) {
    return await api.get(host + `/data//likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`);
}

export async function getOwnLikesByMovieId(movieId) {
    const userId = sessionStorage.getItem('userId');
    return await api.get(host + `/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`);
}

export async function deleteMovieById(movieId) {
    return await api.del(host + '/data/movies/' + movieId);
}

export async function likeMovieById(id) {
    return await api.post(host + '/data/likes', { movieId: id });
}

export async function editMovieById(id, movie) {
    return await api.put(host + '/data/movies/' + id, movie);
}