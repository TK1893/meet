# Meet App - PWA with Serverless Backend

The **Meet App** is a Progressive Web Application (PWA) designed to fetch upcoming events using the Google Calendar API. This app allows users to filter events by city, display event details, and visualize data through interactive charts. The app is built using **React** with a **Test-Driven Development (TDD)** approach and a **serverless architecture** powered by **AWS Lambda**.

The app is fully functional offline, can be installed on mobile and desktop devices, and includes data visualizations like scatter plots and pie charts. The app is responsive, cross-platform, and optimized for performance.

## Live App

[**Check the Meet Live App**](https://tk1893.github.io/meet/)

---

## Table of Contents

- [Key Features](#key-features)
- [User Stories & Scenarios](#user-stories--scenarios)
- [Technologies Used](#technologies-used)
- [Deliverables](#deliverables)
- [App Components](#app-components)
- [File Details](#file-details)
- [Installation & Setup](#installation--setup)

- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## Key Features

<!-- - **`Event Filtering by City`**   -->

### **`Event Filtering by City`**

Users can filter events by a specified city and view upcoming events.

### **`Event Details`**

Toggle visibility of event details with the ability to expand or collapse the information.

### **`Number of Events`**

Configure how many events should be displayed per search.

### **`Offline Usage`**

The app can function without an internet connection, showing cached data.

### **`Home Screen Shortcut`**

Users can add the app to their home screen for quick access.

### **`Data Visualization`**

Displays a scatterplot to visualize the number of events in different cities and a pie chart for event genre popularity.

---

## User Stories & Scenarios

### Feature (1) - Filter Events By City

#### `User Story`

As a user, I should be able to filter events by city,  
So that I can see a list of events taking place in that city.

#### `Scenario 1`

- **Given** user hasn’t searched for any city;
- **When** the user opens the app;
- **Then** the user should see a list of upcoming events.

#### `Scenario 2`

- **Given** the main page is open;
- **When** user starts typing in the city textbox;
- **Then** the user should receive a list of cities (suggestions) that match what they’ve typed.

#### `Scenario 3`

- **Given** user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;
- **When** the user selects a city (e.g., “Berlin, Germany”) from the list;
- **Then** the city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.

### Feature (2) - Show/Hide Event Details

#### `User Story`

As a user, I should be able to expand and hide the details of an event,  
So that I have a clear view of the list of all events but can also open the details of an event if desired.

#### `Scenario 1`

- **Given** the user has selected the city of Berlin for the event search;
- **When** the user confirms the selection;
- **Then** a list with all upcoming events of the city will be displayed - the details of the individual events are hidden by default.

#### `Scenario 2`

- **Given** the user has opened the view with the list of all upcoming events in Berlin;
- **When** the user selects an event by clicking on a “Show-Details”-Button;
- **Then** the event will be expanded with its details.

#### `Scenario 3`

- **Given** the user expanded an event from the list for more details;
- **When** the user clicks on the Hide details button;
- **Then** event will then be collapsed in its detail view to return to the list of all events.

### Feature (3) - Specify Number of Events

#### `User Story`

As a user, I should be able to determine the number of events displayed,  
So that the list of events remains manageable.

#### `Scenario 1`

- **Given** the user selected the city (Berlin) when searching for events;
- **When** the user does not specify the number of events to be displayed;
- **Then** 32 events will be displayed in the list by default.

#### `Scenario 2`

- **Given** the user selected the city (Berlin) when searching for events;
- **When** the user enters the number of events to be displayed via the input field provided;
- **Then** the number of events displayed will change according to the user input.

### Feature (4) - Use the App When Offline

#### `User Story`

As a user, I should be able to see cached data when there’s no internet connection,  
So that I can still access event information offline.

#### `Scenario 1`

- **Given** user made an event search for the desired city and received the search results in a list of events;
- **When** the user has no Internet connection;
- **Then** he will still have access to the event information offline via the cached data.

#### `Scenario 2`

- **Given** user made an event search for the desired city and received the search results in a list of events;
- **When** the user has no internet connection but tries to change a search parameter (city, number of events);
- **Then** the app will display a corresponding error message "Offline no search change available”.

### Feature (5) - Add an App Shortcut to the Home Screen

#### `User Story`

As a user, I should be able to install the meet app as a shortcut on my device home screen,  
So that I can quickly access the app directly from my home screen.

#### `Scenario 1`

- **Given** the user wants to have faster access to the app via his device;
- **When** the user installs the app as a shortcut on the device's home screen;
- **Then** he will be able to open the app quickly via the shortcut.

### Feature (6) - Display Charts Visualizing Event Details

#### `User Story`

As a user, I should be able to see a chart with the number of upcoming events in each city,  
So that I can easily visualize and compare the event distribution across different cities.

#### `Scenario 1`

- **Given** the user made an event search for a specific city and received the search results in a list of events in the main view;
- **When** the user navigates to the charts section;
- **Then** a chart will be displayed with the number of upcoming events in the selected city.

---

## Technologies Used

### Frontend

- **`React`**  
  JavaScript library for building the user interface.

- **`Chart.js`**  
  For rendering interactive charts (scatter plot and pie chart).

- **`Service Worker`**  
   For offline functionality and caching resources.

- **`React Bootstrap`**  
   For responsive and consistent design components.

- **`OAuth2 Authentication`**  
   For secure authorization to the Google Calendar API.

<!-- - **`Axios`**
  For making HTTP requests to the Google Calendar API and other serverless functions. -->

### Backend

- **`AWS Lambda`**  
   Serverless computing service used for authentication and other backend functions.

- **`AWS API Gateway`**  
   For managing API requests and routing.

- **`Serverless Framework`**  
   For deploying the serverless functions to AWS.

- **`Google Calendar API`**

### Development & Testing

- **`TDD`** - Development using Test-Driven Development

- **`Jest`** - For unit and integration testing.

- **`React Testing Library`** - For testing React components.
<!-- - **`Supertest`**: For API testing (testing the serverless functions). -->

### Additional Tools

- **`GitHub Pages`** - For hosting the frontend app.

- **`Lighthouse`** - For performance auditing and ensuring the app meets PWA requirements.

- **`Continuous Integration (CI)`** - For automated testing and deployments.

<!-- OLD -->
<!-- - **PWA Checklist**: Passes the Lighthouse PWA criteria
- **Data Visualization**: Implementation of charts
- **Test Coverage**: At least 90% test coverage
- **Monitoring**: Integration of a performance monitoring tool -->

---

### **Languages & Frameworks:**

- **`JavaScript`**

- **`React (including Hooks)`**

### **Libraries**

- **`Recharts`** - For rendering scatter and pie charts

### **CSS Preprocessor**

- **`Sass (SCSS)`** - For styling components

### **Packages**

- `react-responsive-container` - Ensures responsive chart behavior

### **API**

- **`Google Calendar API`**: Used to fetch event data

---

## Deliverables

- **`TDD & Test Scenarios`** - Creation of user stories and test scenarios

- **`Serverless Functions & Authentication`** - Connecting the app with a protected API and implementing OAuth

- **`AWS Lambda Functions`** - Writing and testing Lambda functions

- **`Unit Testing`** - Writing and testing unit tests

- **`Integration Testing`** - Writing and testing integration tests

- **`User Acceptance Testing & End-to-End Testing`** - Writing and conducting acceptance and end-to-end tests

- **`Continuous Delivery`**: Integration of CI/CD practices and APM tools

- **`Object-Oriented Programming (OOP)`**: Implementation of OOP concepts

- **`Progressive Web Apps`**: Implementation of PWA functionalities

- **`Data Visualization`**: Implementation of data visualization features

- **`End-to-End testing`** with Puppeteer

## App Components

### **`1. Alert.js`**

- Provides alert messages to the user.

- **Base Component :** `Alert`

  - Displays an alert with a type (e.g., Info, Error, Warning).

- **Subcomponents:**
  - `InfoAlert ` - Displays informational messages.
  - `ErrorAlert` - Displays error messages.
  - `WarningAlert` - Displays warnings.

### **`2. CityEventsChart.js`**

- Displays a scatter chart visualizing the number of events per city.

- Uses `recharts` to render a responsive scatter chart.
- Automatically updates when the `events` prop changes.
- **`Props`**

- `allLocations` - List of all cities.
- `events` - Array of event objects.

### **`3. CitySearch.js`**

- Enables users to search for events in specific cities.

- **`Features`**

  - Dynamic filtering of suggestions based on user input.
  - Displays suggestions in a dropdown list.
  - Alerts users when no matching city is found.

- **`Props`**

  - `allLocations` - List of all available cities.
  - `setCurrentCity` - Updates the selected city.
  - `setInfoAlert` - Displays an info alert for invalid inputs.

### **`4. Event.js`**

- Displays individual event details.

- Toggles between a brief summary and full details, including start/end times, description, and creation date.

- **`Props`**

  - `event` - The event object containing its details.

### **`5. EventGenresChart.js`**

- Visualizes the distribution of event genres using a pie chart.
- Genres tracked: `React`, `JavaScript`, `Node`, `jQuery`, and `Angular`.
- Utilizes `recharts` for a responsive chart and `Cell` components to style slices with unique colors.

- **`Props`**
  - `events` - Array of event objects.

### **`6. EventList.js`**

- Renders a list of events.
- Iterates over the `events` array and uses the `Event` component to display each event.

### **`7. NumberOfEvents.js`**

- Allows users to specify how many events to display.

- Validates user input to ensure it is a positive number.
- Props:
  - `currentNOE` - Current number of events to display.
  - `setCurrentNOE` - Updates the number of events.
  - `setErrorAlertText` - Displays an error alert for invalid inputs.

---

## File Details

### **`auth-server/handler.js`**

This file contains the handler functions for the auth server, which is deployed using AWS Lambda and the Serverless Framework API. It provides functions to exchange OAuth2 authentication codes for access tokens and fetch calendar events from Google Calendar.

- #### Key Functions :

  - `getAuthURL` - Returns the URL that the user needs to visit to authenticate with Google Calendar.

  - `getAccessToken` - Exchanges an authentication code for an access token.
  - `getCalendarEvents` - Fetches calendar events from Google Calendar.

### `auth-server/serverless.yml`

Configuration file for the Serverless Framework. It defines the AWS Lambda provider settings, functions, and environment variables used by the auth server.  
The Serverless Framework helps deploy the Lambda functions and manage the API endpoints.

- #### **Important configurations :**
  - Lambda provider on AWS with Node.js 20.x
- #### **Defined functions :**
  - `getAuthURL`
  - `getAccessToken`
  - `getCalendarEvents`
- #### Environment variables:
  - `CLIENT_ID`
  - `CLIENT_SECRET`
  - `CALENDAR_ID`

### `api.js`

Provides functions to retrieve events and extract cities from event data. It also handles the API request to fetch authentication tokens and events from the backend.

#### **Functions :**

- `extractLocations`: Extracts and cleans up the locations from events.
- `getAccessToken`: Retrieves the access token for API access.
- `getEvents`: Fetches events from the API and processes them.

### `index.js`

The main entry point of the application. It manages the user interface (UI), listens for user interactions, and interacts with the backend to retrieve and display events.

#### **Functions :**

- `handleSearch`: Handles user search input and triggers the event retrieval process.
- `handleCalendarEvent`: Displays events from the Google Calendar.
- `handleError`: Displays error messages if any issue occurs during API calls.

### `serverless.yml`

A serverless configuration file that defines the serverless functions and resources. It is used for deploying the entire application, including the auth server and event fetching functions.

#### **Key Sections** :

- `functions` - Defines the Lambda functions to be deployed.

- `resources` - Specifies any additional resources needed for the application, such as DynamoDB tables or API Gateway settings.

## Installation & Setup

### Prerequisites

- Node.js (v16.0 or higher)
- NPM (v8.0 or higher)
- AWS CLI for deploying serverless functions

### Steps to Run Locally

#### 1. Clone the repository

    ```bash
    git clone https://github.com/your-username/meet-app.git
    cd meet-app
    ```

#### 2. Install dependencies:

    ```bash
    npm install
    ```

#### 3. Run the React development server:

    ```bash
    npm start
    ```

#### 4. Open the app in your browser

at `http://localhost:3000`.

### Deployment

This app is deployed on **GitHub Pages** for easy access and distribution. To deploy the app:

#### 1. Build the production version of the app:

    ```bash
    npm run build
    ```

#### 2. Deploy the app to GitHub Pages:

    ```bash
    npm run deploy
    ```

#### 3. The app will be available at your GitHub Pages URL

### Serverless Functions

Serverless functions are deployed using **AWS Lambda**. To deploy the functions:

#### 1. Install the Serverless Framework:

    ```bash
    npm install -g serverless
    ```

#### 2. Configure your AWS credentials and deploy the functions

### OAuth2 Configuration

To authenticate users with Google Calendar API:

1. Go to the [Google Developer Console](https://console.developers.google.com/).

2. Create a new project and enable the **Google Calendar API**.

3. Configure **OAuth2 credentials** and add the redirect URIs for your app.

4. Update the `config.json` file with your client ID and client secret.

---

## Contributing

Contributions are welcome! To contribute:
Fork the repository.
Create a new branch (feature/NewFeature).
Make your changes and ensure they are well-documented.
Submit a pull request for review.

---

## License

This project is open-source under the MIT License.

---

## Author

Developed by [Tobias Kraft](https://tk1893.github.io/tk-portfolio/).
