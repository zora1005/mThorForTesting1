Feature: glipEmailSignIn feature

  @login @p0
  Scenario: Accept E911
    Given User has never closed E911 before
    Given User get to E911 screen
    When <WelcomePage>User tap "Sign In to Glip" button
    When User inputs Email "zoraandtest8@gmail.com" and Password "Test!123"
    When <E911Page> User accept E911
    Then User doesn't get alert
