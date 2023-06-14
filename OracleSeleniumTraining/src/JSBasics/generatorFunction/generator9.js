function* createTool(){  



    yield 1;
    yield 2;
    yield 3;

}
  
  let generator =  new createTool();///incorrect,generator function is not a constructor function
  
  for(let value of generator) {
    console.log(value); // 1, then 2, then 3
  }