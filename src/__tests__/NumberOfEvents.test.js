// src\__tests__\NumberOfEvents.test.js
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; // Add this line to import the 'userEvent' library
import NumberOfEvents from '../components/NumberOfEvents';
import { getEvents } from '../api';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsComponent;
  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE={() => {}} setErrorAlertText={() => {}} />);
  });

  test('renders element with role of textbox correctly', () => {
    // const input = NumberOfEventsComponent.queryByRole('textbox');
    expect(NumberOfEventsComponent.queryByRole('textbox')).toBeInTheDocument();
  });

  test('default number of events is 32', () => {
    expect(NumberOfEventsComponent.queryByRole('textbox')).toHaveValue('32');
  });

  test('change number of events when a user types in the textbox', async () => {
    const UserNumberOfEvents = NumberOfEventsComponent.queryByRole('textbox');
    const user = userEvent.setup();
    await user.type(UserNumberOfEvents, '{backspace}{backspace}10');
    const allEvents = await getEvents();
    NumberOfEventsComponent.rerender(<NumberOfEvents setCurrentNOE={allEvents} setErrorAlertText={() => {}} />);
    expect(UserNumberOfEvents).toHaveValue('10');
  });
});
