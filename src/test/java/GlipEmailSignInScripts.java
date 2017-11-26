import com.glip.mobile.drivermanager.IOSAppiumManager;
import com.glip.mobile.pages.E911Page;
import com.glip.mobile.pages.SignInPage;
import com.glip.mobile.pages.WelcomePage;
import cucumber.api.PendingException;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.ios.IOSDriver;
import org.openqa.selenium.support.PageFactory;

/**
 * Created by zora.zheng on 06/08/2017.
 */
public class GlipEmailSignInScripts {
    private IOSDriver driver  = IOSAppiumManager.getInstance().getAppiumDriver();
    public SignInPage signinPage = PageFactory.initElements(driver, SignInPage.class);
    public E911Page e911Page = PageFactory.initElements(driver, E911Page.class);

//    private IOSDriver driver;
//    public SignInPage signinPage;
//    public E911Page e911Page;
//
//
//    @Before
//    public void before() {
//        driver = IOSAppiumManager.getInstance().getAppiumDriver();
//        signinPage = PageFactory.initElements(driver, SignInPage.class);
//        e911Page = PageFactory.initElements(driver, E911Page.class);
//
//    }


    @Given("^User has valid Email and Password$")
    public void userHasValidEmailAndPassword() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
    }

    @When("^User inputs Email \"([^\"]*)\" and Password \"([^\"]*)\"$")
    public void userInputsEmailAndPassword(String emailAddress, String passWord) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        signinPage.glipEmailLogin(emailAddress,passWord);
    }

    @Then("^User can sign in app$")
    public void userCanSignInApp() throws Throwable {
        if(!e911Page.e911Display()){
            throw new RuntimeException();
        }
    }


}
