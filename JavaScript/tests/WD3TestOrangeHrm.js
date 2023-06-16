let { Builder, By } = require('selenium-webdriver');
require('chromedriver');

//IIF 
(async function () {
    //open browser
    let driver = await new Builder().forBrowser("chrome").build();

    //maximize window
    await driver.manage().window().maximize();

    //300 seconds
    //pageload: page navigation timeout
    //implicit : find element timeout
    await driver.manage().setTimeouts({pageLoad:20000,implicit:10000});

    //navigate to google 
    await driver.get("https://opensource-demo.orangehrmlive.com/").then(()=>{
        console.log("navigation completed");
    });

    //get title
    let title = await driver.getTitle();
    console.log(title);

    //enter user name
    await driver.findElement(By.id("txtUsername")).sendKeys("admin");

    //enter password
    await driver.findElement(By.id("txtPassword")).sendKeys("admin123");

    //click on login
    await driver.findElement(By.id('btnLogin')).click();       

    //wait for 2 seconds
    await driver.sleep(2000);

    //close browser
    await driver.quit();
})().catch(async (err)=>{
    console.log("failed to execute");
    console.log(err);
}).finally(()=>{
    console.log("execution completed");
});