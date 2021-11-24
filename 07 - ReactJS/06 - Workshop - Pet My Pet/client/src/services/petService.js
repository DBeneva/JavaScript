export const getAll = async () => {
    const result = await fetch(`http://localhost:3030/jsonstore/pets`);
    return await result.json();
};

export const getById = async (id) => {
    return await fetch(`http://localhost:3030/jsonstore/pets/${id}`);
};