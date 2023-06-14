class Person12{   //java script doesnt have the concept of private method/variables but typescrypt does

     private firstname: string ;
    private lastname: string ;

    constructor(lname:string){  //1st method to assign value to private variables
        
        this.lastname=lname;
    }

    setfirstname(first){ //2st method to assign value to private variables
        this.firstname
    }

    getfistname() : string{

        return this.firstname;
    }
    getlastname() : string{

        return this.lastname;
    }
      
  }


var obj1:Person12 = new Person12("Mistry");
var obj2 = new Person12("Mistry");
obj1.setfirstname("Anup");
var lm : any = obj1.getlastname();
   


