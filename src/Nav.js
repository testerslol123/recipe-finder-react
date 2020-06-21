import React from 'react';
import {
    NavLink
} from 'react-router-dom';

const Nav = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
        <NavLink to="/" className="navbar-brand">
            Recipe Site    
        </NavLink>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item active">
                <NavLink className="nav-link" to="/" activeClassName="active">
                    Home
                </NavLink>
            </li>
            <li class="nav-item">
                <NavLink className="nav-link" to="/about" activeClassName="active">
                    About
                </NavLink>
            </li>
            </ul>
        </div>
        </nav>

    )
}

export default Nav;