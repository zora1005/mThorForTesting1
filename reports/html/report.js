$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("acceptE911.feature");
formatter.feature({
  "line": 1,
  "name": "glipEmailSignIn feature",
  "description": "",
  "id": "glipemailsignin-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Accept E911",
  "description": "",
  "id": "glipemailsignin-feature;accept-e911",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    },
    {
      "line": 3,
      "name": "@p0"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User has never closed E911 before",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User get to E911 screen",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "\u003cWelcomePage\u003eUser tap \"Sign In to Glip\" button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User inputs Email \"zoraandtest8@gmail.com\" and Password \"Test!123\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "\u003cE911Page\u003e User accept E911",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User doesn\u0027t get alert",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "911",
      "offset": 23
    }
  ],
  "location": "CloseE911Scripts.userHasNeverClosedEBefore(int)"
});
formatter.result({
  "duration": 18430913533,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat CloseE911Scripts.userHasNeverClosedEBefore(CloseE911Scripts.java:57)\n\tat ✽.Given User has never closed E911 before(acceptE911.feature:5)\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "911",
      "offset": 13
    }
  ],
  "location": "CloseE911Scripts.userGetToEScreen(int)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "zoraandtest8@gmail.com",
      "offset": 19
    },
    {
      "val": "Test!123",
      "offset": 57
    }
  ],
  "location": "GlipEmailSignInScripts.userInputsEmailAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "911",
      "offset": 2
    },
    {
      "val": "911",
      "offset": 24
    }
  ],
  "location": "CloseE911Scripts.ePageUserAcceptE(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CloseE911Scripts.userDoesnTGetAlert()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("glipEmailSignIn.feature");
