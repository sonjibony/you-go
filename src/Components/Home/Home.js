import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Yogas from '../Yogas/Yogas';
import './Home.css'
const Home = () => {
    const [yogas, setYogas] = useState([]);

    useEffect(() =>{
        fetch ('data.json')
        .then (res => res.json())
        .then (data => setYogas(data))
    }
    ,[])
    return (
        <div className='home'>
           <div className="yoga-container">
            {
                yogas.map(yoga => <Yogas 
                    key={yoga.id}
                    yoga= {yoga}
                    ></Yogas> )
            }
            </div> 
            <div className="activity-container">
                <Activity></Activity>
            </div>
        </div>
    );
};

export default Home;