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
                        <Link to="/" className="nav-tab travlr black-text"><i className="material-icons left">location_on</i>Home</Link>
                        {Auth.loggedIn() ? (
                            <>
                            <Link to="/itineraries" className="nav-tab black-text"><li>Itinerary</li></Link>
                            <li><a onClick={Auth.logout} href="/" className="nav-tab black-text">Log Out</a></li>
                            </>
                        ) : (

                            <Link to="/login" className="nav-tab black-text"><li>Log In </li></Link>
                        )}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav;