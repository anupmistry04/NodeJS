//when we don't know how many parameter function gonna use in it- spread
// when we don't now how many prameter function takes- rest

//Arrays.sort() // sorts alphabatically not numerically


var fn = function (...n) {  //rest is for defining


    for (let i = 0; i < n.length; i++) {

        console.log(n[i] + 2);
    }

}

//var ct=[1,2,3];
 //fn(...ct);
// fn(10, 20, "hello")



                                      //recommended-optional paramete should be at last, why??test and check
var fn1 = function (a, b, c,d=10) {  //anonymous function is without name and assigned to a variable //rest is for defining 

    console.log(a + b + c+d)

}

 //fn1(1,2,4,5);
var dt=[3,4,6,4];
fn1(...dt); //spread 


// var dt1=[3,4];
// fn1(...dt1); //spread 


// var dt2=[3,4];
// fn1(1, ...dt2); //spread 