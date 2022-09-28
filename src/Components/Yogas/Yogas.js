import React from 'react';
import './Yogas.css'
const Yogas = (props) => {
    const {name, img, time} = props.yoga;
    const {handleYogaTime} = props;
    //console.log(props)
    return (
        <div className='yoga-card'>
            <img src= {img} ></img>
          <div className="yoga-info">
          <h2>{name} </h2>
          <p>Duration: {time} minutes</p>
          </div>
          <button onClick={() => handleYogaTime(props.yoga)} className='btn-add'>Add to list</button>
        </div>
    );
};

export default Yogas;