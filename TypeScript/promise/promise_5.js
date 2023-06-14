   ////////////https://www.youtube.com/watch?v=V_Kr9OSfDeU&ab_channel=WebDevSimplified

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
    console.log('Response Received');
    
   return processRequest(response);

  }).then(processResponse=>{

    console.log(processResponse);

  }).catch((error)=>{
    console.log(error)
  })

  //////////////////////////////////////

  async function doWork(){  // for reject PART use try catch, watch video

  try{
    const response = await makeResponse('Google')
    console.log('Response Received')
    const processResponse = await processRequest(response)
    console.log(processResponse);
    }
    catch(error){
      console.log('msg: ',error); //from reject

    }

  }

  doWork();