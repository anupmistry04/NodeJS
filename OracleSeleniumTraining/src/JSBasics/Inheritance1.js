class Google {
   
      a=4;
      search(){   //search=function(){  //if this then always calls parent
        console.log("Search in google");        
    }
}

class Gmail extends Google{

    a=5;
    search(keyword){

        console.log("always child");
        
        if (keyword==undefined) {
            super.search()
        }else{
            console.log("Search in gmail using keyword "+keyword);
        }                
    }
}

//let g1= new Gmail();
// g1.search("selenium");
// console.log(g1.a)

let g2 = new Gmail();
g2.search("aa");