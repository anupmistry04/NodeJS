




class Person14{  

    readonly name : string;
    readonly address : string ="Hyderabad";  // read only type of variable can be assinged only at two places
                                                // 1. during variable declaration, 2. constructor

   constructor(name ){  
       this.name=name; 
   }

     
 }


var obj14 = new Person14("Anup");

