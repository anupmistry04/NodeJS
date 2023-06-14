"use strict";
var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo.prototype.getFullName11 = function () {
        return this.firstname11 + "" + this.lastname11;
    };
    return Foo;
}());
var obj = new Foo();
var someObj = {
    firstname11: "Anup",
    lastname11: "Mistry",
    getFullName11: function () { return "Test"; },
    foo: "foo"
};
obj = someObj; //someObj should contsain all the methods & variables as in Person11, it may contain extra methods or vatiables
obj.firstname11 = "abc";
//obj.foo = "abc" incorect
