// src/App.js

import CitySearch from './components/CitySearch';
import CityEventsChart from './components/CityEventsChart';
import EventGenresChart from './components/EventGenresChart';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { useEffect, useState } from 'react';
import { extractLocations, getEvents } from './api';
import { InfoAlert, ErrorAlert, WarningAlert } from './components/Alert';

import './App.scss';

const App = () => {
  const [allLocations, setAllLocations] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [events, setEvents] = useState([]);
  const [currentCity, setCurrentCity] = useState('See all cities');
  const [infoAlert, setInfoAlert] = useState('');
  const [errorAlertText, setErrorAlertText] = useState('');
  const [warningAlertText, setWarningAlertText] = useState('');

  useEffect(() => {
    if (!navigator.onLine) {
      setWarningAlertText('You are now using Meet offline. Events data may be outdated.');
    } else {
      setWarningAlertText('');
    }
    fetchData();
  }, [currentCity, currentNOE]);

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents =
      currentCity === 'See all cities' ? allEvents : allEvents.filter((event) => event.location === currentCity);
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  };

  return (
    <div className="App">
      <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert} type="InfoAlert" /> : null}
        {errorAlertText.length ? <ErrorAlert text={errorAlertText} type="ErrorAlert" /> : null}
        {warningAlertText.length ? <WarningAlert text={warningAlertText} type="WarningAlert" /> : null}
      </div>
      <div className="title-wrapper">
        <h1>MEET</h1>
        <h2>Coding Events</h2>
      </div>
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} setInfoAlert={setInfoAlert} />
      <NumberOfEvents currentNOE={currentNOE} setCurrentNOE={setCurrentNOE} setErrorAlertText={setErrorAlertText} />
      <div className="charts-container">
        <EventGenresChart events={events} />
        <CityEventsChart allLocations={allLocations} events={events} />
      </div>
      <EventList events={events} />
    </div>
  );
};

export default App;
