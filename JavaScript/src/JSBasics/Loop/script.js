
const { Console } = require("console");
var measureData = require("./SCM_VCS_PREREQ_CreateMeasureData.json");


 var measureKeyCount= Object.keys(measureData.MeasureName).length;
 var measureValueCount= Object.values(measureData.MeasureName).length;
 var measureKey= Object.keys(measureData.MeasureName)
 var measureValue= Object.values(measureData.MeasureName);
 


 console.log(measureKeyCount,"-",measureValueCount)

 console.log("----------------------------------")

 for(let i of measureKey){

    console.log("-",i)
 }

 console.log("---------------------------------")

 for(let i in measureValue){

    console.log("-->>",i,"--", measureValue[i])

 }
 console.log("44---------------------------------")

 for(let i in measureData.MeasureName){

    console.log(i+ "----->"+ measureData.MeasureName[i])
 }