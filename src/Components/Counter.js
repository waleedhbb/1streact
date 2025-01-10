import React, { useState, useEffect } from "react";
import "../Counter.css";
import Header from "./Header";

function Counter() {
    const [count, setCount] = useState(0);
    const [timeLeft, setTimeLeft] = useState(5);
    const [isActive, setIsActive] = useState(false);
    const [duration, setDuration] = useState(5);

    const handleClick = () => {
        if (!isActive) {
            setIsActive(true);
        }
        setCount(count + 1);
    };

    const resetTimer = () => {
        setIsActive(false);
        setCount(0);
        setTimeLeft(duration);
    };
const UpdateDuration = (newDuration) => {
setDuration(newDuration);
setCount(0);
setTimeLeft(newDuration);
setIsActive(false);
}
    useEffect(() => {
        setTimeLeft(duration);
    }, [duration]);

    useEffect(() => {
        let timer;
        if (isActive && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            clearInterval(timer);
            setIsActive(false);
        }
        return () => clearInterval(timer);
    }, [isActive, timeLeft]);

    const cps = (count / duration).toFixed(2);

    return (
        <>      
            <Header setDuration={UpdateDuration} resetTimer={resetTimer} />
            <div className="counter_parent">
                <div className="main-div">
                    <h3>Click Per Second (CPS) Test</h3>
                    <button onClick={handleClick} disabled={timeLeft === 0}>
                        {timeLeft > 0 ? `Clicks: ${count}` : `Test finished! CPS: ${cps}`}
                    </button>
                    <p>{timeLeft > 0 ? `Time left: ${timeLeft}s` : <button id="again" onClick={resetTimer}>Try again!</button>}</p>
                </div>
            </div>
        </>
    );
}

export default Counter;
