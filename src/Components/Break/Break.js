import React from 'react';
import './Break.css';
const Break = () => {
    return (
        <div className="break-time">
                <h2>Add A Break</h2>
                <div className="break-field">
                    <button className='btn-break'>1m</button>
                    <button className='btn-break'>3m</button>
                    <button className='btn-break'>5m</button>
                    <button className='btn-break'>10m</button>
                    <button className='btn-break'>30m</button>
                </div>
            </div>
    );
};

export default Break;