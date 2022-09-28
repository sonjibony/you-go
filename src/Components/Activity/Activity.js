import React from 'react';
import Break from '../Break/Break';
import Details from '../Details/Details';
import './Activity.css'
const Activity = () => {
    return (
        <div>
          <div className="self-info">
            <h3>Sonjibony Wahid</h3>
            <p>Dhaka, Bangladesh</p>
            </div>  
            <Break></Break>
            <Details></Details>
        </div>
    );
};

export default Activity;