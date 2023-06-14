const p = new Promise((resolve, reject) => {
    const v1 = 2;
    
        if(v1 === 3){
            resolve('Promise successful');
        } else {
            reject('Promise Rejected');
        }
    
    
});

p.then((success) => {
    console.log('then---', success);
})
p.catch((failure) => {
    console.log('catch---', failure);
});

