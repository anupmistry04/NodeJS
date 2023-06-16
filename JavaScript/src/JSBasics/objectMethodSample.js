let toolData={

    name: "selenium",
    version: 4,

    start : function(){
        console.log(this.name + " started")
    },

    run : function(){
        console.log(this.name + " is running") //this doesn't work under lambda function
    }
}


toolData.start();
toolData.run();

//add to object
toolData.stop =function(){                      //this doesn't go under __proto__ object
    console.log(this.name + " is stopped")
}

toolData.stop();




 console.log(toolData);