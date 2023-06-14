
console.log('Start');

function verifyCredential(email, password, callback){

setTimeout((a)=>{  

    console.log('cred Verified', a);

    callback ({email:email, password:password})

},3000,"time limit-3sec")

}

function get(http, email, password, callback){

    setTimeout((a)=>{  
    
        console.log('Waiting to get response ',http,"-->",email,"-->",password);

        
        callback ("200OK");
    
    },3000,"time limit-3sec")
    
    }

    function post(http,prevStatus, email, password, callback){

        setTimeout((a)=>{  
        
            console.log(prevStatus,' Waiting to get response ',http,"-->",email,"-->",password);
    
            
            callback ("2001Created");
        
        },3000,"time limit-3sec")
        
        }



const user=verifyCredential('anup@mistry.com','abcd_1', function(v){
     console.log(v)


      get("get",v.email,v.password,function(w){

        console.log(w);

        if(w=="200OK"){

            post("post",w,v.email,v.password, function(x){
                console.log(x);
            })

        }

     })

});

 console.log('End');