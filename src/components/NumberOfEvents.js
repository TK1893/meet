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
      <label>Number of Events:</label>
      <input type="text" className="number" value={number} onChange={handleInputChanged} />
    </div>
  );
};

export default NumberOfEvents;
