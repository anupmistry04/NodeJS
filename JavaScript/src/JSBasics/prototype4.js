

function createTool( version){

    
    this.version= version; //this is avaialbe globally
    this.model ="IIF-global";  
    console.log(this);// prints 4
    
}


let t1=  createTool( 4);
console.log(model); //global


function createTool1( version){

    
    this.version= version; //this refers to createTool1 function
    this.model1 ="IIF";
    
    console.log(this); // prints 4
    
}

let t2=   new createTool1(4);
console.log(model1);//current scope createTool

