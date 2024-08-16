// src\__tests__\EndToEnd.test.js
import puppeteer from 'puppeteer';

// Feature #01
describe('Filter events by city', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch();
    // Testing with deactivated Headless Mode
    // browser = await puppeteer.launch({
    //   headless: false,
    //   slowMo: 250, // slow down by 250ms,
    //   timeout: 0, // removes any puppeteer/browser timeout limitations (this isn't the same as the timeout of jest)
    // });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
  });

  afterAll(() => {
    browser.close();
  });

  // Scenario #01
  test('When user hasn’t searched for a city, show upcoming events from all cities', async () => {
    await page.type('.city', ''); // No User Input
    const eventList = await page.$$('#event-list .event');
    expect(eventList.length).toBeGreaterThan(0);
    expect(eventList.length).toBe(32); // 32 events are shown by default
  });

  // Scenario #02
  test('User should see a list of suggestions when they search for a city', async () => {
    await page.type('.city', 'Berlin'); // Start typing a city name
    const suggestions = await page.$$('.suggestions li');
    expect(suggestions.length).toBe(2); // 2 city suggesstions: "See all Cities" & "Berlin"
  });

  // Scenario #03
  test('User can select a city from the suggested list', async () => {
    // CitySearch input check
    await page.click('.suggestions li'); // Click on the first li of suggestions
    const query = await page.$eval('.city', (input) => input.value);
    expect(query).toBe('Berlin, Germany'); // Expect the input value to match the clicked city
    // Event list check
    const eventList = await page.$$('#event-list .event');
    expect(eventList.length).toBeGreaterThan(0);
    expect(eventList.length).toBe(18); // 18 events for Berlin
    // Event location check
    const eventLocation = await page.$eval(`#event-list .event:last-child p`, (el) => el.textContent);
    expect(eventLocation).toBe('Berlin, Germany');
  });
});

// Feature #02
describe('show/hide event details', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch();
    // // Testing with deactivated Headless Mode
    // browser = await puppeteer.launch({
    //   headless: false,
    //   slowMo: 250, // slow down by 250ms,
    //   timeout: 0, // removes any puppeteer/browser timeout limitations (this isn't the same as the timeout of jest)
    // });
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
