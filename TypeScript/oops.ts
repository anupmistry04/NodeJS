import {greet as greet1,Foo as fo, Foo} from './interface'


class Person{

      firstname: string ;
      lastname:string ;

      getFullname(){

        return this.firstname + "-" + this.lastname;
        console.log("dddf");

        
          
        
    }
}

var aPerson = new Person();   //var aPerson: Person = new Person();  WE DEFINE THE OBJECT TPYE AS PERSON ,By default also its person
var fi=aPerson.firstname= "Anup";
aPerson.lastname= "Mistry";

console.log(aPerson.getFullname);

console.log(fi);
console.log(aPerson);


var fn: string = greet();

var obj: Foo = new Foo();
obj.getFullName11();


