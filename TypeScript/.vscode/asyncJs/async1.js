//https://www.youtube.com/watch?v=_8gHHBlbziw&t=1146s&ab_channel=DevEd
console.log('Start');

function loginUser(email, password){

setTimeout((a)=>{  //this is async funstion, check output

    console.log('Waiting', a);

    return {email: password}

},0,"aa")

}

const user=loginUser('anup@mistry.com','abcd');
console.log(user);
console.log('End');