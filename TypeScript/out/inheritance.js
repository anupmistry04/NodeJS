"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person4 = /** @class */ (function () {
    function Person4() {
        this.firstname = "Anup";
        this.lastname = "Mistry";
    }
    Person4.prototype.greet = function () {
        console.log("hllo");
    };
    return Person4;
}());
var Programer = /** @class */ (function (_super) {
    __extends(Programer, _super);
    function Programer() {
        var _this = _super.call(this) || this;
        _this.address = "Hyderabad";
        return _this;
    }
    Programer.prototype.greet = function () {
        console.log("hello there");
    };
    Programer.prototype.greetNew = function () {
        this.greet(); //child
        _super.prototype.greet.call(this); //parent
    };
    return Programer;
}(Person4));
var aPerson3 = new Programer();
console.log(aPerson3.greet()); //calll child class
var aPerson4 = new Programer();
console.log(aPerson4.greet()); // child
