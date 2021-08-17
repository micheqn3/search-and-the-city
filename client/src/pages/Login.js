// Log in page 

import React, { useState } from 'react';
import './login-create.css';
import { Link, Redirect } from 'react-router-dom';
import { LOGIN_USER } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';

const Login = () => {

    // Set initial form state 
    const [formData, setFormData] = useState({email: '', password: ''});
    const [errorMessage, setErrorMessage] = useState('');

    // Set up mutation for logging in user
    const [logInUser] = useMutation(LOGIN_USER);

    // Handles form change
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    }

    // Use mutation to log in user and redirect screen to homepage
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        if (!formData.password || !formData.email) {
            setErrorMessage('Please fill out all inputs.');
            return;
        }
        try {
            const { data } = await logInUser({
                variables: formData
            })
            Auth.login(data.login.token);
            window.location.replace('/');
        } catch (error) {
            setErrorMessage('There was an issue in logging you in.');
        }
    }

    // If user is already logged in, redirect to home
    if (Auth.loggedIn()) {
        return <Redirect to="/"/>
    }
    
    return (
        <div className="signin-container">
            <div className="login">
                <form onSubmit={handleFormSubmit}>
                    <div className="row">
                        <h3 className="center-align">Log In</h3>
                        <h6 className="center-align second-title">Start discovering new places today.</h6>
                    </div>
                    <div className="row">
                        <div className="input-field">
                            <label>Email</label>
                            <input 
                            id="email" 
                            type="text"
                            name="email"
                            onChange={handleFormChange}
                            value={formData.email}
                            />
                        </div>
                        <div className="input-field">
                            <label>Password</label>
                            <input 
                            id="password" 
                            type="password"
                            name="password"
                            onChange={handleFormChange}
                            value={formData.password}
                            />
                        </div>
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="red-text">{errorMessage}</p>
                        </div>
                    )}
                    <div className="row">
                        <div className="col s12 l6 offset-l3">
                            <button id="signIn" className="signin">Sign In</button>
                        </div>
                    </div>
                </form>
                <Link to="/createaccount" className="create">Create An Account</Link>
            </div>
            <footer id="main-footer">Made with <i className="material-icons tiny my-heart-icon">favorite</i> by Mich</footer>
        </div>
    )
}

export default Login;