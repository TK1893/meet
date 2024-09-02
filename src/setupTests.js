// // src/setupTests.js
// import '@testing-library/jest-dom';

// // Here, add portions of the warning messages you want to intentionally prevent from appearing
// const MESSAGES_TO_IGNORE = [
//   'When testing, code that causes React state updates should be wrapped into act(...):',
//   'Error:',
//   'The above error occurred',
// ];

// const originalError = console.error.bind(console.error);

// console.error = (...args) => {
//   const ignoreMessage = MESSAGES_TO_IGNORE.find((message) => args.toString().includes(message));
//   if (!ignoreMessage) originalError(...args);
// };

// jest.setTimeout(100000);

// const { ResizeObserver } = window;

// beforeEach(() => {
//   //@ts-ignore
//   delete window.ResizeObserver;
//   window.ResizeObserver = jest.fn().mockImplementation(() => ({
//     observe: jest.fn(),
//     unobserve: jest.fn(),
//     disconnect: jest.fn(),
//   }));
// });

// afterEach(() => {
//   window.ResizeObserver = ResizeObserver;
//   jest.restoreAllMocks();
// });

// src/setupTests.js
import '@testing-library/jest-dom';
import ResizeObserver from 'resize-observer-polyfill';

// Hier, Teile der Warnmeldungen hinzufügen, die du absichtlich verhindern möchtest
const MESSAGES_TO_IGNORE = [
  'When testing, code that causes React state updates should be wrapped into act(...):',
  'Error:',
  'The above error occurred',
];

const originalError = console.error.bind(console.error);

console.error = (...args) => {
  const ignoreMessage = MESSAGES_TO_IGNORE.find((message) => args.toString().includes(message));
  if (!ignoreMessage) originalError(...args);
};

jest.setTimeout(100000);

// Registriere die Polyfill global
global.ResizeObserver = ResizeObserver;

beforeEach(() => {
  // Hier ist die ResizeObserver-Mock-Implementierung nur nötig, wenn du spezifische Anpassungen brauchst
  // Ansonsten kannst du diese Zeilen entfernen, weil wir die Polyfill oben bereits global registriert haben
  window.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));
});

afterEach(() => {
  jest.restoreAllMocks();
});
