// Displays all saved items in one itinerary

import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ONE_ITINERARY } from '../utils/queries';
import '../components/YelpResults/yelp.css';

const Itinerary = () => {

    // Retrieves ID from itinerary
    const {ID: userParam } = useParams();

    // Perform query for one itinerary and save to variable
    const { loading, data } = useQuery(GET_ONE_ITINERARY, {
        variables: {ID: userParam}
    });    

    const itinData = data?.itinerary.savedItems || {};

    if (loading) {
        return <h6>LOADING...</h6>;
    }

    return (
        <section>
            <div className="my-result-container">
                <div className="row">
                    <div className="col s12 m6 offset-m3"> 
                        <div className="row"> 
                            <div className="col s12">
                                <h5 className="center-align my-col-title">My Itinerary</h5>
                            </div>
                            <p className="center-align"> {/* If there are no saved items */}
                                {!itinData.length ? 'You have no saved items in this itinerary.' : ''}
                            </p>
                            {/* Maps through the saved items in the itinerary */}
                            {itinData.map((item, index) => {
                                return (
                                    <div className="col s12 my-card" key={index}>
                                        <div className="card">
                                            <div className="card-image">
                                                <img alt="Restaurant yelp" src={item.image}></img>
                                                <p className="my-tag">Rating<br></br><em>{item.price ? `Price: ${item.price}` : ''}</em></p>
                                            </div>
                                            <div className="right-content">
                                                <span className="card-title">{item.name}</span>
                                                <div className="card-content my-card-text">
                                                    <p>{item.categories.join(", ")}
                                                    </p>
                                                </div>
                                                <div className="card-action">
                                                    <a id="my-link" href={item.url}>Website</a>
                                                    <p className="location">{item.location}</p>
                                                    <a href="#!"><i className="material-icons my-heart-icon my-drop-btn">delete</i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div> 
                </div>
            </div> 
        </section> 
    )
}

export default Itinerary;