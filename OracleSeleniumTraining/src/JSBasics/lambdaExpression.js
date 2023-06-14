
function  add(a, b){    

    return a+b;

    
}
//////////////////
var v =function(a, b){    

    return a+b;

    
}

//////////////////
let fn1 =(a,b)=>{   //

    return a*b;
}

//paranthesis is optional for single parameter function --(1)
let fn2 =v=>{
    return v+2;
}

//functional block is optional if there is onlyy one return statement
//statement becomes the default return value                                --(2)
let fn3 =(a,b)=>a+b;

//combining 1 and 2
let fn4=v=>v;


console.log("result1:-"+fn1(1,2));
console.log("result2:-"+fn2(345));
console.log("result3:-"+fn3(6,6));
console.log("result4:-"+fn4(766));


//-----------------------------------------------------------------------------------

let data14 =[1,2,3,4,5,6];
data14.forEach(function(v){

    console.log("result5:-"+v);

});

// call the callback everytime with value
data.forEach(v=>console.log("result6:-"+v*2));




let data12 =[10,20,30,40,50,60];
console.log("result7:-"+data12.map(v=>v*v));
//console.log(data1);

//incorrect return statement is missing
// let fn11 =(a,b)=>console.log("result8:-"+ a+b); 
// fn11(100+100);