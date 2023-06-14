const someObj = {
    generator: function*() {  // or  *generator () {}
      console.log("1")
      yield 'a';
      console.log("2")
      yield 'b';
    }
  }
  
  const gen = someObj.generator()
  
   console.log(gen.next()); // { value: 'a', done: false }
   console.log(gen.next()); // { value: 'b', done: false }
  console.log(gen.next()); // { value: undefined, done: true }
 