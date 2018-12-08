package stepdefs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.testng.annotations.Parameters;

import java.util.concurrent.TimeUnit;


public class StepDefinitions {
    @Given("^I am on the \"([^\"]*)\" page on URL \"([^\"]*)\"$")
    public void i_am_on_the_page_on_URL(String arg1, String arg2) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        ServiceHooks.driver.get("https://"+arg2);
        ServiceHooks.driver.manage().timeouts().implicitlyWait(5000, TimeUnit.MILLISECONDS);
    }

    @When("^I fill in \"([^\"]*)\" with \"([^\"]*)\"$")
    public void i_fill_in_with(String arg1, String arg2) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        if(arg1.equals("Username")) {
            ServiceHooks.driver.findElement(By.xpath("//input[contains(@class,'_2zrpKA')]")).sendKeys(arg2);
        }
        else if(arg1.equals("Password")) {
            ServiceHooks.driver.findElement(By.xpath("//input[contains(@class,'_2zrpKA _3v41xv')]")).sendKeys(arg2);
        }
    }

    @When("^I click on the \"([^\"]*)\" button$")
    public void i_click_on_the_button(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        ServiceHooks.driver.findElement(By .xpath("//button[@class='_2AkmmA _1LctnI _7UHT_c']")).click();
    }

    @Then("^I should see \"([^\"]*)\" message$")
    public void i_should_see_message(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        /*String actual=ServiceHooks.driver.findElement(By .xpath("//div[@class='JAUzCh']")).getText();
        Assert.assertEquals(actual,"You are not registered with us. Please sign up.");*/
        ServiceHooks.driver.findElement(By .xpath("//*[text()='"+arg1+"']")).isDisplayed();
    }

    @Then("^I should see the \"([^\"]*)\" button$")
    public void i_should_see_the_button(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        ServiceHooks.driver.findElement(By .xpath("//*[text()='"+arg1+"']")).isDisplayed();
    }

}
