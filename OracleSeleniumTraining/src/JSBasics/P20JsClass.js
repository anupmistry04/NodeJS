 class Employee{
    age=20;

     name;
    
   get Age(){  //getters cant have any parameters
       return this.age 
   }

   get Name(){
    return this.name;
}

   set Age(age){
        if (age>65) {
            console.log("Employee age should be less than or equal 65", this.age);            
        }else if (age<18) {
            console.log("Employee age should be greater than or equal 18");            
        }else{
            this.age=age;
            console.log("Employee age updated:"+this.age);            
            }
   }



   set Name(name){

    
    this.name=name;

    console.log("Employee name updated:"+ this.name);   
            
        
}


 

}

let emp1 = new Employee();
emp1.Age=2633;
emp1.Name="anup";
//console.log(emp1.Age("anup"));
console.log(emp1.Name);
console.log(emp1.Age);

// emp1.Age=17;
// console.log(emp1.Age);
// emp1.Age=30;
// console.log(emp1.Age);

