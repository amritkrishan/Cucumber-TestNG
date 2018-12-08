package stepdefs;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

import java.io.File;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;


public class ServiceHooks {

    public static WebDriver driver;

    @Before
    public void initializeTest() throws InterruptedException {
        // Code to setup initial configurations
        Path workspacePath1 = Paths.get(System.getProperty("user.dir"),"chromedriver");
        File file1 = new File(workspacePath1.toString());
        Path workspacePath2 = Paths.get(System.getProperty("user.dir"),"geckodriver");
        File file2 = new File(workspacePath2.toString());
        if(Browser.getBrowser(Thread.currentThread().getId()).equalsIgnoreCase("chrome")) {
            System.setProperty("webdriver.chrome.driver", file1.getAbsolutePath());
            driver = new ChromeDriver();
        }
        if(Browser.getBrowser(Thread.currentThread().getId()).equalsIgnoreCase("firefox")) {
            System.setProperty("webdriver.gecko.driver", file2.getAbsolutePath());
            driver = new FirefoxDriver();
        }
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    }

    @After
    public void embedScreenshot(Scenario scenario) {
        driver.quit();
        if (scenario.isFailed()) {
            try {
                // Code to capture and embed images in test reports (if scenario fails)
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}
