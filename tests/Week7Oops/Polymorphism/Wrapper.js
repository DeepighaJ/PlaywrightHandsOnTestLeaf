var Wrapper = /** @class */ (function () {
    function Wrapper() {
    }
    Wrapper.prototype.ElementClick = function (locator, forceClick) {
        if (forceClick === true) {
            console.log("Force Click Action");
        }
        else {
            console.log("Normal Click Action");
        }
    };
    return Wrapper;
}());
var mol = new Wrapper();
mol.ElementClick("#id");
mol.ElementClick("#id", true);
