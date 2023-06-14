 //let {demo2,demoadd2, Employee11} = require('./P18ModuleDemo') // always pass in {}
 let m = require('./P18ModuleDemo')  //import doesn't work in js




let a= new m.Employee11(); 
m.demo2();
a.demo12();
console.log(m.demoadd2(2,3));


//  let a= new Employee11();  
//  a.demo12();
// demo2();
// demo12(); //Employee11.demo12() if demo12 is static method 
// console.log(demoadd2(2,3));