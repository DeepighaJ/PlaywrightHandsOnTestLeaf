"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//class to class -> extends
//class to Intefrace -> implements
var Execute = /** @class */ (function () {
    function Execute() {
    }
    Execute.prototype.loadurl = function () {
        console.log("Load URL");
    };
    Execute.prototype.fill = function () {
        console.log("Fill");
    };
    Execute.prototype.clear = function () {
        console.log("Clear");
    };
    return Execute;
}());
var inf = new Execute();
inf.loadurl();
inf.fill();
inf.clear();
