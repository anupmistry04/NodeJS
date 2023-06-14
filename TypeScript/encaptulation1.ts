class Person13{   // only 3 modifiers : public , private and protected(within the class and child class only)

    readonly address : string ="Hyderabad"

   constructor(private firstname: string, private lastname: string ){  //ts method method to assign value to private variables
       
      
   }


   getfistname() : string{

       return this.firstname;
   }
   getlastname() : string{

       return this.lastname;
   }
     
 }


var obj13 = new Person13("Anup", "Mistry");

var fname= obj13.getfistname;
var lname : any = obj13.getlastname();

  