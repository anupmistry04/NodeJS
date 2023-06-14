
// __proto__   watch--> //https://www.youtube.com/watch?v=OpPxrhvYg_0

//_proto__ is internal property of an object, pointing to its prototype. 
//You can find instanceof relationships by comparing a function's prototype to an
 //object's __proto__ chain, and you can break these relationships by changing prototype.

let toolData={

    name: "selenium",
    version: 4

}


//---------------------------------------------------------------------------------------------------
let VersionDetails={

    mfgDate: "2020",
    expDate:  "2022"

}

 //toolData.prototype=VersionDetail; //-INCORRECT  WHY CHECK-objectMethodSample.JS
 toolData.__proto__=VersionDetails;    //outside __proto__,add two objects in javascript. ValueLabs interview
//  console.log( toolData.mfgDate);
// console.log( toolData.expDate);

//  console.log("result13:-"+ toolData.constructor.name);
// console.log("result14:-"+ typeof(toolData));
// console.log("result15:-"+ (toolData instanceof Object));
//---------------------------------------------------------------------------------------------------

 toolData.VersionDetails1={  //VersionDetails is outside __proto__ as an entire object .ie console.log( toolData.VersionDetails1.expDate);

    mfgDate: "2020",
    expDate:  "2022",

    stop:  function(){     // this refers to VersionDetails1 objects but not entire tooolData

           console.log(this) ;
         }

}

//toolData.VersionDetails1.stop();
 
//---------------------------------------------------------------------------------------------------


// toolData.prototype.stop =  function(){     // this is incorrect - only used with function object not simple object 

//     console.log(this.name + "  stop")  
// }



toolData.__proto__.stop1 =  function(){        // this is correct.object is inside __proto__

         console.log(this.name + "  stop")  
         console.log(this)  
     }

     toolData.stop2 =  function(){        // this is correct, object is outside __proto__

        console.log(this.name + "  stop")  
    }


    
    
    
   