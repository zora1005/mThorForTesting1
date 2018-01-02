package com.glip.mobile.pages.iOS;

import com.glip.mobile.drivermanager.IOSAppiumManager;
import com.glip.mobile.pages.iOS.BasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

/**
 * Created by zora.zheng on 07/08/2017.
 */
public class WelcomePage extends BasePage {
    //查找元素
//    @FindBy(id ="SignInButton") //便捷的注解方式
//    public WebElement signInButton; //属性一般小写


    public void tapSignInButton() {
////wait for 60s if WebElemnt show up less than 60s , then return , until 60s
//        WebElement SignInButton = new IOSDriverWait(driver, 60)
//                .until(new ExpectedCondition<WebElement>() {
//
//                    @Nullable
//                    public WebElement apply(@Nullable WebDriver webDriver) {
//                        return webDriver.findElement(By.id("SignInButton"));
//                    }
//
//                });
        WebElement signInButton = IOSAppiumManager.waitForVisible(driver, By.id("SignInButton"),60);
        if(signInButton != null){
            signInButton.click();
        }

        //对查找的元素进行操作
//        signInButton.click();
        //法2：查找元素，并对元素进行操作
        //driver.findElement(By.id("SignInButton")).click();
    }
}
