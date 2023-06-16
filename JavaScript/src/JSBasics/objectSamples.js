let toolData={

    name: "selenium",
    version: 4
}



//console.log(toolData);
console.log(toolData.name + "--" + toolData.version);
console.log(toolData["name"] + "--" + toolData["version"]);

for(let key1 in toolData){
    console.log(key1 +"-->"+ toolData[key1])
}

console.log("result17:-"+ typeof(toolData));
console.log("result18:-"+ (toolData instanceof Object));


toolData.subVesion = "0.02";

//console.log(toolData);