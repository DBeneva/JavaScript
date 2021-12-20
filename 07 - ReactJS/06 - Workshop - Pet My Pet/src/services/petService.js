import { request } from './requester';

const baseUrl = 'http://localhost:3030/data';

export const getAll = () => request(`${baseUrl}/pets`);

export const getById = async (id) => {
    const pet = await fetch(`${baseUrl}/pets/${id}`);
    return await pet.json();
};

export const create = async (petData, token) => {
    const response = await fetch(`${baseUrl}/pets`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({ ...petData, likes: [] })
    });

    return await response.json();
};

export const remove = (id, token) => {
    return fetch(`${baseUrl}/pets/${id}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    }).then(res => res.json());
};

export const like = (petData, token) => {
    return fetch(`${baseUrl}/pets/${petData._id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(petData)
    }).then(res => res.json());
};