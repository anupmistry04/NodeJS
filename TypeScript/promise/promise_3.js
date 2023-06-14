const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
    //reject('Video 1 Recorded11')
  })
  
  const recordVideoTwo = new Promise((resolve, reject) => {
   // reject('Video 2 Recorded11')
    resolve('Video 2 Recorded')
  })
  
  const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
  })

  Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
  ]).then(messages => {
    console.log(messages)
  })
  .catch(messages => {
    console.log(messages)
  });
  //  //o/p- [ 'Video 1 Recorded', 'Video 2 Recorded', 'Video 3 Recorded' ]
  // Promise.all is actually a promise that takes an array of promises as an input (an iterable). 
  // Then it gets resolved when all the promises get resolved or any one of them gets rejected.