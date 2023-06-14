let {Gmail} = require('./Inheritance2') 


let obj1 = new Gmail("Anup", "Mistry", "226819", "Telangana" );


console.log(obj1.first);
console.log(obj1.last);
console.log(obj1.pin);
console.log(obj1.state);

obj1.search("me");  //always child irrespective of parameter
obj1.search(); 
Gmail.verify("a"); //always child irrespective of parameter
obj1.done()
