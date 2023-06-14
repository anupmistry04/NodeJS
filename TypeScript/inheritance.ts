class Person4{

    firstname: string ;
    lastname: string ;

    constructor(){
        this.firstname="Anup";
        this.lastname="Mistry";
    }

    greet65 = function():number { //if return type is mentioned then return 6 is mandatory

      console.log("hllo");
      
      return 6;
  }

  public greet2 =():number => {

    console.log("hllo");
    return 6;
}


greet3 =() => {

    console.log("hllo");
    return 6; //check no error even if return type is not mentioned
}

greet4 =():any => { //return type as any can have return 6 

    console.log("hllo");
   
}


}

class Programer extends Person4{


    address: string;

    constructor(){
        super();
        this.address= "Hyderabad";
       
    }


    greet(){

      console.log("hello there");
      this.firstname;
    
      
      
  }

  greetNew(){

    this.greet(); //child
     //parent
      
    }


}



var aPerson3 = new Programer();  
console.log(aPerson3.greet()); //calll child class
 

var aPerson4: Person4 = new Programer();  
console.log(aPerson4.greet()); // child

