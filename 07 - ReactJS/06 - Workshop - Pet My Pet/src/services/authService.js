export const login = async (email, password) => {
    const response = await fetch('http://localhost:3030/users/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    const jsonResult = await response.json();

    if (response.ok) {
        return jsonResult;
    }
    
    throw jsonResult.message;
};

export const getUser = () => {
    return localStorage.getItem('username');
};

export const isAuthenticated = () => {
    return Boolean(getUser());
};

export const logout = () => {
    localStorage.removeItem('username');
};