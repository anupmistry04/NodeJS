function  add(a, b){    

    return a+b;

    
}

let result1 =add(10,20);

console.log(result1);

console.log(add(10));// doesn't gives error in JS

console.log(add(10,20,30));// doesn't gives error in JS, gives error in ts(in ts we can't pass more parameter)

//************************************************************************************************************* */

function  *add(a, b, c){    //overriding the previous function, calls the latest function

    if(c==undefined){     
        return a+b;
    }

    return a+b+c;

    
}

//************************************************************************************************************* */

// function  add(a, b, c:number):any{    //return type and parameter type can only be used in typescript
//    return a+b+ c;    
// }


//*************************************************************************************************************** */

// var fn=(a=1,b)=>{  //only var , can't use let and const

// return a+"hello";
// }

// console.log(fn(1));


//*************************************************************************************************************** */


var fn=v=>{  //only var , can't use let and const

    console.log(v)
    }