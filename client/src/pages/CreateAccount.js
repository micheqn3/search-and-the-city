// Create account page

import React, { useState } from 'react';
import './login-create.css';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const CreateAccount = () => {

    // Set initial form state 
    const [formData, setFormData] = useState({username: '', email: '', password: ''});
    const [errorMessage, setErrorMessage] = useState('');

    // Set up mutation for adding a user
    const [addUser] = useMutation(ADD_USER);

    // Handles form change 
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    }

    // Use mutation to create new user and redirect the screen to home page
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (!formData.username || !formData.email || !formData.password) {
            setErrorMessage('Please fill out all inputs.');
            return;
        } 
        try {
            const { data } = await addUser({
                variables: formData
            })
            Auth.login(data.addUser.token);
            window.location.replace('/');
        } catch (error) {
            setErrorMessage('There was an issue with creating your account.');
        }
    }

    return (
        <div className="signin-container">
            <div className="login">
                <form onSubmit={handleFormSubmit}>
                    <div className="row">
                        <h3 className="center-align">Create An Account</h3>
                        <h6 className="center-align second-title">Start building out your trip today.</h6>
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
                            <label>Username</label>
                            <input 
                            id="userName" 
                            type="text"
                            name="username"
                            onChange={handleFormChange}
                            value={formData.username}
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
                        {errorMessage && (
                            <div>
                            <p className="red-text">{errorMessage}</p>
                            </div>
                        )}
                        <button id="signUpBtn" className="signin">Sign Up</button>
                    </div>
                </form>
            </div>
            <footer id="main-footer">Made with <i className="material-icons tiny my-heart-icon">favorite</i> by Mich</footer>
        </div>
    )
}

export default CreateAccount;