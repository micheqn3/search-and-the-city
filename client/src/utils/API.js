// API helpers for OpenWeather and Yelp API

import axios from 'axios';

export const getWeather = (query) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
}
 
export const getRestaurants = (search) => {
    return axios.get(`${'https://cors-git.herokuapp.com/'}https://cors-git.herokuapp.com/https://api.yelp.com/v3/businesses/search`, {
        headers: {
            Authorization : `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
        },
        params: {
            location: search,
            categories: 'restaurants',
            sort_by: 'review_count',
            limit: 6
        }
    });
}