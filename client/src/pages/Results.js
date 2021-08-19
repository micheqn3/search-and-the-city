// Results container with weather and restaurants/events components

import React from 'react';
import Weather from '../components/Weather/Weather';
import { Redirect } from 'react-router';

const Results = ( {location} ) => {

    // If no search term passed, return to home
    if (!location.state) {
        return <Redirect to="/"/>;
    } 

    return (
        <Weather search={location.state.search}/>
    )


}

export default Results;