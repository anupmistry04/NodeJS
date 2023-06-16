//Passing arguments into Generators

function* logGenerator() {
    console.log(0);
    console.log( yield);
    console.log( yield);
    console.log( yield);
  }
  
  var gen = logGenerator();
  
  // the first call of next executes from the start of the function
  // until the first yield statement
  gen.next();             // 0
  gen.next('pretzel');    // 1 pretzel
  // gen.next('california'); // 2 california
  // gen.next('mayonnaise'); // 3 mayonnaise