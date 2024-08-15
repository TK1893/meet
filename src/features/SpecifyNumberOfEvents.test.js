// src/features/SpecifyNumberOfEvents.test.js
import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import EventList from '../components/EventList';
import NumberOfEvents from '../components/NumberOfEvents';

//FEATURE #03
const feature = loadFeature('./src/features/SpecifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
  //Szenario #01
  test('When user hasn not specified a number, 32 events are shown by default.', ({ given, and, when, then }) => {
    let AppDOM;
    let AppComponent;
    given('the user has opened the app', () => {
      AppComponent = render(<App />);
      AppDOM = render(<App />).container.firstChild;
    });

    and('the user has not specified the number of events to display', () => {});
    // No action needed, the default is 32

    when('the user opens the event list', () => {});

    let NumberOfEventsComponent;
    then(/^(\d+) events should be displayed by default$/, async (arg0) => {
      let EventListDOM = AppDOM.querySelector('#event-list');
      await waitFor(() => {
        const EventListItem = within(EventListDOM).getAllByRole('listitem');
        expect(EventListItem).toHaveLength(32);
      });
      NumberOfEventsComponent = render(<NumberOfEvents />);
      let noeInput = NumberOfEventsComponent.container.querySelector('.number');
      expect(noeInput).toHaveValue('32');
    });
  });

  //Szenario #02
  test('User can change the number of events displayed', ({ given, and, when, then }) => {
    let AppComponent;
    let AppDOM;
    let EventListDOM;
    let noeInput;

    given('the event list is displayed', () => {
      AppComponent = render(<App />);
      AppDOM = render(<App />).container.firstChild;
      EventListDOM = AppDOM.querySelector('#event-list');
    });

    let NumberOfEventsComponent;
    and(/^(\d+) events are displayed by default$/, (arg0) => {
      NumberOfEventsComponent = render(<NumberOfEvents />);
      noeInput = NumberOfEventsComponent.container.querySelector('.number');
      expect(noeInput).toHaveValue('32');
    });

    when(/^the user changes the number of events to display to (\d+)$/, async (arg0) => {
      const user = userEvent.setup();
      noeInput = AppDOM.querySelector('.number');
      await user.type(noeInput, '{backspace}{backspace}10');
    });

    then(/^the event list should display (\d+) events$/, async (arg0) => {
      expect(noeInput).toHaveValue('10');
      await waitFor(() => {
        const EventListItem = within(EventListDOM).getAllByRole('listitem');
        expect(EventListItem).toHaveLength(10);
      });
    });
  });
});
