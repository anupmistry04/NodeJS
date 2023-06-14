let {Builder} = require('selenium-webdriver');
require('chromedriver');


(async function(){

let driver = await new Builder().forBrowser("chrome").build();

//await driver.get("https://google.com/");

await driver.get("https://google.com/").then(()=>{
    console.log("navigation completed");
});

//let title=await driver.getTitle();
//console.log(title);

await driver.getTitle().then(title=>{
    console.log(title);
})

await driver.quit();
})().catch((err)=>{
    console.log("failed to execute");
    console.log(err);
}).finally(()=>{
    console.log("execution completed");
});