@App
Feature: Testing the app

  Scenario: The app opens
    When I view the app in the browser
    Then I see the Login page

  Scenario: The user can login
    When I view the app in the browser
    #And I enter "testUser" in the first input
    #And I enter "testPassword" in the second input
    #And I click on the "Login" button
    And I login with username "testUser" and password "testPassword"
    Then I see the main app content
    #And I wait

  Scenario: There is an error message for invalid username
    When I view the app in the browser
    And I login with username "badUser" and password "testPassword"
    Then I don't see the main app content
    #And I see an error message
    #And I wait
