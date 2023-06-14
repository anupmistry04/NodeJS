// A CommonJS module is essentially a reusable piece of JavaScript which exports specific objects,
//  making them available for other modules to requirein their programs.
 
  class Employee11{ // export  doesn't work in JS
  
   

   demo12() {   // export function doesn't work in JS
    console.log("demo called from p18111111");
}

  demoadd1(x,y) {
    return x+y
}
  }


  function demo2() {   // export function doesn't work in JS
  console.log("demo called from p18");
}

function demoadd2(x,y) {
  return x+y
}

module.exports = {demo2,demoadd2,Employee11}

