import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import * as authService from '../../services/authService';
import { AuthContext } from '../../contexts/AuthContext';

const Logout = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                logout();
                navigate('/dashboard');
            });
    }, []);

    return null;
};

export default Logout;