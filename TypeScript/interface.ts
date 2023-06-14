//https://www.youtube.com/watch?v=IOzkOXSz9gE

interface Person11{

    firstname11:string; 
    lastname11: string;
    lastname12?: string; //optional


    getFullName11(v): string;
}



let someObj:Person11={
    firstname11: "Anup",
    lastname11: "Mistry",
    getFullName11:(v) =>  v
   
 }


 
const me = function(persion:Person11){

    console.log(persion.firstname11)

    console.log(persion.getFullName11("fun"))
 }

me(someObj);


export class Foo implements Person11{ //can contains extra parameters, but interface parametes are manditory
  
   
    firstname11: string;   
     lastname11: string;
     lastname111: string;
    
    getFullName11(): string {
        return this.firstname11 + "" + this.lastname11;
    }

}

 let  obj: Person11 = new Foo(); //someObj should contsain all the methods & variables as in Person11, it may cannot contains extra methods or vatiables









 export function greet():any{

    return 'Helllo Everyone'
 }