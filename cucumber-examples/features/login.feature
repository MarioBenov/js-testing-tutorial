@App
Feature: Testing the app

  Background:
    When I view the app in the browser

  Scenario: The app opens
    Then I see the Login page

  Scenario: The user can login
    #And I enter "testUser" in the first input
    #And I enter "testPassword" in the second input
    #And I click on the "Login" button
    And I login with username "testUser" and password "testPassword"
    Then I see the main app content
    #And I wait

  Scenario Outline: There is an error message for invalid username
    And I login with username "<USERNAME>" and password "<PASSWORD>"
    #Then I don't see the main app content
    And I see the error message "<MESSAGE>"
    #And I wait

    Examples:
      | USERNAME | PASSWORD | MESSAGE             |
      | noUser   | a        | User does not exist |
      | testUser | wrongPassword | Incorrect username/password |
