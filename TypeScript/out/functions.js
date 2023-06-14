"use strict";
function add(a, b) {
    return a + b;
}
var sum = add(1, "foo"); //add(1,2,3)  valid in js but takes only 2 arguments
console.log(sum);
//////////////////////////////////////////////////////
function add1(a, b, c) {
    return a + b;
}
var sum1 = add1(1, 2);
console.log(sum1);
////////////////////////////////////////////////////////////
function add2(a, b, c) {
    if (c === void 0) { c = 0; }
    return a + b;
}
var sum2 = add2(1, 2, 3);
console.log(sum1);
/////////////////////////////////////////////////////////////////
