//let { Builder, By } = require('selenium-webdriver');
import {By, Builder} from 'selenium-webdriver';  //devDependencies

//import 'chromedriver';
//require('chromedriver');

//IIF 
(async function () {
    //open browser
    let driver = await new Builder().forBrowser("chrome").build();

    //maximize window
    await driver.manage().window().maximize();

    //300 seconds
    //pageload: page navigation timeout
    //implicit : find element timeout
    await driver.manage().setTimeouts({ pageLoad: 20000, implicit: 10000 });

    //navigate to google 
    await driver.get("https://www.facebook.com/").then(() => {
        console.log("navigation completed");
    });

    //get title
    let title = await driver.getTitle();
    console.log(title);

    await (await driver.findElement(By.linkText("Create New Account"))).click();

    await Promise.all([

        driver.findElement(By.name("firstname")).sendKeys("sudhakar"),
        driver.findElement(By.name("lastname")).sendKeys("ka"),
        driver.findElement(By.name("reg_email__")).sendKeys("sudhakar1@qtpsudhakar.com"),                
        driver.findElement(By.id("password_step_input")).sendKeys("Asdf123!"),
    
        driver.findElement(By.xpath("//select[@id='year']/option[text()='1990']")).click(),
        driver.findElement(By.xpath("//select[@id='month']/option[text()='Jan']")).click(),
        driver.findElement(By.xpath("//select[@id='day']/option[text()='10']")).click(),
        driver.findElement(By.xpath("//label[text()='Female']")).click(),
        await driver.findElement(By.name("reg_email_confirmation__")).sendKeys("sudhakar1@qtpsudhakar.com")
    ]);

    await driver.findElement(By.name("websubmit")).click();

    //wait for 2 seconds
    await driver.sleep(2000);

    //close browser
    // await driver.quit();
})()