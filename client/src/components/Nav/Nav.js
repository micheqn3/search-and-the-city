// Nav bar component on all pages

import React from 'react';
import './nav.css'

const Nav = () => {
    return (
        <div>
            <nav id='my-nav'> 
                <div className="nav-wrapper">
                    <ul>
                        <li><a href="!#" className="nav-tab travlr black-text"><i className="material-icons left">location_on</i>Home</a></li>
                        <li><a href="!#" className="nav-tab black-text">Itinerary</a></li>
                        <li><a href="!#" className="nav-tab black-text">Log in</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav;