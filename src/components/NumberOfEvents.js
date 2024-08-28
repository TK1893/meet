// src/components/NumberOfEvents.js
import { useState } from 'react';
import PropTypes from 'prop-types';

const NumberOfEvents = ({ setCurrentNOE, setErrorAlertText }) => {
  const [number, setNumber] = useState(32);

  const handleInputChanged = (e) => {
    let value = e.target.value;
    setNumber(value);
    let errorText;
    if (isNaN(value)) {
      errorText = 'Your Input is Not a Number !';
    } else if (value <= 0) {
      errorText = 'Your Input must be greater than zero !';
      setCurrentNOE(32);
    } else if (value > 41) {
      errorText = 'Your input exceeds the number of upcoming events. Currently we have 40 events registered !';
      setCurrentNOE(32);
    } else {
      errorText = '';
      setCurrentNOE(value);
    }
    setErrorAlertText(errorText);
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

NumberOfEvents.propTypes = {
  setCurrentNOE: PropTypes.func.isRequired,
  setErrorAlertText: PropTypes.func.isRequired,
};
