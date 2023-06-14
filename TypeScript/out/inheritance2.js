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
var Person6 = /** @class */ (function () {
    function Person6(first, last) {
        this.firstname = first;
        this.lastname = last;
    }
    return Person6;
}());
var Programer6 = /** @class */ (function (_super) {
    __extends(Programer6, _super);
    function Programer6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Programer6;
}(Person6));
var obj34 = new Programer6("Anup", "Mistry"); // if no child constructor , them this values is assigned to parent constructor & viceversa
