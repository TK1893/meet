// src/components/NumberOfEvents.js
import { useState } from 'react';
import './user-inputs.scss';

const NumberOfEvents = ({ currentNOE, setCurrentNOE, setErrorAlertText }) => {
  const [number, setNumber] = useState(32);

  const handleInputChanged = (e) => {
    let value = e.target.value;
    setNumber(value);
    let errorText;
    if (isNaN(value)) {
      errorText = 'Your Input is Not a Number !';
    } else if (value <= 0) {
      errorText = 'Your Input must be greater than zero !';
    } else {
      errorText = '';
    }
    setCurrentNOE(value);
    setErrorAlertText(errorText);
  };

  return (
    <div id="number-of-events">
      <label className="title-input" htmlFor="number-of-events-input">
        Number of Events
      </label>
      <input
        type="text"
        className="number"
        id="number-of-events-input"
        name="noe"
        placeholder="Enter your desired number"
        value={number}
        onChange={handleInputChanged}
      />
    </div>
  );
};

export default NumberOfEvents;
