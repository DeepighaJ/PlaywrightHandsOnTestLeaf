"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Browser = void 0;
var Browser = /** @class */ (function () {
    function Browser() {
    }
    Browser.prototype.browserType = function () {
        console.log("Browser Type");
    };
    Browser.prototype.browserVersion = function () {
        console.log("Browser Version V1.0");
    };
    return Browser;
}());
exports.Browser = Browser;
