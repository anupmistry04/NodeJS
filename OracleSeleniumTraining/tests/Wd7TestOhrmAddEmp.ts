import { Builder, By, WebDriver, WebElement } from 'selenium-webdriver'
import 'chromedriver';

//IIF 
(async function () {
    //open browser
    let driver: WebDriver = await new Builder().forBrowser("chrome").build();

    //maximize window
    await driver.manage().window().maximize();

    //300 seconds
    //pageload: page navigation timeout
    //implicit : find element timeout
    await driver.manage().setTimeouts({ pageLoad: 20000, implicit: 10000 });

    //navigate to google 
    await driver.get("https://opensource-demo.orangehrmlive.com/").then(() => {
        console.log("navigation completed");
    });

    await driver.findElement(By.id("txtUsername")).sendKeys("admin");
    await driver.findElement(By.name("txtPassword")).sendKeys("admin123");
    await (await driver.findElement(By.id("btnLogin"))).click();

    await (await driver.findElement(By.linkText("PIM"))).click();
    await (await driver.findElement(By.partialLinkText("Add Emp"))).click();

    let lstElms:WebElement[] = await driver.findElements(By.className('formInputText'));

    await lstElms[0].sendKeys("web");
    await lstElms[2].sendKeys("driver");

    await driver.findElement(By.id("btnSave")).click();

})();