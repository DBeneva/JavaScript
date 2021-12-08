import { createContext, useState } from 'react';

export const AuthContext = createContext();

const initialState = { _id: '', email: '', accessToken: '' };

export const AuthProvider = ({
    children
}) => {
    const [user, setUser] = useState(initialState);

    return (
        <AuthContext.Provider values={user}>
            {children}
        </AuthContext.Provider>
    );
};