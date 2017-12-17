package com.glip.mobile.pages;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

/**
 * Created by zora.zheng on 07/08/2017.
 */
public class SignInPage extends BasePage{
//    @FindBy(id ="UserNameTextField")
//    public WebElement userNameInputField;
//    @FindBy(id ="PasswordTextField")
//    public WebElement passwordInputField;
//    @FindBy(id ="SignInButton")
//    public WebElement signInButton;
//
//    public void glipEmailLogin(String emailAddress, String password)  {
//        userNameInputField.clear();
//        userNameInputField.sendKeys(emailAddress);
//        passwordInputField.sendKeys(password);
//        signInButton.click();
//
//    }

    @FindBy(xpath = "//XCUIElementTypeApplication[@name=\"Glip\"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeWebView/XCUIElementTypeOther")
    public WebElement unifiedLoginScreen;

//    public static final String UNIFIED_LOGIN_EMAIL_OR_PHONE_NUMBER_XPATH = "//input[@id='credential']";
//    public static final String UNIFIED_LOGIN_NEXT_BTN_XPATH = "//button[@id='loginCredentialNext']";

    @FindBy(id = "credential")
    public WebElement accountFieldForUL;

    @FindBy(id = "loginCredentialNext")
    public WebElement butNext;




    public void glipEmailLogin(String accountInfo) {

//        accountFieldForUL.clear();
//        accountFieldForUL.sendKeys(accountInfo);
//    accountInputField



    }
}
