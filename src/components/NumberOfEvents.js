import { useState } from 'react';

const NumberOfEvents = ({ setActualNumber }) => {
  const [number, setNumber] = useState(32);

  const handleInputChanged = (e) => {
    let userNumber = e.target.value;
    setNumber(userNumber);
    setActualNumber(userNumber);
  };

  return (
    <div id="number-of-events">
      <label>Number of Events:</label>
      <input type="text" className="number" value={number} onChange={handleInputChanged} />
    </div>
  );
};

export default NumberOfEvents;
