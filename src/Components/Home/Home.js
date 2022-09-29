import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";
import Yogas from "../Yogas/Yogas";
import "./Home.css";
const Home = () => {
  const [yogas, setYogas] = useState([]);
  const [list, setList] = useState([]);
  const [breakTime, setBreakTime] = useState([]);

  //  storing break time and getting it back

  const handleBreakTime = (breakDuration) => {
    localStorage.setItem("break", breakDuration);
    setBreakTime(breakDuration);
  };
  useEffect(() => {
    const storeBreakTime = localStorage.getItem("break");
    setBreakTime(storeBreakTime);
  }, []);

  // fetching fake data

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setYogas(data));
  }, []);
  const handleYogaTime = (yogas) => {
    const newList = [...list, yogas];
    setList(newList);
  };
  return (
    <div>
      <h3 className="tag-line">
        Select your todays{" "}
        <span className="highlight">external and internal purifier</span>, move
        through life naturally — without stress.
      </h3>
      <div className="home">
        { /* yoga-container */ }

        <div className="yoga-container">
          {yogas.map((yoga) => (
            <Yogas
              key={yoga.id}
              yoga={yoga}
              handleYogaTime={handleYogaTime}
            ></Yogas>
          ))}
        </div>
        
        {/* activity container */}

        <div className="activity-container">
          <Activity
            list={list}
            handleBreakTime={handleBreakTime}
            breakTime={breakTime}
          ></Activity>
        </div>
      </div>
    </div>
  );
};

export default Home;
