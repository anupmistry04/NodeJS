var x= function(){
    console.log("this is callback function");

    
}


var y =(callback)=>{

    console.log("this is main function");
    callback();

}

y(x);

