import React, { useState, useEffect } from 'react';
import { getWeather } from '../../utils/API';
import WeatherCard from './WeatherCard';
import './weather.css';

const Weather = ( {search} ) => {

    // Set initial state of weather data
    const [data, setData] = useState([]);

    // On component load, display all data
    useEffect(() => {
        displayAllWeather();
    }, []);

    // Retrieves 4 day weather from API and sets as state
    const displayAllWeather = async () => {
        try {
            const response = await getWeather(search);

            // Filter API response to 4 day data at 6:00 and convert from unix time to regular time
            const fourDayData = await response.data.list.filter(weather => weather.dt_txt.includes("18:00:00")).slice(0, -1).map((item) => ({
                date: new Date(item.dt * 1000).toLocaleString("en-US", {weekday: "long"}),
                temp: item.main.temp,
                image: item.weather[0].id,
                description: item.weather[0].description,
            }))
            setData(fourDayData);
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section> 
            <div className="container">
                <div className="row">
                    <div className="col s12 center-align">
                        <h3 className="my-uppercase">{data.length ? search : ''}</h3>
                        <p className="flow-text">Start building out your itinerary today.</p>
                        <hr className="my-hr"></hr>
                    </div>
                    {data.length ? data.map((item, index) => <WeatherCard item={item} key={index} />) 
                    : <h6 className="center-align">No weather results found.</h6>}
                </div>
            </div>
        </section>
    )
}

export default Weather;