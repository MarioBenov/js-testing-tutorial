@App
Feature: Testing the app

  Scenario: The app opens
    When I view the app in the browser
    Then I see the Login page
