// src/features/showHideAnEventsDetails.test.js
import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getEvents } from '../api';
import App from '../App';
import Event from '../components/Event';

//FEATURE #02
const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, (test) => {
  //Szenario #01
  test('An event element is collapsed by default', ({ given, when, then }) => {
    let AppComponent;
    let AppDOM = render(<App />).container.firstChild;

    given('the user has opened the app', () => {
      AppComponent = render(<App />);
    });

    when('the event list is displayed', async () => {
      const EventListDOM = AppDOM.querySelector('#event-list');
      await waitFor(() => {
        const EventListItem = within(EventListDOM).getAllByRole('listitem');
        expect(EventListItem).toHaveLength(32);
      });
    });

    then('the event details for each event should be hidden by default', () => {
      const detailsContainer = AppDOM.querySelector('.details-container');
      expect(detailsContainer).not.toBeInTheDocument();
    });
  });

  //Szenario #02
  test('User can expand an event to see details', ({ given, and, when, then }) => {
    let AppDOM = render(<App />).container.firstChild;
    let EventComponent;
    let EventDOM;
    let allEvents;

    given('the event list is displayed', async () => {
      const EventListDOM = AppDOM.querySelector('#event-list');
      await waitFor(() => {
        const EventListItem = within(EventListDOM).getAllByRole('listitem');
        expect(EventListItem).toHaveLength(32);
      });
    });

    and('the events details are hidden', async () => {
      allEvents = await getEvents();
      EventComponent = render(<Event event={allEvents[0]} />);
      EventDOM = EventComponent.container.firstChild;
      expect(EventDOM.querySelector('.details-container')).not.toBeInTheDocument();
    });

    when('the user clicks on the show details button for an event', async () => {
      const user = userEvent.setup();
      const showDetailsButton = EventComponent.queryByText('show details');
      await user.click(showDetailsButton);
    });

    then('the event details for that event should be expanded to view', () => {
      const detailsContainer = EventComponent.container.querySelector('.details-container');
      expect(detailsContainer).toBeInTheDocument();
    });
  });

  //Szenario #03
  test('User can collapse an event to hide details', ({ given, when, then }) => {
    let EventComponent;
    let allEvents;

    given('the event details are expanded for an event', async () => {
      allEvents = await getEvents();
      EventComponent = render(<Event event={allEvents[0]} />);
      const user = userEvent.setup();
      const showDetailsButton = EventComponent.queryByText('show details');
      await user.click(showDetailsButton);
      const detailsContainer = EventComponent.container.querySelector('.details-container');
      expect(detailsContainer).toBeInTheDocument();
    });

    when('the user clicks on the hide details button for that event', async () => {
      const user = userEvent.setup();
      const hideDetailsButton = EventComponent.queryByText('hide details');
      await user.click(hideDetailsButton);
    });

    then('the event details for that event should be collapsed and hidden', () => {
      const detailsContainer = EventComponent.container.querySelector('.details-container');
      expect(detailsContainer).not.toBeInTheDocument();
    });
  });
});
