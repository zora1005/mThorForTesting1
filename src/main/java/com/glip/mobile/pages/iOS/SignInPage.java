package com.glip.mobile.pages.iOS;

import com.glip.mobile.drivermanager.IOSAppiumManager;
import com.glip.mobile.pages.iOS.BasePage;
import io.appium.java_client.ios.IOSDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.Set;

/**
 * Created by zora.zheng on 07/08/2017.
 */
public class SignInPage extends BasePage {
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



//    public static final String UNIFIED_LOGIN_EMAIL_OR_PHONE_NUMBER_XPATH = "//input[@id='credential']";
//    public static final String UNIFIED_LOGIN_NEXT_BTN_XPATH = "//button[@id='loginCredentialNext']";
//
////    @FindBy(id = "credential")
//    @FindBy(id = "//input[@id='credential']")
//    public WebElement accountFieldForUL;
//
////    @FindBy(id = "loginCredentialNext")
//    @FindBy(xpath = "//button[@id='loginCredentialNext']")
//    public WebElement butNext;




    public void glipEmailLogin(String accountInfo) {

        setWebContext(); //设置当前的上下文为网页
        WebElement accountFieldForUL = IOSAppiumManager.waitForVisible(driver, By.id("credential"),60);
        if(accountFieldForUL != null){
            accountFieldForUL.sendKeys(accountInfo);
        }
        WebElement butNext = IOSAppiumManager.waitForVisible(driver, By.id("loginCredentialNext"),60);
        if(butNext != null){
            butNext.click();
        }
    }

    public void glipEmailLoginPassword(String passwordInfo) {

        setWebContext(); //设置当前的上下文为网页
        WebElement passwordFieldForUL = IOSAppiumManager.waitForVisible(driver, By.id("password"),60);
        if(passwordFieldForUL != null){
            passwordFieldForUL.sendKeys(passwordInfo);
        }
        WebElement butSignIn = IOSAppiumManager.waitForVisible(driver, By.xpath("//*[@id='pageContent']/div/div/div/form/div/div[2]/div/div[2]/button") ,60);
        if(butSignIn != null){
            butSignIn.click();
        }

        setNativeContext();
    }
}
