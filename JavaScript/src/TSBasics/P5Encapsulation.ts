export class Employee{

   private age:number=20;

   public get Age():number{
       return this.age;
   }

   public set Age(age:number){
        if (age>65) {
            console.log("Employee age should be less than or equal 65");            
        }else if (age<18) {
            console.log("Employee age should be greater than or equal 18");            
        }else{
            this.age=age;
            console.log("Employee age updated:"+this.age);            
        }
   }
}


let emp1 = new Employee();
emp1.Age=66;
console.log(emp1.Age);

emp1.Age=17;
console.log(emp1.Age);
emp1.Age=30;
console.log(emp1.Age);