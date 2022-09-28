import React from 'react';
import Break from '../Break/Break';

import './Activity.css'
const Activity = (props) => {
    const {list} = props;
    const {handleBreakTime} = props;
    const {breakTime} = props;
    // console.log(handleBreakTime)
    // console.log(props)
    let time = 0;
    for (const item of list){
      let  timeInt = parseInt(item.time);
        time = time + timeInt;
       
    }
    return (
        <div>
          <div className="self-info">
            <h3>Sonjibony Wahid</h3>
            <p>Dhaka, Bangladesh</p>
            </div>  
            <Break handleBreakTime= {handleBreakTime}></Break>
            <div>
           <h2>Yoga Details</h2> 
           <div className="exercise-time">
           <h4>Exercise time</h4>
    <p>  {time} minutes</p>
           </div>
           <div className="break-time">
           <h4>Break time</h4>
            <p>{breakTime} minutes</p>
            
           </div>
        
        </div>
            <button  className='btn-activity'>
            Activity Completed
           </button>
        </div>
    );
};

export default Activity;