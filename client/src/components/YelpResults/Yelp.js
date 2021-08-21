// Displays restaurants and events in the area 

import React, { useEffect, useState } from 'react';
import { getYelp } from '../../utils/API';
import './yelp.css';
import YelpCard from './YelpCard';
import { getSavedIds } from '../../utils/localStorage'; // test

const Yelp = ( {search} ) => {

    // Set up initial state that holds api results for restaurant and events
    const [searchedRest, setSearchedRest] = useState([]);
    const [searchedEvents, setSearchedEvents] = useState([]);
    const [allItems, setAllItems] = useState([]);

    // Retrieves saved IDs from local storage
    const [savedIds, setSavedIds] = useState(getSavedIds()); 

    // Retrives restaurant and event data from yelp and saves to state
    const retrieveYelpData = async () => {
        try {
            const [initialRest, initialEvent] = await Promise.all([
                getYelp(search),
                getYelp(search, 'tourist')
            ])

            const newRestData = initialRest.data.businesses.map((item) => ({
                yelpID: item.id,
                name: item.name,
                image: item.image_url,
                url: item.url,
                location: item.location.address1,
                rating: item.rating,
                categories: item.categories.map(item => item.title),
                price: item.price,
            }));

            const newEventData = initialEvent.data.businesses.map((item) => ({
                yelpID: item.id,
                name: item.name,
                image: item.image_url,
                url: item.url,
                location: item.location.address1,
                rating: item.rating,
                categories: item.categories.map(item => item.title)
            }))

            setSearchedRest(newRestData);
            setSearchedEvents(newEventData);
            setAllItems([...newRestData, ...newEventData]);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
       retrieveYelpData()
    },[])

    return (
        <section>
            <div className="my-result-container">
                <div className="row">
                { /* Left column */}
                    <div className="col s12 m6">
                        <div className="row">
                            <div className="col s12">
                                <h5 className="center-align my-col-title">Top Restaurants</h5>
                            </div>
                            {searchedRest.length ? searchedRest.map((item, index) => <YelpCard item={item} key={index} allItems={allItems} savedIds={savedIds} setSavedIds={setSavedIds}/>) 
                            : <h6 className="center-align">No restaurant data found.</h6>}
                        </div>
                    </div>
                    { /* Right column */}
                    <div className="col s12 m6">
                        <div className="row">
                            <div className="col s12">
                                <h5 className="center-align my-col-title">Things To Do</h5>
                            </div>
                            {searchedEvents.length ? searchedEvents.map((item, index) => <YelpCard item={item} key={index} allItems={allItems} savedIds={savedIds} setSavedIds={setSavedIds}/>) 
                            : <h6 className="center-align">No event data found.</h6>}
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    )
}

export default Yelp;