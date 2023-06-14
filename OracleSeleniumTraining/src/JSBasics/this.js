
function thisTest(username){

 
    this.username =username

    console.log(this)

}

let v = new thisTest('AA');



let toolData={

    name: "selenium",
    version: 4,

    run :function(){  
        console.log(this)
    
    }

}

toolData.run();