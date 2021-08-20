// Modal for creating new itineraries 

import React from 'react';

const CreateModal = () => {

    return (
        <div id="modal1" className="modal">
            <div className="modal-content center-align">
                <h4>New Itinerary</h4>
                <div className="input-field col s12 l6 offset-l3">
                    <input placeholder="Name" type="text" className="validate center-align"></input>
                    <a className="waves-effect waves-light btn-flat"><i className="material-icons right">add</i>Add</a>
                </div>
            </div>
        </div>
    )
}

export default CreateModal;