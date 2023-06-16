// JavaScript variables can belong to the local or global scope.
// Global variables can be made local (private) with closures.
// A function can access all variables defined inside the function, like this.
//https://www.youtube.com/watch?v=bC-ilFHSt4s
var z=10000;
function initCounter(par) {  //A closure is the combination of a function bundled together (enclosed)

    let x = 1;   
    return function Count(par1) {
        
       
        console.log(par);
        console.log(par1);
        console.log(z);
        //return "abc"
    }

}

let orangeCounter = initCounter("hola");  //it holds the reference
orangeCounter("iii")
//console.log(orangeCounter("iii"))


//or

console.log(initCounter("hola11")("jjj"));  //currying in JS. MULTIPLE ()()()

//console.log(orangeCounter("iii"));
// console.log(orangeCounter());
// console.log(orangeCounter());


// let appleCounter = initCounter();
// console.log(appleCounter);
// console.log(appleCounter());
// console.log(appleCounter());
console.log("---------------------------------------------------");

function doAddition(x) {

    return function add(y){

        return x+y;
    }
    
}

let ref =doAddition(1);
console.log(ref(2));

console.log(doAddition(2)(2));


// let ref1 = ref(2);
// console.log(ref1());
