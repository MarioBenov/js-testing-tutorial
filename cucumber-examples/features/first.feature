Feature: Is it Friday yet?
  Everybody wants to know when it's Friday

  Scenario: Sunday isn't Friday
    Given today is "Sunday"
    And tomorrow is Monday
    When I ask whether it's Friday yet
    And something else
    Then I should be told "Nope"
    And something other result

  Scenario: Sunday isn't Friday
    Given today is "Friday"
    #And tomorrow is Saturday
    When I ask whether it's Friday yet
    And something else
    Then I should be told "Yep"
    And something other result
