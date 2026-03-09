var Data = /** @class */ (function () {
    function Data() {
    }
    Data.prototype.add = function (a, b) {
        console.log("Addition", a + b);
    };
    Data.prototype.sub = function (a, b) {
        console.log("Subtracting:", a - b);
    };
    Data.prototype.mul = function (a, b) {
        console.log("Multiply", a * b);
    };
    //create public method for using private or protected method since those are not accessible outside this class
    Data.prototype.sub1 = function () {
        this.sub(10, 5);
        this.mul(3, 6);
    };
    return Data;
}());
var access = new Data();
access.add(7, 8); //only public accessible outside the class
access.sub1();
