let  p = {

    name: "Anup",
    company: "Oracle",
    location : "Hyderabad"
 }
 
  //******************************************************* */
 
 for(let key  in p){// of doesn't work
 
   //console.log(key+"--->"+p[key]);
 }


 console.log("-------------------------------")

 for(let key of p.name){
 
  //console.log(key);
  }

  //******************************************************* */

 let keys = Object.keys(p); // creates an array of key //same for value: "Object.values(p)"

 for(let key1 of keys){
 
   // console.log(key1);
  }


  //******************************************************* */
  let a = "anupMistry";

  for(let i of a){
    console.log(i)
  }
 