formatter.feature({
  "line": 1,
  "name": "glipEmailSignIn feature",
  "description": "",
  "id": "glipemailsignin-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Sign In with Glip Email Account",
  "description": "",
  "id": "glipemailsignin-feature;sign-in-with-glip-email-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    },
    {
      "line": 3,
      "name": "@p0"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "App isn\u0027t logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User has valid Email and Password",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "\u003cWelcomePage\u003eUser tap \"Sign In to Glip\" button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User inputs Email \"zoraandtest8@gmail.com\" and Password \"Test!123\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User can sign in app",
  "keyword": "Then "
});
formatter.match({
  "location": "CloseWelcomeScripts.appIsnTLoggedIn()"
});
formatter.result({
  "duration": 518279,
  "status": "passed"
});
formatter.match({
  "location": "GlipEmailSignInScripts.userHasValidEmailAndPassword()"
});
formatter.result({
  "duration": 2753051,
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
  "duration": 892118880,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "zoraandtest8@gmail.com",
      "offset": 19
    },
    {
      "val": "Test!123",
      "offset": 57
    }
  ],
  "location": "GlipEmailSignInScripts.userInputsEmailAndPassword(String,String)"
});
formatter.result({
  "duration": 540745934,
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters. (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 472 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027LMXMN066.local\u0027, ip: \u0027fe80:0:0:0:8d5:52f8:1842:2c27%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.12.6\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: io.appium.java_client.ios.IOSDriver\nCapabilities [{app\u003d/Users/zora.zheng/Downloads/Glip.app, networkConnectionEnabled\u003dfalse, databaseEnabled\u003dfalse, deviceName\u003diPhone Simulator, platform\u003dMAC, newCommandTimeout\u003d30000, platformVersion\u003d11.1, webStorageEnabled\u003dfalse, locationContextEnabled\u003dfalse, browserName\u003d, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, unicodeKeyboard\u003dTrue, platformName\u003diOS, udid\u003dB48D0FB9-6013-4A5F-8ED8-D2863FD9ACAE, resetKeyboard\u003dTrue, autoAcceptAlerts\u003dTrue}]\nSession ID: 40cacf58-3e78-48c9-8647-f18a2d055ac4\n*** Element info: {Using\u003did, value\u003dUserNameTextField}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.ios.IOSDriver.execute(IOSDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:62)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.ios.IOSDriver.findElement(IOSDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:453)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementById(DefaultGenericMobileDriver.java:70)\n\tat io.appium.java_client.AppiumDriver.findElementById(AppiumDriver.java:1)\n\tat io.appium.java_client.ios.IOSDriver.findElementById(IOSDriver.java:1)\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.ios.IOSDriver.findElement(IOSDriver.java:1)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy15.clear(Unknown Source)\n\tat com.glip.mobile.pages.SignInPage.glipEmailLogin(SignInPage.java:18)\n\tat GlipEmailSignInScripts.userInputsEmailAndPassword(GlipEmailSignInScripts.java:44)\n\tat ✽.When User inputs Email \"zoraandtest8@gmail.com\" and Password \"Test!123\"(glipEmailSignIn.feature:8)\n",
  "status": "failed"
});
formatter.match({
  "location": "GlipEmailSignInScripts.userCanSignInApp()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 14,
  "name": "Accept E911",
  "description": "",
  "id": "glipemailsignin-feature;accept-e911",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@login"
    },
    {
      "line": 13,
      "name": "@p0"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User get to E911 screen",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "\u003cE911Page\u003e User accept E911",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User doesn\u0027t get alert",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "911",
      "offset": 13
    }
  ],
  "location": "CloseE911Scripts.userGetToEScreen(int)"
});
formatter.result({
  "duration": 590989310,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "911",
      "offset": 2
    },
    {
      "val": "911",
      "offset": 24
    }
  ],
  "location": "CloseE911Scripts.ePageUserAcceptE(int,int)"
});
formatter.result({
  "duration": 60692824261,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for com.glip.mobile.pages.E911Page$2@4ef27d66 (tried for 60 second(s) with 500 MILLISECONDS interval)\n\tat com.glip.mobile.drivermanager.IOSDriverWait.timeoutException(IOSDriverWait.java:70)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:232)\n\tat com.glip.mobile.pages.E911Page.acceptE911(E911Page.java:54)\n\tat CloseE911Scripts.ePageUserAcceptE(CloseE911Scripts.java:45)\n\tat ✽.When \u003cE911Page\u003e User accept E911(glipEmailSignIn.feature:16)\nCaused by: org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters. (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 435 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027LMXMN066.local\u0027, ip: \u0027fe80:0:0:0:8d5:52f8:1842:2c27%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.12.6\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: io.appium.java_client.ios.IOSDriver\nCapabilities [{app\u003d/Users/zora.zheng/Downloads/Glip.app, networkConnectionEnabled\u003dfalse, databaseEnabled\u003dfalse, deviceName\u003diPhone Simulator, platform\u003dMAC, newCommandTimeout\u003d30000, platformVersion\u003d11.1, webStorageEnabled\u003dfalse, locationContextEnabled\u003dfalse, browserName\u003d, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, unicodeKeyboard\u003dTrue, platformName\u003diOS, udid\u003dB48D0FB9-6013-4A5F-8ED8-D2863FD9ACAE, resetKeyboard\u003dTrue, autoAcceptAlerts\u003dTrue}]\nSession ID: 40cacf58-3e78-48c9-8647-f18a2d055ac4\n*** Element info: {Using\u003dxpath, value\u003d//XCUIElementTypeApplication[@name\u003d\"Glip\"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther}\n\tat sun.reflect.GeneratedConstructorAccessor11.newInstance(Unknown Source)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.ios.IOSDriver.execute(IOSDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:62)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.ios.IOSDriver.findElement(IOSDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:140)\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\n\tat io.appium.java_client.ios.IOSDriver.findElementByXPath(IOSDriver.java:1)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.ios.IOSDriver.findElement(IOSDriver.java:1)\n\tat com.glip.mobile.pages.E911Page$2.apply(E911Page.java:58)\n\tat com.glip.mobile.pages.E911Page$2.apply(E911Page.java:54)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:209)\n\tat com.glip.mobile.pages.E911Page.acceptE911(E911Page.java:54)\n\tat CloseE911Scripts.ePageUserAcceptE(CloseE911Scripts.java:45)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.match({
  "location": "CloseE911Scripts.userDoesnTGetAlert()"
});
formatter.result({
  "status": "skipped"
});
});