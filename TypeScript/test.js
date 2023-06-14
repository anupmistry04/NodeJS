function makeResponse(location){

  return new Promise((resolve,reject)=>{
    console.log(`Making request to ${location}`)

    if(location=== 'Google'){

      resolve('Google says Hi');
    }
    else{
      reject('We can only talk to Google')
    }
  })
}

function processRequest(response){

  return new Promise((resolve,reject)=>{
    console.log('Processing Request')
      resolve(`Extra Information:  ${response}`);

      
  
  })
}

makeResponse('Google').then(response=>{
  console.log('Response Received', response);
 return processRequest(response);

}).then(processResponse=>{

  console.log("111",processResponse);

}).catch((error)=>{
  console.log(error)
})