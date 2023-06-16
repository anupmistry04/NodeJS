//What if we would like to pass a parameter to the displayDetails function? We can use the bind method again. 
//The following argument of the bind() method will provide an argument to the function bind() is called on

var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function(ownerName, ownerSurname){
        console.log(ownerName + " "+ ownerSurname + ", this is your car: " + this.registrationNumber + " " + this.brand);
    }
}

    var car1 = { 
        registrationNumber: "ZRX23W",
        brand: "Skoda"
    
        }



let applyDisplay= function(ownerName, ownerSurname){
    console.log(ownerName + " "+ ownerSurname + ", this is your car: " + this.registrationNumber + " " + this.brand);

}


applyDisplay(car, "Aabhinav", "Das");//incorrect
applyDisplay(car, ["Aabhinav", "Das"]);//incorrect
car. displayDetails(car, "Aabhinav", "Das");
console.log("11------------------------------------------------------");

var myCarDetails = car.displayDetails.bind(car); //bound creates a new bound function when wraps the original fn object
myCarDetails( "Vivian", "Singh");
//OR
var myCarDetails = car.displayDetails.bind(car,"Vivian", "Singh"); //bound creates a new bound function when wraps the original fn object
myCarDetails();

var myCarDetails1 =applyDisplay.bind(car, "Rajeev", "Nath"); // new keydord doesn't work 
myCarDetails1();


console.log("11------------------------------------------------------");

car.displayDetails.apply(car, ["Hari", "Ram"]); //first argument is always object being assigned, other arguemntsa re used by function

 applyDisplay.apply(car, ["Miktesh", "Gupta"]); //when we work with array


 console.log("22------------------------------------------------------");


 
 car.displayDetails.call(car, "Anup", "Mistry");  // call takes argument separately, apply takes array
 car.displayDetails.call(car1, "Anup", "Mistry");
 applyDisplay.call(car, "Aabhinav", "Das");

// Similar but slightly different usage provide the call() and apply() methods which also belong to the
//  Function.prototype property.
