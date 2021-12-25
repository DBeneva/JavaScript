import { useState, useContext, createContext, useCallback } from 'react';

export const NotificationContext = createContext();

export const types = {
    error: 'error',
    warn: 'warn',
    info: 'info',
    success: 'success'
};

const initialNotificationState = { show: false, message: '', error: types.error };

export const NotificationProvider = ({
    children
}) => {
    const [notification, setNotification] = useState(initialNotificationState);

    const addNotification = useCallback((message, type = type.error) => {
        setNotification({ show: true, message, type });

        setTimeout(() => {
            setNotification(initialNotificationState);
        }, 2000);
    }, []);

    const hideNotification = useCallback(() => setNotification(initialNotificationState));

    return (
        <NotificationContext.Provider value={{ notification, addNotification, hideNotification }}>
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotificationContext = () => {
    const state = useContext(NotificationContext);

    return state;
};