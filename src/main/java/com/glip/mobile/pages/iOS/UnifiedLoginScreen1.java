//package com.glip.mobile.pages.iOS;
//
//import io.appium.java_client.MobileElement;
//
//public class UnifiedLoginScreen1 {
//    public static final String USER_NAME_FIELD_ID = "UserNameTextField";
//    public static final String PASSWORD_FIELD_ID = "PasswordTextField";
//    public static final String SIGN_IN_BTN_ID = "SignInButton";
//    public static final String SSO_EMAIL_PAGE_JUDGE_WAIT_XPATH = "//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIAStaticText[2]";
//    public static final String SIGN_VIA_RC_JUDGE_WAIT_XPATH = "//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIAStaticText[2]";
//    public static final String SSO_BUTTON_XPATH = "//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIALink[2]/UIAStaticText[1]";
//    public static final String SSO_BUTTON_NEW_XPATH = "//*[contains(@label,'Single Sign-on')]";
//    public static final String SSO_BUTTON_NEW_XPATH_UNIFIED_LOGIN = "//button[@id='sso']";
//    public static final String SSO_EMAIL_INPUT_XPATH = "//XCUIElementTypeWebView//XCUIElementTypeTextField";
//    public static final String SSO_EMAIL_PAGE_SUBMIT_XPATH = "//XCUIElementTypeWebView//XCUIElementTypeButton[@name='Submit']";
//    public static final String OKTA_USERNAME_ID = "Username";
//    public static final String OKTA_PASSWORD_ID = "Password";
//    public static final String OKTA_SIGNIN_XPATH = "//XCUIElementTypeButton[@name='Sign In']";
//
//    public static final String IDP_TITLE_ID = "IdP Integration Login";
//    public static final String IDP_USERNAME_XPATH = "//XCUIElementTypeWebView[1]/XCUIElementTypeOther[1]" +
//            "/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]" +
//            "/XCUIElementTypeOther[5]/XCUIElementTypeOther[1]";
//    public static final String IDP_PASSWORD_XPATH = "//XCUIElementTypeSecureTextField";
//    public static final String IDP_LOGIN_ID = "Login";
//
//    public static final long DEFAULT_TIMEOUT = 20;
//    public static final String TITLE_TEXT = "Sign In";
//    //    public static final String SIGN_IN_BTN_ID = "Sign In";
//    public static final String LOADING_INDICATOR_ID = "GrayLoading";
//    public static final String SIGN_IN_WITH_GOOGLE_BTN_ID = "SignInGoogleButton";
//    public static final String FORGOT_PASSWORD_BTN_ID = "Forgot your password?";
//    public static final String CONTINUE_BTN_ID = "Continue";
//    public static final String SIGN_IN_VIA_RC_BTN_ID = "SignInRingCentralButton";
//    public static final String SIGN_IN_VIA_ATT_BTN_ID = "SignInOfficeHandButton";
//    public static final String NO_ACCOUNT_ID = "NoAccountTipLabel";
//    public static final String EMAIL_ADDRESS_XPATH = "//XCUIElementTypeTextField[@value='Email Address']";
//    public static final String CREATE_ID= "Create";
//    public static final String UNIFIED_LOGIN_EMAIL_OR_PHONE_NUMBER_XPATH = "//input[@id='credential']";
//    public static final String UNIFIED_LOGIN_NEXT_BTN_XPATH = "//button[@id='loginCredentialNext']";
//    public static final String UNIFY_LOGIN_GOOGLE_BTN_XPATH = "//button[@id='googleBtn']";
//    public static final String UNIFY_LOGIN_PASSWORD_XPATH = "//input[@id='password']";
//    public static final String UNIFY_LOGIN_SIGN_IN_BTN_XPATH = "//button[text()='Sign In']";
//    public static final String UNIFIED_LOGIN_EXTENSION_XPATH = "//input[@id='pin']";
//    public static final String UNIFY_LOGIN_SSO_BTN_XPATH = "//button[@data-test-automation-id=\"ssoBtn\"]";
//
//    @Override
//    public MobileElement getUnifyLoginUserNameField(long timeOutInSeconds) {
//        return getElementByXpath(UNIFIED_LOGIN_EMAIL_OR_PHONE_NUMBER_XPATH,timeOutInSeconds);
//    }
//
//    @Override
//    public void inputUnifyLoginUserName(String userName) {
//        MobileElement element=getUnifyLoginUserNameField(DEFAULT_TIMEOUT_IN_SECONDS);
//        element.clear();
//        element.sendKeys(userName);
//    }
//
//    @Override
//    public MobileElement getNextBtn() {
//        return getElementByXpath(UNIFIED_LOGIN_NEXT_BTN_XPATH, DEFAULT_TIMEOUT);
//    }
//
//    @Override
//    public void clickNextBtn() {
//        getNextBtn().click();
//    }
//
//    @Override
//    public MobileElement getUnifiedLoginCredentialNextBtn() {
//        return getElementByXpath(UNIFIED_LOGIN_NEXT_BTN_XPATH, DEFAULT_TIMEOUT);
//    }
//
//    @Override
//    public void clickUnifiedLoginCrendentialNextBtn() {
//        getUnifiedLoginCredentialNextBtn().click();
//    }
//
//    @Override
//    public MobileElement getUnifyLoginPasswordField(long timeOutInSeconds) {
//        return getElementByXpath(UNIFY_LOGIN_PASSWORD_XPATH,timeOutInSeconds);
//    }
//
//    @Override
//    public void inputUnifyLoginPassword(String password) {
//        MobileElement element=getUnifyLoginPasswordField(DEFAULT_TIMEOUT_IN_SECONDS);
//        element.clear();
//        element.sendKeys(password);
//    }
//
//    @Override
//    public MobileElement getUnifyLoginSignInBtn() {
//        return getElementByXpath(UNIFY_LOGIN_SIGN_IN_BTN_XPATH,DEFAULT_TIMEOUT_IN_SECONDS);
//    }
//
//    @Override
//    public void clickUnifyLoginSignInBtn() {
//        getUnifyLoginSignInBtn().click();
//    }
//
//    @Override
//    public MobileElement getUnifyLoginGoogleBtn() {
//        return getElementByXpath(UNIFY_LOGIN_GOOGLE_BTN_XPATH, DEFAULT_TIMEOUT_IN_SECONDS);
//    }
//
//    @Override
//    public void clickUnifyLoginGoogleBtn() {
//        getUnifyLoginGoogleBtn().click();
//    }
//
//    @Override
//    public MobileElement getUnifyLoginSSOBtn() {
//        return getElementByXpath(UNIFY_LOGIN_SSO_BTN_XPATH, DEFAULT_TIMEOUT_IN_SECONDS);
//    }
//
//    @Override
//    public void clickUnifyLoginSSOBtn() throws InterruptedException {
//        switchInCtx(DEFAULT_TIMEOUT_IN_SECONDS);
//        getUnifyLoginSSOBtn().click();
//    }
//
//
//
//
//}
