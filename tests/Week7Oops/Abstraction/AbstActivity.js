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
var PageMethods = /** @class */ (function () {
    function PageMethods() {
        this.app = "Application";
    }
    PageMethods.prototype.fill = function () {
        console.log("fill method");
    };
    PageMethods.prototype.clear = function () {
        console.log("Clear method");
    };
    return PageMethods;
}());
var Runner = /** @class */ (function (_super) {
    __extends(Runner, _super);
    function Runner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Runner.prototype.locator = function () {
        console.log("locator", this.app);
    };
    Runner.prototype.frame = function () {
        console.log("frame");
    };
    return Runner;
}(PageMethods));
var run = new Runner();
run.fill();
run.clear();
run.frame();
run.locator();
console.log(run.browserName);
