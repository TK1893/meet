# Meet App

Meet App is a serverless, progressive web application (PWA) built with React using a Test-Driven Development (TDD) approach. The app uses the Google Calendar API to fetch upcoming events.

# App Features & Scenarios

## Filter Events By City ( # Feature 1 )

### User Story

As a user, I should be able to filter events by city ,
So that I can see a list of events taking place in that city .

### Scenario 1

When user hasn’t searched for a specific city, show upcoming events from all cities.  
**Gherkin’s syntax ( Given-When-Then )**

- **Given** user hasn’t searched for any city.
- **When** the user opens the app,
- **Then** the user should see a list of upcoming events.

<!-- - **Filter Events by City**: Search for events in a specific city.
- **Show/Hide Event Details**: Toggle the display of event details.
- **Specify Number of Events**: Determine the number of events displayed.
- **Offline Usage**: The app works offline.
- **App Shortcut**: Add a shortcut to the home screen.
- **Event Visualization**: Display charts to visualize event data. -->

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
