// Log in page 

import React from 'react';
import './login-create.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="signin-container">
            <div className="login">
                <form>
                    <div className="row">
                        <h3 className="center-align">Log In</h3>
                        <h6 className="center-align second-title">Start discovering new places today.</h6>
                    </div>
                    <div className="row">
                        <div className="input-field">
                            <label>Username</label>
                            <input id="userName" type="text"/>
                        </div>
                        <div className="input-field">
                            <label>Password</label>
                            <input id="password" type="password"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 l6 offset-l3">
                            <button id="signIn" className="signin">Sign In</button>
                        </div>
                    </div>
                </form>
                <Link to="/createaccount"><a href="!#" className="create">Create An Account</a></Link>
            </div>
            <footer id="main-footer">Made with <i className="material-icons tiny my-heart-icon">favorite</i> by Mich</footer>
        </div>
    )
}

export default Login;