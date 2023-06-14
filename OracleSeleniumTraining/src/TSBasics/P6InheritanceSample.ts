class Google1 {
    public search(){
        console.log("Search in google");        
    }
}

class Gmail1 extends Google1{
    public search(keyword?:string){
        if (keyword==undefined) {
            super.search()
        }else{
            console.log("Search in gmail using keyword "+keyword);
        }                
    }
}

let g3:Gmail1 = new Gmail1();
g3.search("selenium");

let g4:Google1 = new Gmail1();
g2.search();