// src/api.js
import mockData from './mock-data';

export const extractLocations = (events) => {
  const extractedLocations = events.map((event) => event.location);
  const locations = [...new Set(extractedLocations)];
  return locations;
};

const checkToken = async (accessToken) => {
  const response = await fetch(
    `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
  );
  const result = await response.json();
  return result;
};

// This function will fetch the list of all events
export const getEvents = async () => {
  if (window.location.href.startsWith('http://localhost')) {
    return mockData;
  }

  const token = await getAccessToken();

  if (token) {
    removeQuery();
    const url =
      'https://jd7r7l6qek.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/' + token;
    const response = await fetch(url);
    const result = await response.json();
    if (result) {
      return result.events;
    } else return null;
  }
};

export const getAccessToken = async () => {
  const accessToken = localStorage.getItem('access_token');
  const tokenCheck = accessToken && (await checkToken(accessToken));

  if (!accessToken || tokenCheck.error) {
    await localStorage.removeItem('access_token');
    const searchParams = new URLSearchParams(window.location.search);
    const code = await searchParams.get('code');
    if (!code) {
      const response = await fetch(
        'https://jd7r7l6qek.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url'
      );
      // Vergewissern Sie sich, dass Sie in dem soeben gezeigten Codeschnipsel
      // Ihre tatsächliche Lambda-"getAuthURL" verwenden
      // (z. B. diejenige, die mit "api/get-auth-url" endet
      // ("https://---------/api/get-auth-url")).

      const result = await response.json();
      const { authUrl } = result;
      return (window.location.href = authUrl);
    }
    return code && getToken(code);
  }
  return accessToken;
};

const removeQuery = () => {
  let newurl;
  if (window.history.pushState && window.location.pathname) {
    newurl = window.location.protocol + '//' + window.location.host + window.location.pathname;
    window.history.pushState('', '', newurl);
  } else {
    newurl = window.location.protocol + '//' + window.location.host;
    window.history.pushState('', '', newurl);
  }
};

const getToken = async (code) => {
  const encodeCode = encodeURIComponent(code);
  const response = await fetch(
    'https://jd7r7l6qek.execute-api.eu-central-1.amazonaws.com/dev/api/token/' + encodeCode
  );
  // Stellen Sie sicher, dass Sie YOUR_GET_ACCESS_TOKEN_ENDPOINT
  // durch die tatsächliche getAccessToken-URL (die mit "api/token") ersetzen.
  // Die URL sollte mit "api/token" enden, da der Schrägstrich und der Code
  // (in der encodeCode-Variable) an die URL angehängt werden.
  // Zum Beispiel: "https://***************/api/token" + "/" + encodeCode;.

  const { access_token } = await response.json();
  access_token && localStorage.setItem('access_token', access_token);

  return access_token;
};
