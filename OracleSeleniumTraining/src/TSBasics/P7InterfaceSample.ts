interface tool{
    name:string;
    version:number;
}

let t11:tool={
    name:"selenium",
    version:4
}

console.log("result1",t1.name);
console.log(t1.version);

interface toolActions{
    start():void;
    stop():void;
}

class CreateTool implements tool,toolActions{
    start(): void {
        console.log(this.name+" is started");        
    }
    stop(): void {
        console.log(this.name+" is stopped");
    }
    name: string='selenium1';
    version: number=41;    
}


let t22:CreateTool=new CreateTool();
console.log(t22.name);
console.log(t22.version);
t22.start();
t22.stop();

let t3:tool=new CreateTool();
console.log(t3.name);
console.log(t3.version);

let t4:toolActions|tool=new CreateTool();
(t4 as toolActions).start();
(t4 as toolActions).stop();
console.log((t4 as tool).name);


