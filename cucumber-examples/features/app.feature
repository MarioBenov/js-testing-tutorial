@App
Feature: Testing the app

  Background:
    When I view the app in the browser
    And I login with username "testUser" and password "testPassword"

  Scenario Outline: Nav menu
    When I click the "<MENU_ITEM>" nav item
    #And I wait
    Then I see the "<PAGE>" main content

    Examples:
      | MENU_ITEM | PAGE              | URL        |
      | Dashboard | Dashboard Content | /dashboard |
      | Projects  | Projects Content  | /projects  |
