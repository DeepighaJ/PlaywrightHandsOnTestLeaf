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
var Parent_1 = require("./Parent");
var ChildMethod = /** @class */ (function (_super) {
    __extends(ChildMethod, _super);
    function ChildMethod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChildMethod.prototype.createLead = function () {
        console.log("Create Lead");
    };
    ChildMethod.prototype.title = function () {
        console.log("Child Title");
        _super.prototype.title.call(this); //to access immediate parent not grandparent
    };
    return ChildMethod;
}(Parent_1.ParentMethod));
var ch = new ChildMethod();
ch.loadUrl();
ch.loginInfo();
ch.createLead();
ch.lauchBrowser();
ch.title();
