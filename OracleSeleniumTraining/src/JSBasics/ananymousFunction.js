// let fn1 = function (a, b, c) {  //anonymous function is without name and assigned to a variable //rest is for defining 

//     console.log(a + b + c)

// }


//  fn1 = function (a, b, c) {  //anonymous function is without name and assigned to a variable //rest is for defining 

//     console.log(a + b + c)

// }
//----------------------------------------------
// function calculator(x,y, act){

//     act(x,y);
// }
// //-------
// calculator(10,20,function(a,b){  //retun

//     console.log(a*b);
// });
//------
function calculator(x,y, act){

    console.log(act(x,y)+x+"111");
};
//-------
calculator(10,20,function(a,b){  //retun

    console.log(1+1);

    return  a*b+1;
});

//------
//  let fn2 = function(a,b){

//     console.log(a*b);
// }


// calculator(10,20,fn2);
//----------------------------------------------------