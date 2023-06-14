//number, string, boolean

let n:number = 10;
let data:number[] = [10,20,30];

let data1:Array<number> = [10,20,30];

data1.push(240);
data1[6]=60;
console.log(data1);

console.log(typeof data1);

//union
let userName:number|string|string[] ="user1";

let dt1 = new Array(1,2,3,4); //doesn't work
console.log(typeof userName);
userName=["user1","user2"];


let [a,b] = [10,20];
[a,b] = [b,a]; //swap values
console.log(a);
console.log(b);

//tuple : fixed length and types
let userData:[string,number];
userData=["user1",20];
 //userData[1]= "asdf"; //shows error
console.log(userData.length);
// let i=2;
// console.log(userData[2]);

userData.push("10"); //js
userData.pop();
//serData[5]=10;incorrect

console.log(userData);
console.log(userData);

let ordNum:any = "zxcv1234";

//(ordNum as string).length

console.log( ordNum.length);

console.log("----------------------------------------------");

for(let v of userData){
    console.log(v);
    
}
