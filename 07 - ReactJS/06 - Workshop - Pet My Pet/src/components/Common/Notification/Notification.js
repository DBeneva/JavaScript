import { useNotificationContext } from '../../../contexts/NotificationContext'

const Notification = () => {
    const { notification, hideNotification } = useNotificationContext();

    if (!notification.show) {
        return null;
    }

    return (
        <>
            <button onClick={hideNotification}>X</button>
            <h3>Message: {notification.message}</h3>
        </>
    );
};

export default Notification;