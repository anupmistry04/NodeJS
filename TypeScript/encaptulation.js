var Person12 = /** @class */ (function () {
    function Person12(lname) {
        this.lastname = lname;
    }
    Person12.prototype.setfirstname = function (first) {
        this.firstname;
    };
    Person12.prototype.getfistname = function () {
        return this.firstname;
    };
    Person12.prototype.getlastname = function () {
        return this.lastname;
    };
    return Person12;
}());
var obj1 = new Person12("Mistry");
var obj2 = new Person12("Mistry");
obj1.setfirstname("Anup");
var lm = obj1.getlastname();
