class Person6{

    firstname: string ;
    lastname: string ;

    constructor(first, last){

        this.firstname=first;
        this.lastname=last;
      
    }


}

class Programer6 extends Person6{

 

    address: string;

}



var obj34 = new Programer6("Anup", "Mistry"); // if no child constructor , them this values is assigned to parent constructor & viceversa