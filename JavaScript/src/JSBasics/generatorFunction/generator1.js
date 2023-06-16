//generator suspends the fucntion
// he result of next() is always an object with two properties:
// value: the yielded value.
// done: true if the function code has finished, otherwise false.
//__proto__ constructor has next() ,return() and throw() method
function *generator(i,j) { //function* generator(i) {}
    
  console.log("---");

    yield i;
    yield i + 10;
    yield j + 10;
  }
  
  const gen = generator(10,2);
  
  console.log(gen.next().done);
  // expected output: 10
  
  // console.log(gen.next().value);
  // // expected output: 20
  // console.log(gen.next().value);

//--------------------------------------------------------
console.log("----------------------------------------------------");



  const foo = function* () {
    yield 10;
    yield 20;
  };
  
  const bar = foo();
  console.log(bar.next()); // {value: 10, done: false}