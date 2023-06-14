
 school="2nd";
function createTool(name, version){

    this.name=name;
    this.version= version;
    this.model ="IIF";
    
    console.log(this.name)
    console.log(this.school)

    return function(){
        console.log(this.name);
      
    }

}




createTool.prototype.stop =  function(){  

    console.log(this.name + "  stop")  
}




console.log("11--------------------------------------------------------------");


 let obj =  new createTool("a","b");  //this refers to inside function scope, obj is global,  function scope variable cannot be access ouside
 obj();//undefined, bcz refer to inside object
 
console.log("22--------------------------------------------------------------");
   new createTool("a","b")() 


 console.log("22--------------------------------------------------------------");

//  var obj1=createTool("a","b")  // this refers to global object
//  obj1();
 
 





