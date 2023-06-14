

class Person456{

    firstname: string ;
    lastname: string ;

    constructor(fname: string, lname){  
        this.firstname= fname;
        this.lastname=lname;
    }

    getFullname(){

      return this.firstname + "-" + this.lastname;
      
  }
}

var aPerson456 :Person456 = new Person456("Anup", "Mistry");  
console.log(aPerson456.getFullname);
console.log(aPerson456);  // it will print the instance variables unlike java (java prints address if to string method is not provided)