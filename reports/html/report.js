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
  "duration": 13157656877,
  "status": "passed"
});
formatter.match({
  "location": "UnifiedLoginScripts.userHasValidEmail()"
});
formatter.result({
  "duration": 4813042,
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
  "duration": 1236748701,
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
  "duration": 598965330,
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters. (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 551 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027LMXMN066.local\u0027, ip: \u0027fe80:0:0:0:141e:76f8:b562:a12%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.12.6\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: io.appium.java_client.ios.IOSDriver\nCapabilities [{app\u003d/Users/zora.zheng/Downloads/Glip.app, networkConnectionEnabled\u003dfalse, databaseEnabled\u003dfalse, deviceName\u003diPhone Simulator, platform\u003dMAC, newCommandTimeout\u003d30000, platformVersion\u003d11.1, webStorageEnabled\u003dfalse, locationContextEnabled\u003dfalse, browserName\u003d, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, unicodeKeyboard\u003dTrue, platformName\u003diOS, udid\u003dB48D0FB9-6013-4A5F-8ED8-D2863FD9ACAE, resetKeyboard\u003dTrue, autoAcceptAlerts\u003dTrue}]\nSession ID: cecff873-3991-4199-a45c-47fb30c639fb\n*** Element info: {Using\u003did, value\u003dloginCredentialNext}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.ios.IOSDriver.execute(IOSDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:62)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.ios.IOSDriver.findElement(IOSDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:453)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementById(DefaultGenericMobileDriver.java:70)\n\tat io.appium.java_client.AppiumDriver.findElementById(AppiumDriver.java:1)\n\tat io.appium.java_client.ios.IOSDriver.findElementById(IOSDriver.java:1)\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.ios.IOSDriver.findElement(IOSDriver.java:1)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy15.click(Unknown Source)\n\tat com.glip.mobile.pages.SignInPage.glipEmailLogin(SignInPage.java:44)\n\tat UnifiedLoginScripts.userInputsEmail(UnifiedLoginScripts.java:24)\n\tat ✽.When User inputs Email \"zoraandtest8@gmail.com\"(glipEmailSignIn.feature:10)\n",
  "status": "failed"
});
formatter.match({
  "location": "GlipEmailSignInScripts.userCanSignInApp()"
});
formatter.result({
  "status": "skipped"
});
});