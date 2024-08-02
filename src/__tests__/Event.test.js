// src/__tests__/Event.test.js
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getEvents } from '../api';
import Event from '../components/Event';
import mockData from '../mock-data';

describe('<Event /> component', () => {
  let EventComponent;
  const event = mockData[0];

  beforeEach(() => {
    EventComponent = render(<Event event={event} />);
  });
  test('renders Event Component', () => {
    expect(EventComponent).toBeTruthy();
  });
  test('renders event title', async () => {
    const allEvents = await getEvents();
    EventComponent.rerender(<Event event={allEvents[0]} />);
    expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
  });
  test('renders event start time', async () => {
    const allEvents = await getEvents();
    EventComponent.rerender(<Event event={allEvents[0]} />);
    expect(EventComponent.queryByText(allEvents[0].start.dateTime)).toBeInTheDocument();
  });
  test('renders event end time', async () => {
    const allEvents = await getEvents();
    EventComponent.rerender(<Event event={allEvents[0]} />);
    expect(EventComponent.queryByText(allEvents[0].end.dateTime)).toBeInTheDocument();
  });
  test('renders event location', async () => {
    const allEvents = await getEvents();
    EventComponent.rerender(<Event event={allEvents[0]} />);
    expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
  });
  test('renders event creation date', async () => {
    const allEvents = await getEvents();
    EventComponent.rerender(<Event event={allEvents[0]} />);
    expect(EventComponent.queryByText(allEvents[0].end.dateTime)).toBeInTheDocument();
  });
  test('event details section is hidden by default', () => {
    const eventDetails = EventComponent.container.querySelector('.details');
    expect(eventDetails).not.toBeInTheDocument();
  });
  test('renders "Details" button with title ("Show details")', () => {
    expect(EventComponent.queryByText('Show Details')).toBeInTheDocument();
  });
  test('Show details section, when user clicks "Show Details"-Button', async () => {
    const user = userEvent.setup();
    const button = EventComponent.queryByText('Show Details');
    await user.click(button);
    const details = EventComponent.container.querySelector('.details');
    expect(details).toBeInTheDocument();
  });
  test('Hide details section, when user clicks the "Hide Details" button', async () => {
    const user = userEvent.setup();
    let button = EventComponent.queryByText('Hide Details');
    await user.click(button);
    let details = EventComponent.container.querySelector('#details');
    expect(details).not.toBeInTheDocument();
  });
});
