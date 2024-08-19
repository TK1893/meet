// src/components/NumberOfEvents.js
import { useState } from 'react';

const NumberOfEvents = ({ setCurrentNOE }) => {
  const [number, setNumber] = useState(32);

  const handleInputChanged = (e) => {
    let userNumber = e.target.value;
    setNumber(userNumber);
    setCurrentNOE(userNumber);
  };

  return (
    <div id="number-of-events">
      <label htmlFor="number-of-events-input">Number of Events</label>
      <input
        type="text"
        className="number"
        id="number-of-events-input"
        name="noe"
        value={number}
        onChange={handleInputChanged}
      />
    </div>
  );
};

export default NumberOfEvents;
