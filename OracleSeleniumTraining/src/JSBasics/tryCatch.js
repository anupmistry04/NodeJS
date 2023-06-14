//types of error
//Js doesn't have multiple catch block like in.
//JS doens't have separate error and exception It only has error.

try{
    
    console.log(x);
    let x=10;

}catch(e){

    console.log(e.message);
    if(e instanceof ReferenceError){
        console.log("reference error handeling");
    }
    
 //throw e;
}finally{

    console.log("abc");
}