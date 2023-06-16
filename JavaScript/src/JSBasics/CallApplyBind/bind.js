//https://www.youtube.com/watch?v=75W8UPQ5l7k

var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function(){
        console.log(this.registrationNumber + " " + this.brand);
    }
}


 let demoDisplay= function(){
    console.log(this.registrationNumber + " " + this.brand);
}


car.displayDetails();  
car.displayDetails(car);

demoDisplay(car); // undefined undefined


console.log("11------------------------------------------------------");

//But what if we want to borrow a method? Well, this won’t work as the “this” will be now assigned to the global context
// which doesn’t have neither the registrationNumber nor the brand property.
var myCarDetails =  car.displayDetails;
myCarDetails();  //undefined    //this works in case of constructor function--> Prototype_objectConstructor

console.log("22------------------------------------------------------");

var myCarDetails = car.displayDetails.bind(car); 
myCarDetails(); // GA12345 Toyota

console.log("33------------------------------------------------------");

var myCarDetails1 = demoDisplay.bind(car); 
myCarDetails1(); // GA12345 Toyota


console.log("44------------------------------------------------------");



//continue - bind1.js

