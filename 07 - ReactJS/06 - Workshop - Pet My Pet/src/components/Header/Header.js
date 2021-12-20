import { NavLink } from 'react-router-dom';
import './Header.css';
import { useAuthContext } from '../../contexts/AuthContext';

const Header = () => {
    const { user } = useAuthContext();
    console.log(user.email);
    
    const userNavigation = (
        <div id="user">
            <span>Welcome, {user.email}</span>
            <NavLink className="button" to="/my-pets">My Pets</NavLink>
            <NavLink className="button" to="/create">Add Pet</NavLink>
            <NavLink className="button" to="/logout">Logout</NavLink>
        </div>
    );
    const guestNavigation = (
        <div id="guest">
            <NavLink className="button" to="/login">Login</NavLink>
            <NavLink className="button" to="/register">Register</NavLink>
        </div>
    );

    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <NavLink to="/dashboard">Dashboard</NavLink>
                    {user.email
                        ? userNavigation
                        : guestNavigation
                    }
                </section>
            </nav>
        </header>
    );
};

export default Header;