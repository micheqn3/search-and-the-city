// Nav bar component on all pages

import React from 'react';
import './nav.css';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav id='my-nav'> 
                <div className="nav-wrapper">
                    <ul>
                        <li><a href="!#" className="nav-tab travlr black-text"><i className="material-icons left">location_on</i>Home</a></li>
                        {Auth.loggedIn() ? (
                            <>
                            <li><a href="!#" className="nav-tab black-text">Itinerary</a></li>
                            <li><a onClick={Auth.logout} href="!#" className="nav-tab black-text">Log Out</a></li>
                            </>
                        ) : (
                            <Link to="/login"><li><a href="!#" className="nav-tab black-text">Log In</a></li></Link>
                        )}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav;