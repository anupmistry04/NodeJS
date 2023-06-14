function echo(arg:any):any{

    return arg;
}

var value:string = echo(12);

//////////////////using generics////////////
function echo1<T>(arg:T):T{  // generics says return type should be same as type of  agrument passed to the function

    return arg;
}

var value1:number = echo1(12); //we can't give value as string or boolean type(compare with above case)

////////////////////////////////////////////////

class Person8{

    firstname: string ;
    lastname: string ;

    constructor(first:string, last:string){

        this.firstname=first;
        this.lastname=last;
      
    }

    getfullname(){

        return this.firstname+ " "+ this.lastname;
    }


}

class employee extends Person8{

}

class manager extends Person8{

}

class director{

}


let emp= new employee("rohit","shetty");
let mgr= new manager("anup","mistry");
let dir = new director();


function personecho0(person:employee): manager{
    return person
}
var foo12 = personecho0(emp);

////////////

function personecho2<T>(person:T): T{
    return person
}

var foo114 = personecho2(dir);

////////////////

function personecho1(person:Person8): Person8{
    return person
}
var foo13 = personecho1(emp);
  /////////////////////////

  function personecho3<T extends Person8>(person:T): T{
    return person
}

var foo115 = personecho3(emp);
    
   