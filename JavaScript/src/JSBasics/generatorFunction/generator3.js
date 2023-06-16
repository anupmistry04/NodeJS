function* anotherGenerator(i) {
    yield i + 100;
    yield i + 200;
    //perform some operation
    yield i + 300;
    //back to generator()

    
  }
  
  function* generator(i) {
    yield i;
    yield* anotherGenerator(i); //this function has global scope
    yield i + 10;
    yield i + 20;

  }
  
  var gen = generator(10);
  
  console.log(gen.next().value); // 10
  console.log(gen.next().value); // 110
   console.log(gen.next().value); // 210
  // console.log(gen.next().value); // 310
  // console.log(gen.next().value); // 20
  // console.log(gen.next());