/* Immediately Invoked Function Expression (IIFE)  */

(function () {                               
    console.log("My favorite number is 3");
  })();
  
  (favNumber = function (num = 3) {   //function favNumber(num = 3) //didn't work here
    console.log("My favorite number is " + num);
  })();
  
  favNumber(5);
  
  
//https://www.youtube.com/watch?v=3cbiZV4H22c
  /////////////////////////////////////////////////////
  var a = 2;
  
  (function() {
    var a = 3;
    console.log(a);
  })();
  
  console.log(a);
  


  /////////////////////////////////////////////////////
  // let b = 2;
  
  // {
  //   var b = 3;
  //   console.log(b);
  // }
  
  // console.log(b);