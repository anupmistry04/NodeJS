export class Person2{

    firstname: string ;
    lastname: string ;

    constructor(fname: string, lname){  //only can have 1 constructor in ts
        this.firstname= fname;
        this.lastname=lname;
    }

    getFullname(){

      return this.firstname + "-" + this.lastname;
      
  }
}

var aPerson2 = new Person2("Anup", "Mistry");  
console.log(aPerson2.getFullname);