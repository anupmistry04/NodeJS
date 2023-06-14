//callback hell video- https://www.youtube.com/watch?v=fr67u98nckk
//https://www.youtube.com/watch?v=EQem2gugonA

//   ///////////////////////////////////////////////////////////////////////////
  
function watchTutorialPromise() { 
    let userLeft = true
    let userWatchingCatMeme = true
    return new Promise((resolve, reject) => {   // let p = new Promise() then p.then().catch() check video https://www.youtube.com/watch?v=DHvZLI7Db8E&t=107s
      if (userLeft) {
        resolve({
          name: 'User Left', 
          message: ':('
        })
     
        
      }  if (userWatchingCatMeme) {
        reject({
          name: 'User Watching Cat Meme',
          message: 'WebDevSimplified < Cat' 
        })
      } else {
        resolve('Thumbs up and Subscribe')
      }
    })
  }

  watchTutorialPromise().then(function(message) {
    console.log(message); 
  }).catch(error => {
    console.log(error.name + ' ' + error.message)
  })