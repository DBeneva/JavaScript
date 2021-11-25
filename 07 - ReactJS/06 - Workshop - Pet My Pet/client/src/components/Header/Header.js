import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = ({
    isAuthenticated,
    user
}) => {
    const userNavigation = (
        <div id="user">
            <span>Welcome, {user}</span>
            <NavLink className="button" to="/my-pets">My Pets</NavLink>
            <NavLink className="button" to="/create">Add Pet</NavLink>
            <NavLink className="button" to="#">Logout</NavLink>
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
                    {isAuthenticated
                        ? userNavigation
                        : guestNavigation
                    }
                </section>
            </nav>
        </header>
    );
};

export default Header;