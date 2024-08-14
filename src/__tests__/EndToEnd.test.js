// src\__tests__\EndToEnd.test.js
import puppeteer from 'puppeteer';

// Feature #02
describe('show/hide event details', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  // Scenario #01
  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event .details');
    expect(eventDetails).toBeNull();
  });
  // Scenario #02
  test('User can expand an event to see its details', async () => {
    await page.click('.event .details-btn');
    const eventDetails = await page.$('.event .details');
    expect(eventDetails).toBeDefined();
  });
  // Scenario #03
  test('User can collapse an event to hide details', async () => {
    await page.click('.event .details-btn');
    const eventDetails = await page.$('.event .details');
    expect(eventDetails).toBeNull();
  });
});

// //End-to-End Tests Festure-#02 with deactivated Headless Mode
// // src\__tests__\EndToEnd.test.js
// import puppeteer from 'puppeteer';
// // Feature #02
// describe('show/hide event details', () => {
//   let browser;
//   let page;
//   beforeAll(async () => {
//     browser = await puppeteer.launch({
//       headless: false,
//       slowMo: 250, // slow down by 250ms,
//       timeout: 0, // removes any puppeteer/browser timeout limitations (this isn't the same as the timeout of jest)
//     });
//     page = await browser.newPage();
//     await page.goto('http://localhost:3000/');
//     await page.waitForSelector('.event');
//   });
//   // SAME CODE
//   afterAll(() => {
//     browser.close();
//   });

//   // Scenario #01
//   test('An event element is collapsed by default', async () => {
//     const eventDetails = await page.$('.event .details');
//     expect(eventDetails).toBeNull();
//   });
//   // Scenario #02
//   test('User can expand an event to see its details', async () => {
//     await page.click('.event .details-btn');
//     const eventDetails = await page.$('.event .details');
//     expect(eventDetails).toBeDefined();
//   });
//   // Scenario #03
//   test('User can collapse an event to hide details', async () => {
//     await page.click('.event .details-btn');
//     const eventDetails = await page.$('.event .details');
//     expect(eventDetails).toBeNull();
//   });
// });
