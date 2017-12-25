package com.glip.mobile;

import io.appium.java_client.MobileElement;

import java.util.List;

public interface IMobilePage extends IPage {
    MobileElement getElementByName(String name) ;
    MobileElement getElementByName(String name, long timeoutInSeconds);
    MobileElement getElementById(String name, long timeoutInSeconds);
    MobileElement getElementByCustomId(String id, long timeoutInSeconds);
    List<MobileElement> getElementsById(String id, long timeoutInSeconds);
    MobileElement getElementById(String id);
    List<MobileElement> getElementsById(String id);
    MobileElement getElementByXpath(String xpath);
    MobileElement getElementByXpath(String xpath, long timeoutInSeconds);
    List<MobileElement> getElementsByXpath(String xpath, long timeoutInSeconds);
    MobileElement getElementByClassName(String className, long timeoutInSeconds);
    MobileElement scrollToElement(String name, Boolean... isLastItem) throws InterruptedException;
    MobileElement scrollToElementWithFailureRetry(String name, Boolean... isLastItem) throws InterruptedException;
    MobileElement exactScrollToElement(String name) throws InterruptedException;
    //    boolean checkIfPageLoaded() throws Exception;
    public enum Direction {
        /**
         * Up direction
         */
        UP,
        /**
         * Down direction
         */
        DOWN,
        /**
         * Left direction
         */
        LEFT,
        /**
         * Right direction
         */
        RIGHT
    }



}
