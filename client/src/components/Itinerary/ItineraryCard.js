// Displays each of the user's itineraries

import React from 'react';

const ItineraryCard = ( {item, handleDeleteItin} ) => {
    
    return (
        <div className="col s12 m4 l4">
            <div className="card">
                <div className="card-image">
                    <a href={`/itinerary/${item._id}`}><img className="responsive-img itin-img" alt="Travel" src="https://images.unsplash.com/photo-1518557984649-7b161c230cfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80&h=1400"></img></a>
                    <span className="card-title itin-card-title">{item.name}</span>
                </div>
                <div className="card-content">
                    <i onClick={() => handleDeleteItin(item._id)} className="material-icons my-drop-btn my-heart-icon clickable">delete</i>
                </div>
            </div>
        </div>
    )
}

export default ItineraryCard;