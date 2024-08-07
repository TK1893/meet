// src/components/Event.js
import React, { useState } from 'react';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="event">
      <li>
        <h2>{event && event.summary}</h2>
        <p>{event && event.location}</p>
        <p>{event && new Date(event.start.dateTime).toUTCString()}</p>
      </li>
      {showDetails ? (
        <div className="details" id="details">
          <p className="details-heading">What can you expect?</p>
          <p>{event.description}</p>
          <p className="details-heading">Event start</p>
          <p>{event && new Date(event.start.dateTime).toUTCString()}</p>
          <p className="details-heading">Event start</p>
          <p>{event && new Date(event.end.dateTime).toUTCString()}</p>
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
