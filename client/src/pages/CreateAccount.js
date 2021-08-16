// Create account page

import React from 'react';
import './login-create.css'

const CreateAccount = () => {
    return (
        <div className="signin-container">
            <div className="login">
                <form>
                    <div className="row">
                        <h3 className="center-align">Create An Account</h3>
                        <h6 className="center-align second-title">Start building out your trip today.</h6>
                    </div>
                    <div className="row">
                        <div className="input-field">
                            <label>Email</label>
                            <input id="email" type="text"/>
                        </div>
                        <div className="input-field">
                            <label>Username</label>
                            <input id="userName" type="text"/>
                        </div>
                        <div className="input-field">
                            <label>Password</label>
                            <input id="password" type="password"/>
                        </div>
                        <button id="signUpBtn" className="signin">Sign Up</button>
                    </div>
                </form>
            </div>
            <footer id="main-footer">Made with <i className="material-icons tiny my-heart-icon">favorite</i> by Mich</footer>
        </div>
    )
}

export default CreateAccount;