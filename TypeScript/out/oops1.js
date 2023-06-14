"use strict";
var Person1 = /** @class */ (function () {
    function Person1() {
        this.firstname = "Anup";
        this.lastname = "Mistry";
    }
    Person1.prototype.getFullname = function () {
        return this.firstname + "-" + this.lastname;
    };
    return Person1;
}());
var aPerson1 = new Person1();
console.log(aPerson1.getFullname);
