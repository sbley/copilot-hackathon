import React, { useState, useEffect } from 'react';
import './CoffeeTimer.css';

const CoffeeTimer = () => {
    const [time, setTime] = useState(null);
    const [timerOn, setTimerOn] = useState(false);

    useEffect(() => {
        let interval = null;

        if (timerOn && time !== null) {
            interval = setInterval(() => {
                if (time > 0) {
                    setTime(prevTime => prevTime - 1);
                } else {
                    alert('Time is up!');
                    clearInterval(interval);
                    setTimerOn(false); // Reset the timer
                }
            }, 1000);
        } else if (!timerOn || time === null) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [timerOn, time]);

    return (
        <div>
            <h2>Coffee Break Timer</h2>
            <div>
                <button className="button" onClick={() => setTime(300)}>5 min</button>
                <button className="button" onClick={() => setTime(600)}>10 min</button>
            </div>
            <div>
                <button className="button" onClick={() => setTimerOn(true)} disabled={time === null || timerOn}>Start</button>
            </div>
            <h3>{time !== null ? `${Math.floor(time / 60)}:${time % 60 < 10 ? `0${time % 60}` : time % 60}` : 'Please select a time range'}</h3>
        </div>
    );
};

export default CoffeeTimer;
