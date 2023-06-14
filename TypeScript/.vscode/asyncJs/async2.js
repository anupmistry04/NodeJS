
console.log('Start');

function loginUser(email, password, callback){

setTimeout((a)=>{  

    console.log('Waiting', a);

    callback ({email:email, password:password})

},3000,"time limit-3sec")

}

const user=loginUser('anup@mistry.com','abcd_1', function(v){
     console.log(v)
});

 console.log('End');