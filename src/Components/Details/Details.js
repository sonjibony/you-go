import React from 'react';
import './Details.css'
const Details = () => {
    return (
        <div>
           <h2>Yoga Details</h2> 
           <div className="exercise-time">
           <h4>Exercise time</h4>
            <p>00 minutes</p>
           </div>
           <div className="break-time">
           <h4>Break time</h4>
            <p>00 minutes</p>
           </div>
           <button className='btn-activity'>
            Activity Completed
           </button>
        </div>
    );
};

export default Details;