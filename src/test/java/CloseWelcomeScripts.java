import com.glip.mobile.drivermanager.IOSAppiumManager;
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
 * Created by zora.zheng on 07/08/2017.
 */
public class CloseWelcomeScripts {
    private static IOSDriver driver = IOSAppiumManager.getInstance().getAppiumDriver(); //定义一个对象还没初始化
    public static WelcomePage welcomePage = PageFactory.initElements(driver,WelcomePage.class);


//    private IOSDriver driver; //定义一个对象还没初始化
//    public WelcomePage welcomePage;
//
//    @Before
//    public void before() {
//        //初始化对象
//        driver = IOSAppiumManager.getInstance().getAppiumDriver(); //直接获取driver，因为对象iosdriver是静态的，所以不会再初始化一遍。
//        welcomePage = PageFactory.initElements(driver,WelcomePage.class); //寻找到welcome page
//
//    }

    @Given("^App isn't logged in$")
    public void appIsnTLoggedIn() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
    }

    @When("^<WelcomePage>User tap \"([^\"]*)\" button$")
    public void userTapButton(String arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        welcomePage.tapSignInButton();
    }

    @Then("^User get to SignIn screen$")
    public void userGetToSignInScreen() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("User signs in");
    }

}
