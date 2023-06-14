// dynamically typed language  means checking of the variable type at the runtime.
// Whereas in the Statically typed language the checking of the variables type at  compile time.

"use strict";

console.log("hello");



var x= 10;
var y =10;
var z= "20";

console.log( x+y);
console.log("result1:-", x+y);
console.log("result1:-"+ x+y);
console.log("result2:-", x+z);
console.log("result3:-", x+ Number(z));  //dynamic typing- no need to define type(JS,PYTHON are dynamic typing, other languages are static typing)
console.log("result4:-", String(x)+ z);
console.log("result5:-", typeof(x));


let st = new String("abc"); // string is an object
console.log("result13:-"+ st.constructor.name);
console.log("result14:-"+ typeof(st));
console.log("result15:-"+ (st instanceof String));

let st1= "abc"; //string is not an object
console.log("result16:-"+ st1.constructor.name);
console.log("result17:-"+ typeof(st1));
console.log("result18:-"+ (st1 instanceof String));

// The instanceof operator in JavaScript is used to check the type of an object at run time. 
// It returns a boolean value if true then it indicates that the object is an instance of a 
// particular class and if false then it is not.

var one = 1;
var one_again = 1;
var one_string = "1";  // note: this is string

console.log(one ==  one_again);  // true
console.log(one === one_again);  // true
console.log(one ==  one_string); // true.
console.log(one === one_string); // false. 

console.log("------------------------------------------------")

function DemoAdd(x,y=10,z) {
   
    return x+y+z;
    }

    console.log(DemoAdd(10,undefined,20));
    console.log(DemoAdd(10,null,20));
    console.log(DemoAdd(10,20));








