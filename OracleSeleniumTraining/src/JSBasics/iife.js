//Immediately Invoked Function Expression - IIFE
// An Immediately-invoked Function Expression is a way to execute functions immediately, as soon as they are created.
//  IIFEs are very useful because they don't pollute the global object, and they are a simple way to isolate variables 
//  declarations

(function (a) {
    var userName = "Steve";

    console.log("abcd", a);
    
    // function display(name)
    // {
    //     console.log("abcd", a);
    // }

   
  })("000000");



  ////////////////////////////////////////