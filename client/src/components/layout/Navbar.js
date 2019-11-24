import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar bg-dark">
                <h1>
                    <Link to="/"><i className="fas fa-ticket-alt"></i> Fables Cinema</Link>
                </h1>
                <ul>
                    <li><Link to="/movies">Movies</Link></li>
                    <li><Link to="/login">Employee Login</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar