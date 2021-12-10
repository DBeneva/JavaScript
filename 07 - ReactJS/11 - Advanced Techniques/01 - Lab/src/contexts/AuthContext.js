import { createContext, useState } from 'react';

export const AuthContext = createContext();

const initialState = { _id: '', email: '' };

export const AuthProvider = ({
    children
}) => {
    const [user, setUser] = useState(initialState);
    const login = (email, password) => {
        setUser({
            email
        });
    };

    return (
        <AuthContext.Provider value={{user, login}}>
            {children}
        </AuthContext.Provider>
    );
};