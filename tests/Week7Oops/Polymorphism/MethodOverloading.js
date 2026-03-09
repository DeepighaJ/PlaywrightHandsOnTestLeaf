var MethodOverloading = /** @class */ (function () {
    function MethodOverloading() {
    }
    MethodOverloading.prototype.fill = function (text, locator, element) {
        if (locator !== undefined) {
            console.log("Fill with locator");
        }
        else if (element !== undefined) {
            console.log("Fill with button");
        }
        else
            console.log("Fill with text");
    };
    return MethodOverloading;
}());
var k = new MethodOverloading();
k.fill("Deepi");
k.fill("Deepi", "#a");
k.fill("Deepi", "button", undefined);
