"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
var LoginPage = /** @class */ (function () {
    function LoginPage(url, title) {
        this.url = url;
        this.title = title;
        console.log(this.url);
        console.log(this.title);
    }
    LoginPage.prototype.login = function () {
        console.log("Public Login method");
    };
    LoginPage.prototype.logout = function () {
        console.log("Private Logout method");
    };
    LoginPage.prototype.callMethod = function () {
        this.logout();
    };
    return LoginPage;
}());
exports.LoginPage = LoginPage;
//Creating object in same class
var obj = new LoginPage("https://facebook.com", "Facebook");
obj.login();
obj.callMethod();
/*Class as LoginPage
 properties -> url,title -> value
methods ->  login(), logout()
constructor -> paramterized constructor(url:string)
create object inside same file


create another file
call the LoginPage */ 
