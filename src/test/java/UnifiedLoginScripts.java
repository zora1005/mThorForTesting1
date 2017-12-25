import com.glip.mobile.drivermanager.IOSAppiumManager;
import com.glip.mobile.pages.iOS.SignInPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import io.appium.java_client.ios.IOSDriver;
import org.openqa.selenium.support.PageFactory;

public class UnifiedLoginScripts {


    private IOSDriver driver  = IOSAppiumManager.getInstance().getAppiumDriver();
    public SignInPage signinPage = PageFactory.initElements(driver, SignInPage.class);

    @Given("^User has valid Email$")
    public void userHasValidEmail() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //throw new PendingException();
    }

    @When("^User inputs Email \"([^\"]*)\"$")
    public void userInputsEmail(String accountInfo) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
//        signinPage.glipEmailLogin(accountInfo);
    }
}
