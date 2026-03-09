var Call = /** @class */ (function () {
    function Call() {
    }
    Call.prototype.alert = function () {
        console.log("Alert Implemented inside Caller");
    };
    Call.prototype.window = function () {
        console.log("Window Implemented inside Caller");
    };
    return Call;
}());
var c = new Call();
c.alert();
c.window();
