package com.glip.mobile.drivermanager;

import org.openqa.selenium.By;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.ios.IOSDriver;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;


/**
 * Created by zora.zheng on 06/08/2017.
 * 构建一个IOSAppiumManager类，这个类用单例模式设计（私有的构造函数+静态的类对象）
 * 实例化类的一个对象，这个对象用private（其他类不可直接调用，可以通过调类的静态方法getnstance（）使用该对象）和 static（其他类在用该对象的时候可以直接使用，不需要再new对象），
 *
 */
public class IOSAppiumManager { //定义一个类
    //
    private static IOSAppiumManager iosdriver= new IOSAppiumManager(); //实例化类的一个对象
    private IOSDriver driver; //定义对象的一个属性

    //获取单例对象iosdriver并将它暴露出去，给需要的类使用
    public static IOSAppiumManager getInstance(){  //getInstance是获取实例化对象的意思
        return iosdriver;
    } //定义一个方法

    //构造函数，方法名跟类名是完全一致的，私有的其他地方用不了
    private IOSAppiumManager() {
        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability(CapabilityType.BROWSER_NAME, "");
        capabilities.setCapability("platformName", "iOS");
        capabilities.setCapability("newCommandTimeout", "30000");
        capabilities.setCapability("deviceName", "iPhone Simulator");
        capabilities.setCapability("platformVersion", "11.1");
        capabilities.setCapability("udid", "B48D0FB9-6013-4A5F-8ED8-D2863FD9ACAE");
        capabilities.setCapability("app", "/Users/zora.zheng/Downloads/Glip.app");
        capabilities.setCapability("autoAcceptAlerts", "True");
        capabilities.setCapability("unicodeKeyboard", "True");
        capabilities.setCapability("resetKeyboard", "True");
        try {
            driver = new IOSDriver(new URL("http://127.0.0.1:4723/wd/hub"), capabilities);
        }catch (MalformedURLException e){
            e.printStackTrace();
        }

    }
    //通过getAppiumDriver（）方法将属性driver对外提供
    public IOSDriver getAppiumDriver(){
        return driver;
    }



    /**
     * 等待元素加载
     *
     * @param driver           driver
     * @param by               定位方式
     * @param waitTime         等待时间
     */
    public static void waitForVisible(IOSDriver driver, final By by, int waitTime) {
        WebDriverWait wait = new WebDriverWait(driver, waitTime);
        for (int attempt = 0; attempt < waitTime; attempt++) {
            try {
                driver.findElement(by);
                break;
            } catch (Exception e) {
                driver.manage().timeouts().implicitlyWait(1, TimeUnit.SECONDS);
            }
        }
        wait.until(ExpectedConditions.visibilityOfElementLocated(by));
    }
}


