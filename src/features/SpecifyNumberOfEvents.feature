# src/features/SpecifyNumberOfEvents.feature
Feature: Specify Number of Events

  Scenario: When user hasn not specified a number, 32 events are shown by default.
    Given the user has opened the app
    And the user has not specified the number of events to display
    When the user opens the event list
    Then 32 events should be displayed by default

  Scenario: User can change the number of events displayed
    Given the event list is displayed
    And 32 events are displayed by default
    When the user changes the number of events to display to 10
    Then the event list should display 10 events