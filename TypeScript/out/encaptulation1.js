"use strict";
var Person13 = /** @class */ (function () {
    function Person13(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.address = "Hyderabad";
    }
    Person13.prototype.getfistname = function () {
        return this.firstname;
    };
    Person13.prototype.getlastname = function () {
        return this.lastname;
    };
    return Person13;
}());
var obj13 = new Person13("Anup", "Mistry");
var fname = obj13.getfistname;
var lname = obj13.getlastname();
