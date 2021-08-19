// API helpers

export const getWeather = (query) => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
}
 