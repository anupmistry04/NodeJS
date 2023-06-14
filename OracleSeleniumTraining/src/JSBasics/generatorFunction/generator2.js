let idMaker = function*() {
    var index = 0;
    while (true)
      yield index++;

      //persorm some operation
  }
  
  var gen = idMaker();
  
  console.log(gen.next().value); // 0
  console.log(gen.next().value); // 1
  console.log(gen.next().value); // 2
  console.log(gen.next()); // 3