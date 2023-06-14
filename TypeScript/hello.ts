var fn12 = ()=>  'response';
var a : number;
var b : string;
var c : boolean;
var d : undefined; //whole data type takes only one value i.e undefined
var e : null;
console.log('gffdd');
a=10; //a=anup - incorrect
b= "Anup";
c=true;

var myArr : number[];
myArr=[];
myArr=[1,2,3,4]; //we can't add other data types in myArr apart from numbers
myArr.push(6);
var inte :number;
inte=myArr.pop();

var arr;
arr=[1,'String', true]; //js

//Tuple
var arr1: [number, boolean];
arr1 = [1, true]; //order should be same

console.log("hhhhh");

////////////////////Inplicit Typing////////////////////////////////////////
var a1 =10;
var b1 = "hello";
var c1 = true;


function greet(): string{
    return "Good Morning";
}

var greeting = greet(); // variable greeting is implecitly assigned as String

var greetin ;
greetin = greet(); //implecitly assignment doesn't work in case of different lines


///////////////any & union /////////////////////////////////////////////

var v: any;  // we want to assign multiple type to a variable
 v=123;
 v= "String" ;


 var v1: string| boolean;  // we want to assign limitedtype to a variable
 v1= true;
 v1= "String" 
 //v1= 123;  error
