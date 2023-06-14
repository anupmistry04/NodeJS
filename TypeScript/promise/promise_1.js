function watchTutorialCallback(callback, errorCallback) {
    let userLeft = true;// it can be passed as an input to the function
    let userWatchingCatMeme = true
  
    if (userLeft) {
      callback({
        name: 'User Left', 
        message: ':('
      },12)
    }  if (userWatchingCatMeme) {
      errorCallback({
        name: 'User Watching Cat Meme',
        message: 'WebDevSimplified < Cat' 
      })
    } else {
      callback('Thumbs up and Subscribe')
    }
  }

  watchTutorialCallback((message,b)=>{  // message is a parameter OR watchTutorialCallback((message) => { console.log(message)}
    console.log(message);
    console.log(b);
  }, error => {
    console.log(error.name + ' ' + error.message)
  })