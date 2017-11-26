Feature: glipEmailSignIn feature

  @login @p0
  Scenario: Sign In with Glip Email Account
    Given App isn't logged in
    Given User has valid Email and Password
    When <WelcomePage>User tap "Sign In to Glip" button
    When User inputs Email "zoraandtest8@gmail.com" and Password "Test!123"
    Then User can sign in app



  @login @p0
  Scenario: Accept E911
    Given User get to E911 screen
    When <E911Page> User accept E911
    Then User doesn't get alert

