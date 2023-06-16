//https://www.youtube.com/watch?v=vGGOOYOXoQ4 - scope chaning
//https://www.youtube.com/watch?v=fXvgOG2XV_w  -use strict

function foo(){

    //console.log(fruit4);
    //console.log(fruit1);
    //console.log(fruit2);
    //console.log(fruit3);
    //let fruit3;
    let veg ="palak"
    console.log(veg);

    if(true){
        //let fruit1 = 'apple';        //exist in function scope
        //const fruit2 = 'banana';     //exist in block scope
         //fruit3 = 'strawberry';   //exist in block scope
        //fruit4 ="Grapes"; //global
       //   fruit2 = 'banana1'; 
       // console.log(fruit2);

          //veg ="gajar"
        console.log(veg);

    }
    console.log(veg);
    //console.log(fruit3);
    //console.log(fruit2);
    //console.log(fruit3);
}

// console.log(fruit1);
// console.log(fruit2);
// console.log(fruit3);
// console.log(fruit4);

foo();
// result:
// apple
// error: fruit2 is not defined
// error: fruit3 is not defined

//"use strict";
 //  userName ="kk";

// function woWork(){


//       var userName = "Steve1";

//     console.log(userName);
    


   
  //}

  //woWork();

  //console.log(userName);