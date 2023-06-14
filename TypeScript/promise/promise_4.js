
  const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
    //reject('Video 1 Recorded11')
  })
  
  const recordVideoTwo = new Promise((resolve, reject) => {
    reject('Video 2 Recorded11')
    resolve('Video 2 Recorded')
  })
  
  const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
  })


  Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
  ]).then(message => {
    console.log(message)
  })
 //o/p-'Video 1 Recorded'

//  The Promise.race() method returns a promise that fulfills or rejects
//   as soon as one of the promises in an iterable fulfills or rejects,