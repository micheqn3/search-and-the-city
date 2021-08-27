import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from 'react-router';
import './css/home.css';
import { gsap } from 'gsap';

const Home = () => {

    // Use refs to store reference to DOM nodes 
    const title = useRef();
    const descrip = useRef();
    const footer = useRef();

    // Gsap animation on page load
    useEffect(() => {
        gsap.from([title.current, descrip.current], {
            opacity: 0, 
            y: 100, 
            duration: 1
        });
    },[])

    useEffect(() => {
        gsap.fromTo(footer.current,
        {autoAlpha: 0}, 
        {autoAlpha: 1, 
        duration: 1})
    },[])

    // Set initial form state 
    const [search, setSearch] = useState('');
    const [formSubmit, setFormSubmit] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');

    // Handles user input change
    const handleFormChange = (e) => {
        const value = e.target.value;
        setSearch(value);
    }

    // Redirect to search results page
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        // console.log(search);
        if (!search) {
            setErrorMessage('Please fill out all inputs.');
            return;
        }
        setFormSubmit(true);
    }

    return (
        <div className="hero-container">
            <div className="hero-img">
                <h1 ref={title} className="title">Search And The City</h1>
                <h6 ref={descrip} className="home-second-title">Planning trips, made easier.</h6>
                <form className="search-form"onSubmit={handleFormSubmit}>
                    <input 
                    type="search" 
                    id="searchbox" 
                    placeholder="Search for a city..." 
                    value={search}
                    onChange={handleFormChange}
                    />
                    <button type="submit" id="searchbtn"><i className="material-icons">search</i></button>
                    {errorMessage && (
                        <div>
                            <p className="red-text center-align">{errorMessage}</p>
                        </div>
                    )}
                </form>
            </div>
            <div ref={footer} className="footer-descrip">
                <p>
                    Get current weather, best restaurants, and local events for your travel needs.
                </p>
            </div>
             {/* On form submit, send search to results component */}
             {formSubmit && (
                <Redirect to={{
                    pathname: '/results',
                    state: { search: search }
                }}></Redirect>
            )}
        </div>
    )
}

export default Home;