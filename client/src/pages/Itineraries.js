// Displays all of user's itineraries

import React, { useState } from 'react';
import Auth from '../utils/auth';
import { Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_MY_ITINERARIES } from '../utils/queries';

const Itineraries = () => {

    // Set up initial state of itineraries
    const [itineraries, setItineraries] = useState([]);

    // Set up query to retrieve user's itineraries
    const { data, loading } = useQuery(GET_MY_ITINERARIES);
    const userData = data?.myItineraries || {};
    setItineraries(userData);

    // If user is not logged in, go to search page
    if (!Auth.loggedIn()) {
        return <Redirect to="/"/>
    }

    if (loading) {
        return <h6>LOADING...</h6>;
    }

    return (
        <section>
            <div className="row">
                <h5 className="center-align">My Itineraries</h5>
            </div>
        </section>
    ) 
}

export default Itineraries;