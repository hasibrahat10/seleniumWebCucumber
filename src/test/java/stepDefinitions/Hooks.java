package stepDefinitions;

import io.cucumber.java.After;
import io.cucumber.java.Before;


import java.util.concurrent.TimeUnit;

public class Hooks extends BasePage {
    @Before
    public void setUpDriver() {
        startDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.get("http://testautomationpractice.blogspot.com/");
    }

    @After
    public void tearDown() {
        stopDriver();
    }

}
