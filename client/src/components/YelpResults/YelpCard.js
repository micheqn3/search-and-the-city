// Yelp card to hold restaurant + event data 

import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const YelpCard = ( {item} ) => {

    // Init all dropdowns
    useEffect(() => {
        M.AutoInit();
      },[])

    const handleClick = (yelpID, itin) => {
    console.log(yelpID)
    console.log(itin)
    }
    
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
                    <p>{item.categories.join(", ")}
                    </p>
                    </div>
                    <div className="card-action">
                    <a id="my-link" href={item.url}>Website</a>
                    <a>{item.yelpID}</a>
                    <p className="location">{item.location}</p>

                    <a className='dropdown-trigger my-drop-btn' href='#' data-target={'dropdown1' + item.yelpID}><i className="material-icons my-heart-icon">favorite</i></a>
                    <ul id={'dropdown1' + item.yelpID} className='dropdown-content'>
                        <li className="divider" tabIndex="-1"></li>
                        <li onClick={() => {handleClick()}}><i className="material-icons my-heart-icon center-align">add</i></li>
                        <li onClick={() => {handleClick(item.yelpID, 'palm springs')}}><p className="black-text center-align">Palm Springs {item.yelpID}</p></li>
                    </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default YelpCard;
