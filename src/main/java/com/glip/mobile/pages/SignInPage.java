package com.glip.mobile.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

/**
 * Created by zora.zheng on 07/08/2017.
 */
public class SignInPage extends BasePage{
    @FindBy(id ="UserNameTextField")
    public WebElement userNameInputField;
    @FindBy(id ="PasswordTextField")
    public WebElement passwordInputField;
    @FindBy(id ="SignInButton")
    public WebElement signInButton;

    public void glipEmailLogin(String emailAddress, String password)  {
        userNameInputField.clear();
        userNameInputField.sendKeys(emailAddress);
        passwordInputField.sendKeys(password);
        signInButton.click();

    }

}
