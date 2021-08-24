// Displays all of user's itineraries

import React from 'react';
import Auth from '../utils/auth';
import { Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_MY_ITINERARIES } from '../utils/queries';
import ItineraryCard from '../components/Itinerary/ItineraryCard';
import './itineraries.css';

const Itineraries = () => {

    // Set up query to retrieve user's itineraries
    const { data, loading } = useQuery(GET_MY_ITINERARIES);
    const userData = data?.myItineraries || {};

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
                {userData.length ? userData.map((item, index) => <ItineraryCard item={item} key={index} />)
                : <h5 className="center-align">You don't have any itineraries.</h5>}
            </div>
        </section>
    ) 
}

export default Itineraries;