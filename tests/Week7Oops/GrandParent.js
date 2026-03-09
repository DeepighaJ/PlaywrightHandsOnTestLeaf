"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrandParent = void 0;
var GrandParent = /** @class */ (function () {
    function GrandParent() {
    }
    GrandParent.prototype.lauchBrowser = function () {
        console.log("Launch browser");
    };
    GrandParent.prototype.title = function () {
        console.log("GrandParent title");
    };
    return GrandParent;
}());
exports.GrandParent = GrandParent;
