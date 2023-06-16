function* generateSequence() {
    yield "mozilla";

    console.log("after yield 1");
    yield 2;
    yield 3;
  }
  
  let generator = generateSequence();
  
  for(let value of generator) {
    console.log(value); // mozilla, then 2, then 3
  }