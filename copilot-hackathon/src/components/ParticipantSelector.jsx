import React, { useState } from 'react';
import './ParticipantSelector.css';

const ParticipantSelector = () => {
    const [names, setNames] = useState('');
    const [selectedName, setSelectedName] = useState('');

    const selectName = () => {
        let nameArray = names.split(',').map(name => name.trim());
        let randomIndex = Math.floor(Math.random() * nameArray.length);
        let selected = nameArray[randomIndex];

        // Remove selected name from array
        nameArray.splice(randomIndex, 1);
        setNames(nameArray.join(', '));

        setSelectedName(selected);
    };

    return (
        <div className="participant-selector">
            <textarea value={names} onChange={(e) => setNames(e.target.value)} />
            <button onClick={selectName}>Select next participant</button>
            {selectedName && <p>{selectedName}</p>}
        </div>
    );
};

export default ParticipantSelector;
