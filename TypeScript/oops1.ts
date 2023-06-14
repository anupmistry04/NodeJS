 class Person1{

    firstname: string ;
    lastname: string ;

    constructor(){
        this.firstname="Anup";
        this.lastname="Mistry";
    }

    private method(){


     // return "";
    }

    public fn = function(a,b){


    }

  
    public fn1 =():number=>{    //public fn1 =()=>{}

      return 1;
      
    }
    

    getFullname(){

      return this.firstname + "-" + this.lastname;
      
  }
}

var aPerson1 = new Person1();  
console.log(aPerson1.getFullname);

