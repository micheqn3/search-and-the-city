// Displays each of the user's itineraries

import React from 'react';

const ItineraryCard = ( {item} ) => {
    return (
        <div className="col s12 m4 l4">
            <div className="card">
                <div className="card-image">
                    <a href="#"><img className="responsive-img itin-img" src="https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80&h=1400"></img></a>
                    <span className="card-title">{item.name}</span>
                </div>
                <div className="card-content">
                    <a href="#"><i className="material-icons my-delete-icon">delete</i></a>
                </div>
            </div>
        </div>
    )
}

export default ItineraryCard;