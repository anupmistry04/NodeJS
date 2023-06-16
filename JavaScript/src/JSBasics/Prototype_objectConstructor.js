
// A constructor is a function that creates an instance of a class which is typically called 
// an “object”. In JavaScript, a constructor gets called when you declare an object using 
// the new keyword. The purpose of a constructor is to create an object and set values if 
// there are any object properties present.

const { Console } = require("console");
const { LogManager } = require("selenium-webdriver/lib/logging");


//https://www.youtube.com/watch?v=Uhp9xPCILno - this and new keyword
//https://www.youtube.com/watch?v=06FbxpDYEQY&t=205s - proto (above two videos will clear functional constructor entirly)

function createTool(name, version){

    this.name=name;
    this.version= version;
    this.model ="IIF";

    //console.log(this)

    this.start= function(){
        console.log(this.name+ " started")
    } 

}


createTool.prototype.VersionDetails1={ //or createTool.VersionDetails1={} or createTool.__proto__.VersionDetails1={}//VersionDetails is outside __proto__ as an entire object .ie console.log( toolData.VersionDetails1.expDate);

    mfgDate: "2020",
    expDate:  "2022",

    stop:  function(){     // this refers to VersionDetails1 objects but not entire tooolData

           console.log(this) ;
         }

}

let t1= new createTool("selenium", 4);
let t2= new createTool("playWrite", 5);


// t1.VersionDetails1.stop();
 //console.log(t1.name);
// console.log(t2.name);
 //t1.start();
// t2.start();

// t1.end =function(){

//     console.log(this.name+ "  end")
// }

//  t1.end();
//t2.end();
//-----------------------------------------------------------
// createTool.end12 =function(){  //incorrect

//     console.log(this.name+ "  end")
// }

// let t3= new createTool("selenium", 4);
// t3.end12();
//-----------------------------------------------------------

// createTool.prototype.stop =  function(){  //it goes inside proto// what if new keyword //.__proto__. doesn't work

//     console.log(this.name + "  stop")  //name is available here //assigned when an object is created. not -console.log(createTool);
// }

//  t1.stop();
//  t2.stop();

//console.log(createTool);

console.log("1--------------------------------------------------------------");
 //let obj =  new createTool("a","b");  //run in colsole scope |  Inside fuction scope. 
//obj.start();
// obj.stop();
 //console.log(obj); 

 console.log("2--------------------------------------------------------------");

 var obj1=createTool("a","b") //return nothing window object, obj is global scope, start() is functional scope.obj1.start() will not work
 //obj1.start(); //error
 //console.log(obj1);

 console.log("3--------------------------------------------------------------");

 //createTool("a","b")  // this refers to global (window) object


// createTool.prototype.subVersion= "12.12";


// console.log(t1.subVersion);
// console.log(t2.subVersion);


// let dt= new Array(10,20,30,40);
// Array.prototype.print = function(){
//     console.log(this);
// }

// dt.print();

