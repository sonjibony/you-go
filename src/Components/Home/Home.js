import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Yogas from '../Yogas/Yogas';
import './Home.css'
const Home = () => {
    const [yogas, setYogas] = useState([]);
    const [list, setList] = useState([]);
    const [breakTime, setBreakTime] = useState([]);
    
    const handleBreakTime = (breakDuration) =>{
       localStorage.setItem('break', breakDuration);
       setBreakTime(breakDuration);
    }

    // let value =e.target.innerText;

    // const handleBreakTime = (e, breakDuration) =>{
    //     console.log(value)
    //     localStorage.setItem('break', breakDuration);
    //    setBreakTime(breakDuration);
    // }
    useEffect(() => {
        const storeBreakTime = localStorage.getItem('break');
        setBreakTime(storeBreakTime);
    },[])
    useEffect(() =>{
        fetch ('data.json')
        .then (res => res.json())
        .then (data => setYogas(data))
    }
    ,[])
    const handleYogaTime =(yogas) =>{
        //console.log(yogas);
        const newList = [...list, yogas];
        setList(newList);

    }
    return (
        <div className='home'>
           <div className="yoga-container">
            {
                yogas.map(yoga => <Yogas 
                    key={yoga.id}
                    yoga= {yoga}
                    handleYogaTime={handleYogaTime}
                    ></Yogas> )
            }
            </div> 
            <div className="activity-container">
                <Activity 
                list={list}
                handleBreakTime ={handleBreakTime}
                breakTime ={breakTime}
                
                
                ></Activity>
                
            </div>
        </div>
    );
};

export default Home;