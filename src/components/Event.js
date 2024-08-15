// src/components/Event.js
import React, { useState } from 'react';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <li className="event">
      <h2>{event && event.summary}</h2>
      <p>{event && event.location}</p>
      <p className="event-start">{event && new Date(event.start.dateTime).toUTCString()}</p>
      {showDetails ? (
        <div className="details-container">
          <p className="details-heading">What can you expect?</p>
          <p className="details">{event && event.description}</p>
          <p className="details-heading">Event start</p>
          <p className="event-start">{event && new Date(event.start.dateTime).toUTCString()}</p>
          <p className="details-heading">Event end</p>
          <p className="event-end">{event && new Date(event.end.dateTime).toUTCString()}</p>
          <p className="created-text">Event created @ {event && new Date(event.created).toUTCString()}</p>
          {/* <p className="event-created">{event && new Date(event.created).toUTCString()}</p> */}
        </div>
      ) : null}

      <button
        className="details-btn"
        onClick={() => {
          showDetails ? setShowDetails(false) : setShowDetails(true);
        }}
      >
        {showDetails ? 'hide details' : 'show details'}
      </button>
    </li>
  );
};

export default Event;
