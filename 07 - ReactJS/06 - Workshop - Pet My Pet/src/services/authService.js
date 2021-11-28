export const login = (username) => {
    localStorage.setItem('username', username);
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