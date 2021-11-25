const baseUrl = 'http://localhost:3030/jsonstore';

export const getAll = async () => {
    const result = await fetch(`${baseUrl}/pets`);
    const pets = await result.json();

    return Object.values(pets);
};

export const getById = async (id) => {
    return await fetch(`${baseUrl}/pets/${id}`);
};

export const create = async (petData) => {
    const response = await fetch(`${baseUrl}/pets`, {
        method: 'POST',
        'content-type': 'application/json',
        body: JSON.stringify(petData)
    });

    return await response.json();
};