// Currying is a process in functional programming in which we can transform a function with multiple
//  arguments into a sequence of nesting functions.


(function initCounter(x) {

    let p = 1;
    return function Count(y) {
  
      return function check(z) {
  
        console.log(x + y + z)
        return x + y + z + p
      }
  
    }
  
  })(10)(10)(10);
  
  
  
 // console.log(initCounter(10)(10)(10));