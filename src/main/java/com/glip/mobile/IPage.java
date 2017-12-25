package com.glip.mobile;

public interface IPage {
    Boolean checkIfElementExistByName(String name);
    Boolean checkIfElementExistByName(String name, int timeout);

}
