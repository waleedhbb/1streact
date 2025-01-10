import React from 'react';
import '../Counter.css';

function Header({ setDuration, resetTimer }) {
    return (
        <div className="main-header">  
            <ul>
                <li><button onClick={() => setDuration(10)}>10 Seconds</button></li>             
                <li><button onClick={resetTimer}>Reset</button></li>
                <li><button onClick={() => setDuration(60)}>1 Minute</button></li>
            </ul>
        </div>
    );
}

export default Header;
