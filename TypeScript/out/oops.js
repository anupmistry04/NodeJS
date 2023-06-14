"use strict";
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.getFullname = function () {
        return this.firstname + "-" + this.lastname;
    };
    return Person;
}());
var aPerson = new Person(); //var aPerson: Person = new Person();  WE DEFINE THE OBJECT TPYE AS PERSON ,By default also its person
var fi = aPerson.firstname = "Anup";
aPerson.lastname = "Mistry";
console.log(aPerson.getFullname);
console.log(fi);
console.log(aPerson);
