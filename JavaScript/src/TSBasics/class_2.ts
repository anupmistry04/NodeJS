// use of super and this keyword to call parent method/variables

class Person_1{

    firstname: string ;
    

    constructor(){
        this.firstname="Anup";
       
    }

    greet(){ 

      console.log(this.firstname);

  }
}



class Person_2 extends Person_1{  

    public name : string;
   
   constructor(name){  
       super();
       this.name=name; 
   }

   thanks(){ 

    console.log(this.name + this.firstname);
    super.greet();
    this.greet();

}
     
 }


var obj_1:Person_2 = new Person_2("Anup");
obj_1.thanks();