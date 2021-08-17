import React from 'react';
import './home.css'

const Home = () => {
    return (
        <div className="hero-container">
            <div className="hero-img">
                <h1 className="title">Search And The City</h1>
                <h6 className="home-second-title">Planning trips, made easier.</h6>
                <form>
                    <input type="search" id="searchbox" placeholder="Search for a city..." />
                    <button type="submit" id="searchbtn"><i className="material-icons">search</i></button>
                </form>
            </div>
            <div className="footer-descrip">
                <p>
                    Get current weather, best restaurants, and local events for your travel needs.
                </p>
            </div>
        </div>
    )
}

export default Home;