// API helpers for OpenWeather and Yelp API

import axios from 'axios';

// Retrieve openweather data 
export const getWeather = (query) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
}

// Retrieves restaurant data or event data based on params
export const getYelp = (search, tourism) => {
    return axios.get(`${'https://cors-git.herokuapp.com/'}https://cors-git.herokuapp.com/https://api.yelp.com/v3/businesses/search`, {
        headers: {
            Authorization : `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
        },
        params: {
            location: search,
            categories: tourism ? '' : 'restaurants',
            sort_by: 'review_count',
            limit: 6,
            term: tourism ? tourism : ''
        }
    });
}