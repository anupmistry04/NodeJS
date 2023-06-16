class Foo {
    *generator () {
      yield 1;
      yield 2;
      yield 3;
    }
  }
  
  const f = new Foo ();
  const gen = f.generator();
  
  // console.log(gen.next()); // { value: 1, done: false }
  //  console.log(gen.next()); // { value: 2, done: false }
  // console.log(gen.next()); // { value: 3, done: false }
  //  console.log(gen.next()); // { value: undefined, done: true }
  //  console.log(gen.next());

   for( let i of gen){
     console.log(i)
   }