

class Google {
    
     middleName="Kumaresh";  //can't use let, const,var
      
    // constructor(first,last){
        
    //     this.first=first;
    //     this.last=last;
    //     console.log("Parent11");
      
    // }

    search(a){   //if search=function(a){, then always calls parents
        console.log("Parent search "+ a);
    }

    static verify(a){
        console.log("Parent verify "+a);
    }

     done(){
        console.log("Parent done");
    }

}

class Gmail extends Google{

    state="M.S";
    constructor(first, last, pin, state){
        
        //this.first="we"; super comes first, 
     super(first, last);//super is mandatory if we have child constructor, doesn;t matter if parents constructor is present or not . else throws error
     this.first=pin; // child winds if parent has same parameter
        this.pin =pin;
        this.state =state;
        
    }


    search(){     
        console.log("child search");
    }

    static verify(){
        console.log("child verify ");
    }

    done(){
        console.log("child done");
    }
}



//let obj = new Gmail("Anup", "Mistry", "226819", "M.S" )

// console.log(obj.firstname);
// console.log(obj.last);
// obj.search();  //parent, If we remove search() method from parent and child has static search(). then this call will throw error
// //Gmail.search();
// console.log(obj.state);
// console.log(Gmail.state);


module.exports = {Gmail}