class Person7{

    firstname: string ;
    lastname: string ;

   
    }


class Programer7 extends Person7{

    firstname: string ;
    lastname: string ;

    constructor(first, last){

        super();

        this.firstname=first;
        this.lastname=last;
      
    }

 

    address: string;

}



var obj35 = new Programer7("Anup", "Mistry");