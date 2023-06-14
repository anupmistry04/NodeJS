export class Employee{

   private age:number=20;

   public getAge():number{
       return this.age;
   }



   public setAge(age:number):void{
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
emp1.setAge(66);
console.log(emp1.getAge());

emp1.setAge(17);
console.log(emp1.getAge());
emp1.setAge(30);
console.log(emp1.getAge());