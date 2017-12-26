import com.glip.mobile.drivermanager.IOSAppiumManager;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import io.appium.java_client.AppiumDriver;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;


/**
 * Created by zora.zheng on 06/08/2017.
 */

@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"json:target/cucumber/cucumber.json", "html:target/cucumber", "pretty"},features = "src/features/SignIn")
//@CucumberOptions(format = {"junit:reports/junit/junit.xml", "html:reports/html"})

public class GlipAcceptanceTest {

//    @BeforeClass
//    public void before() {
//        AppiumDriver driver;
//        driver = IOSAppiumManager.getInstance().getAppiumDriver();
//    }


}
