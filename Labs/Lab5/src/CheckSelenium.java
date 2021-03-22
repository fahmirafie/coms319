import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class CheckSelenium {
	public static void main(String[] args) {
		// Set system property (change your path in second arguments
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\fahmi\\Desktop\\coms319\\Labs\\Lab5\\src\\chromedriver_win32\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		String baseUrl = "https://www.google.com";
		String expectedTitle = "Google";
		String actualTitle = "";
		// launch Chrome and direct it to the Base URL
		driver.get(baseUrl);
		// get the actual value of the title
		actualTitle = driver.getTitle();
		if (actualTitle.contentEquals(expectedTitle)) {
			System.out.println("Test Passed!");
		} else {
			System.out.println("Test Failed!");
		}
		// close Chrome
		driver.close();

	}
}