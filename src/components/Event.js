// src/components/Event.js
import React, { useState } from 'react';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <li>
        <h2>{event.summary}</h2>
        <p>{event.start.dateTime}</p>
        <p>{event.end.dateTime}</p>
        <p>{event.location}</p>
        <p>{event.created}</p>
      </li>
      {showDetails ? (
        <div className="details" id="details">
          <h2>{event.summary}</h2>
          <p>{event.description}</p>
        </div>
      ) : null}
      <button
        onClick={() => setShowDetails(!showDetails)}
        id="toggle-details-btn"
        className="toggle-details-btn"
        name="Toggle Details"
      >
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
    </div>
  );
};

export default Event;
