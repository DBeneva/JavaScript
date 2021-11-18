const API_URL = 'http://localhost:3030/jsonstore';

export const createToDo = async (todo) => {
    let response = await fetch(`${API_URL}/todos`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(todo)
    });

    return await response.json();
};