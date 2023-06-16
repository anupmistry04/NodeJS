function WaitForTime(mSeconds) {
    
    return new Promise(function (res,rej) {
        setTimeout(() => {
            console.log("printing after waiting for"+mSeconds);
            res("hello");
        }, mSeconds);        
    });
}

async function demo1() {
    await WaitForTime(2000);
    await WaitForTime(3000);
}

async function demo2() {
    await WaitForTime(4000);
    await WaitForTime(2000);
}

(async function () {
    
    await demo1();
    await demo2();

})();


// WaitForTime(2000).then(()=>{
//     WaitForTime(2000)
// }).catch(()=>{
//     console.log("i got a failure");
// });



// new Promise(function (res,rej) {
    
//     //write actual code
//     //verify sucess or not
//     let isSucces = true;
//     if (isSucces) {
//         res();
//     }else{
//         rej();
//     }
// });