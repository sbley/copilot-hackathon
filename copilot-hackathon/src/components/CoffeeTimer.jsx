import React, { useState, useEffect } from 'react';
import './CoffeeTimer.css';

const CoffeeTimer = () => {
    const [time, setTime] = useState(null);
    const [timerOn, setTimerOn] = useState(false);
    const [timeSelected, setTimeSelected] = useState(false);

    const selectTime = (time) => {
        setTime(time);
        setTimeSelected(true);
    };

    useEffect(() => {
        let interval = null;

        if (timerOn && time !== null) {
            interval = setInterval(() => {
                if (time > 0) {
                    setTime(prevTime => prevTime - 1);
                } else {
                    alert('Time is up!');
                    setTimeout(() => {
                        clearInterval(interval);
                        setTimerOn(false);
                        setTimeSelected(false);
                    }, 0);
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
                <button className="button" onClick={() => selectTime(60)}>1 min</button>
                <button className="button" onClick={() => selectTime(300)}>5 min</button>
                <button className="button" onClick={() => selectTime(600)}>10 min</button>
            </div>
            <div>
                <button className="button" onClick={() => setTimerOn(true)} disabled={!timeSelected || timerOn}>Start</button>
            </div>
            <h3>{time !== null ? `${Math.floor(time / 60)}:${time % 60 < 10 ? `0${time % 60}` : time % 60}` : 'Please select a time range'}</h3>
        </div>
    );
};

export default CoffeeTimer;
