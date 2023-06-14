function DemoAdd1(x:number,y:number,d:number=30,op?:number):number {
    if(op==undefined){
        return (x+y+d);    
    }else{
        return x+y+d+op;
    }
}

console.log(DemoAdd1(10,20)); //60
console.log(DemoAdd1(10,20,5));//35
console.log(DemoAdd1(10,20,undefined,25));//85
console.log(DemoAdd1(10,20,0,25));//55
console.log(DemoAdd1(10,20,10,25));//65
