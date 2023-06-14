"use strict";
var Person14 = /** @class */ (function () {
    // 1. during variable declaration, 2. constructor
    function Person14(name) {
        this.address = "Hyderabad"; // read only type of variable can be assinged only at two places
        this.name = name;
    }
    return Person14;
}());
var obj14 = new Person14("Anup");
