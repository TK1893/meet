Feature: Show/Hide Event Details
    Scenario: An event element is collapsed by default
        Given the user has opened the app
        When the event list is displayed
        Then the event details for each event should be hidden by default

    Scenario: User can expand an event to see details
        Given the event list is displayed
        And the events details are hidden
        When the user clicks on the show details button for an event
        Then the event details for that event should be expanded to view

    Scenario: User can collapse an event to hide details
        Given the event details are expanded for an event
        When the user clicks on the hide details button for that event
        Then the event details for that event should be collapsed and hidden
