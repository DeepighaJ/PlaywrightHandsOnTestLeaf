var Browser = /** @class */ (function () {
    function Browser(app) {
        this.browserName = 'Chrome';
        this.app = app; //assign global property as leaftaps
        console.log(this.app);
    }
    Browser.prototype.loadUrl = function () {
        console.log("URL loaded");
    };
    return Browser;
}());
var obj = new Browser("leaftaps"); //object creation should be outside the class
obj.loadUrl();
