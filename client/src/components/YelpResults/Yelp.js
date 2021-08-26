// Displays restaurants and events in the area 

import React, { useEffect, useState } from 'react';
import { getYelp } from '../../utils/API';
import './yelp.css';
import YelpCard from './YelpCard';
import { getSavedIds } from '../../utils/localStorage'; 
import { ADD_SAVED_ITEM } from '../../utils/mutations';
import M from 'materialize-css/dist/js/materialize.min.js';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';

const Yelp = ( {search} ) => {

    // Set up initial state that holds api results for restaurant and events
    const [searchedRest, setSearchedRest] = useState([]);
    const [searchedEvents, setSearchedEvents] = useState([]);
    const [allItems, setAllItems] = useState([]);
    const [loading, setLoading] = useState(true);

    // Set up mutation to add restaurant/event
    const [addItem] = useMutation(ADD_SAVED_ITEM);

    // Retrieves saved IDs from local storage
    const [savedIds, setSavedIds] = useState(getSavedIds()); 

    // On component load, start api call based on user search and set state of items
    useEffect(() => {
        retrieveYelpData()
    },[])

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
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    // Saves restaurant/event data to user's choice of itinerary
    const handleSaveItem = async (yelpID, itin) => {
        const item = allItems.find((item => item.yelpID === yelpID));
        
        // Checks for user authentication
        const token = Auth.loggedIn() ? Auth.getToken() : null;
        if (!token) {
            return false;
        }

        try {
            const { data } = await addItem({
                variables: {
                    yelpID: item.yelpID,
                    name: item.name,
                    image: item.image,
                    url: item.url,
                    location: item.location,
                    rating: item.rating,
                    categories: item.categories,
                    price: item.price,
                    itinName: itin
                }
            })
            setSavedIds([...savedIds, item.yelpID]);
            console.log(data);
            M.toast({html: 'Saved!'});
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <> {/* Display preloader if still waiting for api data*/}
        {loading ? 
        (<div className="container center-align">
            <div class="preloader-wrapper big active">
                <div class="spinner-layer spinner-blue-only">
                    <div class="circle-clipper left">
                        <div class="circle"></div>
                    </div><div class="gap-patch">
                        <div class="circle"></div>
                    </div><div class="circle-clipper right">
                        <div class="circle"></div>
                    </div>
                </div>
            </div>
        </div>
        ) : 
        (<section> {/* Map through api data and siplay searched restaurants + events and pass in savedIds and handleSaveItem function */}
            <div className="my-result-container">
                <div className="row">
                { /* Left column */}
                    <div className="col s12 m6">
                        <div className="row">
                            <div className="col s12">
                                <h5 className="center-align my-col-title">Top Restaurants</h5>
                            </div>
                            {searchedRest.length ? searchedRest.map((item, index) => <YelpCard item={item} key={index} savedIds={savedIds} handleSaveItem={handleSaveItem}/>) 
                            : <h6 className="center-align">No restaurant data found.</h6>}
                        </div>
                    </div>
                    { /* Right column */}
                    <div className="col s12 m6">
                        <div className="row">
                            <div className="col s12">
                                <h5 className="center-align my-col-title">Things To Do</h5>
                            </div>
                            {searchedEvents.length ? searchedEvents.map((item, index) => <YelpCard item={item} key={index} savedIds={savedIds} handleSaveItem={handleSaveItem}/>) 
                            : <h6 className="center-align">No event data found.</h6>}
                        </div>
                    </div>
                </div>
            </div>
        </section> )}
        </>
    )
}

export default Yelp;