var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
    }
    Car.prototype.run = function (speed) {
        if (speed === void 0) { speed = 0; }
        return this.name + " is fast: " + speed;
    };
    return Car;
}());
var Honda = /** @class */ (function (_super) {
    __extends(Honda, _super);
    function Honda(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    Honda.prototype.run = function (speed) {
        if (speed === void 0) { speed = 150; }
        return "A Honda started. " + _super.prototype.run.call(this, speed);
    };
    return Honda;
}(Car));
var honda = new Honda('Honda City');
console.log(honda.run());
