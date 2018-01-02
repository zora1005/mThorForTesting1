import com.glip.mobile.drivermanager.IOSAppiumManager;
import com.glip.mobile.pages.iOS.E911Page;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.appium.java_client.ios.IOSDriver;
import org.openqa.selenium.support.PageFactory;

//import static com.glip.mobile.pages.iOS.E911Page.getE911Page;

/**
 * Created by zora.zheng on 07/08/2017.
 */
public class CloseE911Scripts {
    private static IOSDriver driver = IOSAppiumManager.getInstance().getAppiumDriver();
    public static E911Page e911Page = PageFactory.initElements(driver,E911Page.class);


//    private IOSDriver driver; //定义一个对象还没初始化
//    public WelcomePage welcomePage;

//    @Before
//    public void before() {
//        //driver = IOSAppiumManager.getInstance().getAppiumDriver();
//        e911Page = PageFactory.initElements(driver,E911Page.class);
//
//    }


    @Given("^User get to E(\\d+) screen$")
    public void userGetToEScreen(int arg0) throws Throwable {

//        if(!getE911Page().e911Display()){
        if(!e911Page.e911Display()){
            throw new RuntimeException();
        }
    }

    @When("^<E(\\d+)Page> User accept E(\\d+)$")
    public void ePageUserAcceptE(int arg0, int arg1) throws Throwable {
        e911Page.acceptE911();
    }

    @Then("^User doesn't get alert$")
    public void userDoesnTGetAlert() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Given("^User has never closed E(\\d+) before$")
    public void userHasNeverClosedEBefore(int arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
    }
}
