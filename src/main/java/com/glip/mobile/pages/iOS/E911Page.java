package com.glip.mobile.pages.iOS;


import com.glip.mobile.drivermanager.IOSDriverWait;
import com.glip.mobile.pages.iOS.BasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedCondition;

import javax.annotation.Nullable;

public class E911Page extends BasePage {
    @FindBy (id ="Accept")
    public WebElement e911AcceptBtn;

    @FindBy (id ="Decline")
    public WebElement e911DeclineBtn;

//    public static E911Page e911Page= new E911Page(); //实例化类的一个对象
//
//    //获取单例对象iosdriver并将它暴露出去，给需要的类使用
//    public static E911Page getInstance(){  //getInstance是获取实例化对象的意思
//        return e911Page;
//    } //定义一个方法


//    public static E911Page getE911Page(){
//        return new E911Page();
//    }

    public boolean e911Display() {
//wait for 60s if WebElemnt show up less than 60s , then return , until 60s
        WebElement e911Title = new IOSDriverWait(driver, 60)
                .until(new ExpectedCondition<WebElement>() {

                    @Nullable
                    public WebElement apply(@Nullable WebDriver webDriver) {

                        return webDriver.findElement(By.xpath("//XCUIElementTypeApplication[@name=\"Glip\"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther"));

                    }


                });
        if(e911Title != null){
            System.out.println("Sign in app successfully");
        }
        return e911Title != null;
    }

    public void acceptE911(){
        WebElement e911Content = new IOSDriverWait(driver, 60)
                .until(new ExpectedCondition<WebElement>() {

                    @Nullable
                    public WebElement apply(@Nullable WebDriver webDriver) {
                        return webDriver.findElement(By.xpath("//XCUIElementTypeApplication[@name=\"Glip\"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther"));
                    }

                });

        if(e911Content != null){
            e911AcceptBtn.click();
        }

    }

    public void decineE911(){
        WebElement e911Content = new IOSDriverWait(driver, 60)
                .until(new ExpectedCondition<WebElement>() {

                    @Nullable
                    public WebElement apply(@Nullable WebDriver webDriver) {
                        return webDriver.findElement(By.xpath("//XCUIElementTypeApplication[@name=\"Glip\"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeWebView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther"));
                    }

                });

        if(e911Content != null){
            e911DeclineBtn.click();
        }
    }
}
