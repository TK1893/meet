// .src/features/SpecifyNumberOfEvents.feature
import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import EventList from '../components/EventList';
import Event from '../components/Event';
import NumberOfEvents from '../components/NumberOfEvents';

//FEATURE #03
const feature = loadFeature('./src/features/SpecifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
  //Szenario #01

  test('When user hasn not specified a number, 32 events are shown by default.', ({ given, and, when, then }) => {
    let AppComponent;
    let AppDOM = render(<App />).container.firstChild;
    let NumberOfEventsComponent;
    let UserNumber;

    given('the user has opened the app', () => {
      AppComponent = render(<App />);
    });

    and('the user has not specified the number of events to display', () => {});

    when('the user opens the event list', async () => {
      const EventListDOM = AppDOM.querySelector('#event-list');
      await waitFor(() => {
        const EventListItem = within(EventListDOM).getAllByRole('listitem');
        expect(EventListItem).toHaveLength(32);
      });
      NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE={() => {}} />);
      expect(NumberOfEventsComponent).toBeTruthy();
    });

    then(/^(\d+) events should be displayed by default$/, (arg0) => {
      UserNumber = NumberOfEventsComponent.container.querySelector('.number');
      expect(UserNumber).toHaveValue('32');
    });
  });

  //Szenario #02
  test('User can change the number of events displayed', ({ given, and, when, then }) => {
    given('the event list is displayed', () => {});

    and(/^(\d+) events are displayed by default$/, (arg0) => {});

    when(/^the user changes the number of events to display to (\d+)$/, (arg0) => {});

    then(/^the event list should display (\d+) events$/, (arg0) => {});
  });
});
