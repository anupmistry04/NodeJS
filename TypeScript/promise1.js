const process = require('process')

function watchTutorialPromise() {
    let userLeft = false
    let userWatchingCatMeme = false
    return new Promise((resolve, reject) => {
      if (userLeft) {
        reject({
          name: 'User Left', 
          message: ':('
        })
      } else if (userWatchingCatMeme) {
        reject({
          name: 'User Watching Cat Meme',
          message: 'WebDevSimplified < Cat' 
        })
      } else {
        resolve('Thumbs up and Subscribe')
      }
    })
  }

  function print(){
    console.log('Print 1---');
    watchTutorialPromise().then(message => {
        console.log(message)
      }).catch(error => {
        console.log(error.name + ' ' + error.message)
      })

      console.log('Print 3---');

  }


  async function print1(){
    console.log('Print 1---');
    await watchTutorialPromise().then(message => {
        console.log(message)
      }).catch(error => {
        console.log(error.name + ' ' + error.message)
      })
      console.log('Print 3---');
  }

  function print3(){
      console.log('1');
      setTimeout(()=>{
          console.log('2');
      },0);
      console.log('3')
  }

  function print4(){
    for(var a = 0; a < 5; a++){
        setTimeout(()=>{
            console.log(a);
        },0);
    }
}

function print5(){
    for(let a = 0; a < 5; a++){
        setTimeout(()=>{
            console.log(a);
        },0);
    }
}


function print6(){
   setTimeout(()=>{
    console.log('1');
   }, 0);
   process.nextTick(()=>{
    console.log('2.....');
   });
}

  //print();
  //print1();
  //print3();
  print4();
  print5();
  print6();

//   Hoisting in JavaScript
//   Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of 
//   their scope before code execution. Inevitably, this means that no matter where functions and variables 
//   are declared, they are moved to the top of their scope regardless of whether their scope is global or local.
  