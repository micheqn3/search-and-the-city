// Modal for creating new itineraries 

import React, { useState } from 'react';
import { ADD_ITINERARY } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import M from 'materialize-css/dist/js/materialize.min.js';
import './createModal.css';

const CreateModal = () => {

    // Set initial form data state and mutation
    const [formData, setFormData] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [addItinerary] = useMutation(ADD_ITINERARY);

    // Handles input change 
    const handleInputChange = (e) => {
        setFormData(e.target.value);
    }

    // Handles creating new itinerary using mutation
    const handleFormSubmit = async () => {
        if (!formData) {
            setErrorMessage('Please fill all values.');
        }

        // Checks for user authentication
        const token = Auth.loggedIn() ? Auth.getToken() : null;
        if (!token) {
            return false;
        }
        
        try {
            const { data } = await addItinerary({
                variables: {
                    name: formData
                }
            })
            setFormData('');
            M.toast({html: 'Itinerary created!'});
            setTimeout(() => {window.location.reload()}, 1000);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div id="modal1" className="modal">
            <div className="modal-content center-align">
                <h4>New Itinerary</h4>
                <div className="input-field col s12 l6 offset-l3">
                    <input 
                    placeholder="Name" 
                    type="text" 
                    className="center-align"
                    onChange={handleInputChange}
                    value={formData}
                    />
                    <a onClick={handleFormSubmit} className="waves-effect waves-light btn-flat"><i className="material-icons right">add</i>Add</a>
                    {errorMessage && (
                        <div>
                            <p className="red-text">{errorMessage}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CreateModal;