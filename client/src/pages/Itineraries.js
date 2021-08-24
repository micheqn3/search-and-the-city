// Displays all of user's itineraries

import React, { useEffect } from 'react';
import Auth from '../utils/auth';
import { Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_MY_ITINERARIES } from '../utils/queries';
import ItineraryCard from '../components/Itinerary/ItineraryCard';
import './itineraries.css';
import CreateModal from '../components/Modal/CreateModal';
import M from 'materialize-css/dist/js/materialize.min.js';

const Itineraries = () => {

    // Init modal
    useEffect(() => {
        M.AutoInit();
    })

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
                <div className="col s12">
                    <h5 className="center-align">My Itineraries</h5>
                </div>
                <div className="container">
                    <div className="col s12 right-align">
                        <i className="material-icons my-heart-icon">add</i><a className="center-align modal-trigger black-text" href="#modal1">New Itinerary</a>
                    </div>
                </div>
                {userData.length ? userData.map((item, index) => <ItineraryCard item={item} key={index} />)
                : <div className="container"><h5 className="center-align">You don't have any itineraries.</h5></div>}
            </div>
            <CreateModal/> {/* Modal for creating new itineraries */}
        </section>
    ) 
}

export default Itineraries;