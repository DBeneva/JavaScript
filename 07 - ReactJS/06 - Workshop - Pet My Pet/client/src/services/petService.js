const baseUrl = 'http://localhost:3030/jsonstore';

export const getAll = async () => {
    const result = await fetch(`${baseUrl}/pets`);
    const pets = await result.json();

    return Object.values(pets);
};

export const getById = async (id) => {
    return await fetch(`${baseUrl}/pets/${id}`);
};