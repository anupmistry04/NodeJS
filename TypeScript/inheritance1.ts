class Person5{

    firstname: string ;
    lastname: string ;

    constructor(first, last){

        this.firstname=first;
        this.lastname=last;
      
    }


}

class Programer5 extends Person5{

 

    address: string;

    
    constructor(addr){  //we can also pass parent constructor value from here
        
        super("","");
        this.address=addr;

    }    
   
      


}



var obj33 = new Programer5("hyd");  

 

