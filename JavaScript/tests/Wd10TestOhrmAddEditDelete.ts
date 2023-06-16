import { Builder, By, until, WebDriver, WebElement } from 'selenium-webdriver'
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

    await driver.findElement(By.xpath("//input[@id='txtUsername']")).sendKeys("admin");
    await driver.findElement(By.xpath("//input[@id='txtPassword']")).sendKeys("admin123");
    await (await driver.findElement(By.xpath("//input[@id='btnLogin']"))).click();

    await (await driver.findElement(By.xpath("//a[normalize-space()='PIM']"))).click();
    await driver.sleep(1000);
    
    await (await driver.findElement(By.xpath("//a[contains(text(),'Add Emp')]"))).click();
    
    await driver.findElement(By.xpath("//input[@id='firstName']")).sendKeys("web");

    await driver.findElement(By.xpath("//input[@id='lastName']")).sendKeys("driver");

    await driver.findElement(By.id("btnSave")).click();

    await (await driver.findElement(By.xpath("//input[@id='btnSave' and @value='Edit']"))).click();

    await (await driver.findElement(By.xpath("(//input[@name='personal[optGender]'])[1]"))).click();

    await (await driver.findElement(By.xpath("//select[@id='personal_cmbMarital']//option[text()='Married']"))).click();
    
    await (await driver.findElement(By.xpath("//label[text()='Date of Birth']/following-sibling::img"))).click();

    //select date
    await (await driver.findElement(By.xpath("//select[@class='ui-datepicker-year']//option[text()='1990']"))).click();
    await (await driver.findElement(By.xpath("//select[@class='ui-datepicker-month']//option[text()='Jan']"))).click();
    await (await driver.findElement(By.linkText("20"))).click();

    let chk = await driver.findElement(By.css("#personal_chkSmokeFlag"));
    if (!await chk.isSelected()) {
        await chk.click();
    }

    let empID = await (await driver.findElement(By.id("personal_txtEmployeeId"))).getAttribute("value");

    await driver.findElement(By.id("btnSave")).click();

    await driver.wait(until.elementLocated(By.xpath("//input[@id='btnSave' and @value='Edit']")),10000);

    await (await driver.findElement(By.linkText("Employee List"))).click();

    await driver.wait(until.elementLocated(By.linkText(empID)),10000);

    await driver.actions().move({origin:await driver.findElement(By.linkText(empID))}).perform();
    await (await driver.findElement(By.xpath("//a[text()='"+empID+"']/../..//input"))).click();
    await (await driver.findElement(By.id("btnDelete"))).click();
    await (await driver.findElement(By.id("dialogDeleteBtn"))).click();

})();