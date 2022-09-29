import React from 'react';
import './Break.css';
const Break = ({handleBreakTime}) => {
    return (
        <div>
                <h2>Add A Break</h2>
                {/* <div className="break-field">
                <button onClick={handleBreakTime} className='btn-break'>1m</button>
                <button onClick={handleBreakTime} className='btn-break'>5m</button>
                <button onClick={handleBreakTime} className='btn-break'>10m</button>
                <button onClick={handleBreakTime} className='btn-break'>40m</button> */}

                    <button onClick={() => handleBreakTime(1)} className='btn-break'>1m</button>
                    <button onClick={() => handleBreakTime(3)} className='btn-break'>3m</button>
                    <button onClick={() => handleBreakTime(5)} className='btn-break'>5m</button>
                    <button onClick={() => handleBreakTime(10)} className='btn-break'>10m</button>
                    <button onClick={() => handleBreakTime(30)} className='btn-break'>30m</button>
                </div>
            
    );
};

export default Break;