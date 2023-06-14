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
var Person7 = /** @class */ (function () {
    function Person7() {
    }
    return Person7;
}());
var Programer7 = /** @class */ (function (_super) {
    __extends(Programer7, _super);
    function Programer7(first, last) {
        var _this = _super.call(this) || this;
        _this.firstname = first;
        _this.lastname = last;
        return _this;
    }
    return Programer7;
}(Person7));
var obj35 = new Programer7("Anup", "Mistry");
