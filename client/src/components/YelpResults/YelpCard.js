// Yelp card to hold restaurant + event data 

import React from 'react';

const YelpCard = ( {item} ) => {
    
    return (
        <div className="col s12 my-card">
            <div className="card">
                <div className="card-image">
                    <img src={item.image} alt="yelp restaurant/event"/>
                    <p className="my-tag">Rating: {item.rating}<br></br><em>{item.price ? `Price: ${item.price}` : ''}</em></p>
                </div>
                <div className="right-content">
                    <span className="card-title">{item.name}</span>
                    <div className="card-content my-card-text">
                    <p>Italian, Desserts, Breakfast + Brunch
                    </p>
                    </div>
                    <div className="card-action">
                    <a id="my-link" href={item.url}>Website</a>
                    <p className="location">{item.location}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YelpCard;
