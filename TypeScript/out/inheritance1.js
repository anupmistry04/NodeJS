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
var Person5 = /** @class */ (function () {
    function Person5(first, last) {
        this.firstname = first;
        this.lastname = last;
    }
    return Person5;
}());
var Programer5 = /** @class */ (function (_super) {
    __extends(Programer5, _super);
    function Programer5(addr) {
        var _this = _super.call(this, "", "") || this;
        _this.address = addr;
        return _this;
    }
    return Programer5;
}(Person5));
var obj33 = new Programer5("hyd");
