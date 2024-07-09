# Meet App

Meet App is a serverless, progressive web application (PWA) built with React using a Test-Driven Development (TDD) approach. The app uses the Google Calendar API to fetch upcoming events.

# App Features & Scenarios

## Feature (1) - Filter Events By City

### User Story

As a user, I should be able to filter events by city,  
So that I can see a list of events taking place in that city.

### Scenario 1

- **Given** user hasn’t searched for any city;
- **When** the user opens the app;
- **Then** the user should see a list of upcoming events.

### Scenario 2

- **Given** the main page is open;
- **When** user starts typing in the city textbox;
- **Then** the user should receive a list of cities (suggestions) that match what they’ve typed.

### Scenario 3

- **Given** user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;
- **When** the user selects a city (e.g., “Berlin, Germany”) from the list;
- **Then** the city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.

## Feature (2) - Show/Hide Event Details

### User Story

As a user, I should be able to expand and hide the details of an event,  
So that I have a clear view of the list of all events but can also open the details of an event if desired.

### Scenario 1

- **Given** the user has selected the city of Berlin for the event search;
- **When** the user confirms the selection;
- **Then** a list with all upcoming events of the city will be displayed - the details of the individual events are hidden by default.

### Scenario 2

- **Given** the user has opened the view with the list of all upcoming events in Berlin;
- **When** the user selects an event by clicking on a “Show-Details”-Button;
- **Then** the event will be expanded with its details.

### Scenario 3

- **Given** the user expanded an event from the list for more details;
- **When** the user clicks on the Hide details button;
- **Then** event will then be collapsed in its detail view to return to the list of all events.

## Feature (3) - Specify Number of Events

### User Story

As a user, I should be able to determine the number of events displayed,  
So that the list of events remains manageable.

### Scenario 1

- **Given** the user selected the city (Berlin) when searching for events;
- **When** the user does not specify the number of events to be displayed;
- **Then** 32 events will be displayed in the list by default.

### Scenario 2

- **Given** the user selected the city (Berlin) when searching for events;
- **When** the user enters the number of events to be displayed via the input field provided;
- **Then** the number of events displayed will change according to the user input.

## Feature (4) - Use the App When Offline

### User Story

As a user, I should be able to see cached data when there’s no internet connection,  
So that I can still access event information offline.

### Scenario 1

- **Given** user made an event search for the desired city and received the search results in a list of events;
- **When** the user has no Internet connection;
- **Then** he will still have access to the event information offline via the cached data.

### Scenario 2

- **Given** user made an event search for the desired city and received the search results in a list of events;
- **When** the user has no internet connection but tries to change a search parameter (city, number of events);
- **Then** the app will display a corresponding error message "Offline no search change available”.

## Feature (5) - Add an App Shortcut to the Home Screen

### User Story

As a user, I should be able to install the meet app as a shortcut on my device home screen,  
So that I can quickly access the app directly from my home screen.

### Scenario 1

- **Given** the user wants to have faster access to the app via his device;
- **When** the user installs the app as a shortcut on the device's home screen;
- **Then** he will be able to open the app quickly via the shortcut.

## Feature (6) - Display Charts Visualizing Event Details

### User Story

As a user, I should be able to see a chart with the number of upcoming events in each city,  
So that I can easily visualize and compare the event distribution across different cities.

### Scenario 1

- **Given** the user made an event search for a specific city and received the search results in a list of events in the main view;
- **When** the user navigates to the charts section;
- **Then** a chart will be displayed with the number of upcoming events in the selected city.

## Technical Requirements

- **Framework**: React
- **TDD**: Development using Test-Driven Development
- **API**: Use of Google Calendar API and OAuth2
- **Serverless**: Use AWS Lambda for serverless functions
- **Hosting**: GitHub Pages
- **Compatibility**: Supports latest versions of Chrome, Firefox, Safari, Edge, Opera, and IE11
- **Responsive Design**: Optimized for all screen sizes
- **PWA Checklist**: Passes the Lighthouse PWA criteria
- **Data Visualization**: Implementation of charts
- **Test Coverage**: At least 90% test coverage
- **Monitoring**: Integration of a performance monitoring tool

## Project Requirements

- Filter Events by City
- Show/Hide Event Details
- Specify Number of Events
- Use the App When Offline
- Add an App Shortcut to the Home Screen
- Display Charts Visualizing Event Details

## Deliverables

- **TDD & Test Scenarios**: Creation of user stories and test scenarios
- **Serverless Functions & Authentication**: Connecting the app with a protected API and implementing OAuth
- **AWS Lambda Functions**: Writing and testing Lambda functions
- **Unit Testing**: Writing and testing unit tests
- **Integration Testing**: Writing and testing integration tests
- **User Acceptance Testing & End-to-End Testing**: Writing and conducting acceptance and end-to-end tests
- **Continuous Delivery**: Integration of CI/CD practices and APM tools
- **Object-Oriented Programming (OOP)**: Implementation of OOP concepts
- **Progressive Web Apps**: Implementation of PWA functionalities
- **Data Visualization**: Implementation of data visualization features

## Advanced Features (Optional)

- Use the Lambda inline editor
- Style with React-Bootstrap
- End-to-End testing with Puppeteer
- QA and bug fixing

## Getting Started

1. Clone the repository
   ```sh
   git clone https://github.com/your-username/meet-app.git
   ```
