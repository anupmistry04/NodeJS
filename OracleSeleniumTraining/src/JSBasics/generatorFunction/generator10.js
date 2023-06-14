let checkArray = function*(n){

    let count =0;
    console.log(n.length)
    for(let i=0 ; i<n.length ;i++){

        if(n[i]%2==0){

            yield 2;

        }

        else yield 0;
    }


}


let ar =[1,2,3,4,5,6]

//let gen = checkArray(...ar);  //correct
//let gen = checkArray(1,2,3,4,5,6); //correct
let gen = checkArray(ar);  ////incorrect

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());