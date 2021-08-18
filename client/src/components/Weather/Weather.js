import React from 'react';

const Weather = () => {
    return (
        <section> 
            <div class="container">
                <div class="row">
                    <div class="col s12 center-align">
                        <h3>Your City</h3>
                        <p class="flow-text">Start building out your itinerary today.</p>
                        <hr class="my-hr"></hr>
                    </div>
                    <div class="col s6 m3">
                        <h5>Mon</h5>
                        <p>img</p>
                        <p>80 deg</p>       
                    </div>
                  
                    <div class="col s6 m3">
                        <h5>Tues</h5>
                        <p>img</p>
                        <p>80 deg</p>
                    </div>
                    <div class="col s6 m3">
                        <h5>Wed</h5>
                        <p>img</p>
                        <p>80 deg</p>
                    </div>
                    <div class="col s6 m3">
                        <h5>Thurs</h5>
                        <p>img</p>
                        <p>80 deg</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Weather;