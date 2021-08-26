// API helpers for OpenWeather and Yelp API

import axios from 'axios';

// Retrieve openweather data 
export const getWeather = (query) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
}

// Retrieves restaurant data or event data based on params
export const getYelp = (search, category, filter) => {
    return axios.get(`${process.env.REACT_APP_YELP_URL}`, {
        headers: {
            Authorization : `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
        },
        params: {
            location: search,
            categories: category === 'event' ? '' : 'restaurants',
            sort_by: filter ? filter : 'review_count',
            limit: 6,
            term: category === 'event' ? 'tourist' : ''
        }
    });
}
