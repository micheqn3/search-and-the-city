// Weather card to hold 4 day data 

import React from 'react';

const WeatherCard = ( {item} ) => {

    // Open weather symbol
    const OWImage = `owf owf-${item.image} owf-4x my-weather-icon`;

    return (
        <div className="col s6 m3">
            <h5>{item.date}</h5>
            <i className={OWImage}></i>
            <p>{item.temp} °F</p>    
            <p className="my-uppercase">{item.description}</p>   
        </div>
    )
}

export default WeatherCard;