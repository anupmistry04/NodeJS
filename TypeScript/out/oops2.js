"use strict";
var Person2 = /** @class */ (function () {
    function Person2(fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
    }
    Person2.prototype.getFullname = function () {
        return this.firstname + "-" + this.lastname;
    };
    return Person2;
}());
var aPerson2 = new Person2("Anup", "Mistry");
console.log(aPerson2.getFullname);
