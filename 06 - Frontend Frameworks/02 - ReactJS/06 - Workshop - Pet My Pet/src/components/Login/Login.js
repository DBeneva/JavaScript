import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import { useNotificationContext, types } from '../../contexts/NotificationContext';
import * as authService from '../../services/authService';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuthContext();
    const { addNotification } = useNotificationContext();

    const onLoginHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');

        authService.login(email, password)
            .then((authData) => {
                login(authData);
                addNotification('You logged in successfully', types.success);
                navigate('/dashboard');
            })
            .catch(err => {
                // TODO: show notification
                console.log(err);
            });
    };

    return (
        <section id="login-page">
            <form id="login-form" action="" method="POST" onSubmit={onLoginHandler}>
                <fieldset>
                    <legend>Login Form</legend>
                    <p className="field">
                        <label htmlFor="email">Email</label>
                        <span className="input">
                            <input type="text" name="email" id="email" placeholder="Email" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password" />
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Login" />
                </fieldset>
            </form>
        </section>
    );
}

export default Login;