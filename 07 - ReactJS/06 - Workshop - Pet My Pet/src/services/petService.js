import * as request from './requester';

const baseUrl = 'http://localhost:3030/data';

export const getAll = () => request.get(`${baseUrl}/pets`);

export const getById = async (id, signal) => {
    const pet = await fetch(`${baseUrl}/pets/${id}`, { signal });
    return await pet.json();
};

export const getMyPets = async (ownerId) => {
    const query = encodeURIComponent(`_ownerId="${ownerId}"`);
    return await request.get(`${baseUrl}/pets?where=${query}`);
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

export const update = (petId, petData) => {
    request.put(`${baseUrl}/pets/${petId}`, petData);
};

export const remove = (id, token) => {
    return fetch(`${baseUrl}/pets/${id}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    }).then(res => res.json());
};