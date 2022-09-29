import React from 'react';
import Break from '../Break/Break';
import Swal from 'sweetalert2'

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
    const alert =() =>{
        Swal.fire(
            'Good job!',
            'You have completed all of the activities!',
            'success'
          )
          
    }

    return (
        <div>
            <div>
          <div className="self-info">
            <img src="https://cdn-icons-png.flaticon.com/512/4139/4139951.png" alt="" />
            <div>
            <h3>Sonjibony Wahid</h3>
            <p>Dhaka, Bangladesh</p>
</div>
            </div>
            <div className="info-field">
                <h4>Female</h4>
                <h4>20yrs</h4>
                <h4>Yoga Lover</h4>
            </div>
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
            <button onClick={alert}  className='btn-activity'>
            Activity Completed
           </button>
        </div>
    );
};

export default Activity;