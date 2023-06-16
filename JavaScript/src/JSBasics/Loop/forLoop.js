

let dt =[10,20,30,40,50,60];


//.log(dt[10])


for(let i=0;i<10;i++){ //index based for loop

   // console.log(i+"-->"+dt[i]);
  }


  for(let i of dt){ //advanced for loop//iterates over the value

    //console.log(i);
  }

  for(let i  in dt){  //object based for loop//iterates over the index

    //console.log(i+"-->"+dt[i]);
  }

   dt.forEach(v=>console.log(v+2)); // internal loop