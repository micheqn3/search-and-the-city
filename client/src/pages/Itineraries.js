// Displays all of user's itineraries

import React from 'react';
import Auth from '../utils/auth';
import { Redirect } from 'react-router-dom';

const Itineraries = () => {

    // If user is not logged in, go to search page
    if (!Auth.loggedIn()) {
        return <Redirect to="/"/>
    }

    return (
        <div className="container">
            <h5 className="center-align">Example</h5>
        </div>
    ) 
}

export default Itineraries;