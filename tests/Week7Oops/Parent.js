"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParentMethod = void 0;
var GrandParent_1 = require("./GrandParent");
var ParentMethod = /** @class */ (function (_super) {
    __extends(ParentMethod, _super);
    function ParentMethod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ParentMethod.prototype.loadUrl = function () {
        console.log("URL loaded");
    };
    ParentMethod.prototype.loginInfo = function () {
        console.log("Login Info");
    };
    ParentMethod.prototype.title = function () {
        console.log("Parent title");
        _super.prototype.title.call(this);
    };
    return ParentMethod;
}(GrandParent_1.GrandParent));
exports.ParentMethod = ParentMethod;
var p = new ParentMethod();
p.lauchBrowser();
