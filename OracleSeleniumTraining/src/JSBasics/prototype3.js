

function createTool( version){

    
    this.version= version;
    this.model ="IIF";
    this.dt =[10,20,30,40,50,60];

    
    this.start=function(){
        this.dt.forEach(function(v){
            console.log(this.model,"--",v);
        },this);

    }
}

let t1= new createTool( 4);
t1.start();
t1.setTimeout();



let createTool1={

    
   
    model :"IIF",
    dt :[10,20,30,40,50,60],

    
    start: function(){

        this.dt.forEach(function(v)
        {
            console.log(this.model,"--",v);

        },this);

    }
}

//createTool1.start()
