'use strict';

const { google } = require('googleapis'); // Import googleapis package
const calendar = google.calendar('v3'); // Import googleapis package
//Geltungsbereiche / Access Levels festlegen
const SCOPES = ['https://www.googleapis.com/auth/calendar.events.public.readonly'];
const { CLIENT_SECRET, CLIENT_ID, CALENDAR_ID } = process.env; // process.env bedeutet dass der Wert auf den verwiesen wird in config.json steht
const redirect_uris = ['https://TK1893.github.io/meet/'];

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, redirect_uris[0]);
// **  getAuthURL  *******************************************************
module.exports.getAuthURL = async () => {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({
      authUrl,
    }),
  };
};

// **  getAccessToken  ****************************************************
module.exports.getAccessToken = async (event) => {
  // Dekodierung des aus der URL-Abfrage extrahierten Autorisierungscodes
  const code = decodeURIComponent(`${event.pathParameters.code}`);

  return new Promise((resolve, reject) => {
    /**
     * Austausch von Autorisierungscode gegen Access Token mit einem
     * "Callback" nach dem Austausch.
     * Der Callback ist in diesem Fall eine arrow function mit den
     * Ergebnissen ("error" & “response”) als Parameter
     */
    oAuth2Client.getToken(code, (error, response) => {
      if (error) {
        return reject(error);
      }
      return resolve(response);
    });
  })
    .then((results) => {
      // Respond with OAuth token
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify(results),
      };
    })
    .catch((error) => {
      // Handle error
      return {
        statusCode: 500,
        body: JSON.stringify(error),
      };
    });
};

// **  getCalendarEvents  ****************************************************
module.exports.getCalendarEvents = async (event) => {
  // Dekodierung des aus der URL-Abfrage extrahierten Acces Tokens
  const access_token = decodeURIComponent(`${event.pathParameters.access_token}`);
  oAuth2Client.setCredentials({ access_token });

  return new Promise((resolve, reject) => {
    calendar.events.list(
      {
        calendarId: CALENDAR_ID,
        auth: oAuth2Client,
        timeMin: new Date().toISOString(),
        singleEvents: true,
        orderBy: 'startTime',
      },
      (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      }
    );
  })
    .then((results) => {
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify({ events: results.data.items }),
      };
    })
    .catch((error) => {
      // Handle error
      return {
        statusCode: 500,
        body: JSON.stringify(error),
      };
    });
};
