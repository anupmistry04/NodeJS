
function  add(a, b){    

    return a+b;

    
}


const fn = function(a: string,b){  //only var , can't use let and const

return a+b;

}

console.log(fn("Anup",5));




var fn1 = ():any=>{  //only var , can't use let and const


}

var sum = add(1,"foo"); //add(1,2,3)  valid in js but takes only 2 arguments
console.log(sum);

//////////////////////////////////////////////////////

function add1(a:number, b:number, c?){  //c? indicates optional , option argument should be at the end, (c?: number)

    return a+b;
}

var sum1  = add1(1,2);
console.log(sum1);

////////////////////////////////////////////////////////////

function add2(a, b, c=0) : number{  //c=0 if no argument is passed, return value of a function can also be specified

    return a+b;
}

var sum2  = add2(1,2,3);
console.log(sum1);


/////////////////////////////////////////////////////////////////
