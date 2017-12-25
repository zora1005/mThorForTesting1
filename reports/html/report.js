$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("glipEmailSignIn.feature");
formatter.feature({
  "line": 1,
  "name": "glipEmailSignIn feature",
  "description": "",
  "id": "glipemailsignin-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Unified Login with email",
  "description": "",
  "id": "glipemailsignin-feature;unified-login-with-email",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@login"
    },
    {
      "line": 5,
      "name": "@p0"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "App isn\u0027t logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User has valid Email",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "\u003cWelcomePage\u003eUser tap \"Sign In to Glip\" button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User inputs Email \"zoraandtest8@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User can sign in app",
  "keyword": "Then "
});
formatter.match({
  "location": "CloseWelcomeScripts.appIsnTLoggedIn()"
});
formatter.result({
  "duration": 279129484652,
  "status": "passed"
});
formatter.match({
  "location": "UnifiedLoginScripts.userHasValidEmail()"
});
formatter.result({
  "duration": 3779348,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In to Glip",
      "offset": 23
    }
  ],
  "location": "CloseWelcomeScripts.userTapButton(String)"
});
formatter.result({
  "duration": 1346591694,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "zoraandtest8@gmail.com",
      "offset": 19
    }
  ],
  "location": "UnifiedLoginScripts.userInputsEmail(String)"
});
formatter.result({
  "duration": 69181,
  "status": "passed"
});
formatter.match({
  "location": "GlipEmailSignInScripts.userCanSignInApp()"
});
formatter.result({
  "duration": 2351564769,
  "status": "passed"
});
});