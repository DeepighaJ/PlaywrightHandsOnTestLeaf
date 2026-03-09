import { ParentMethod } from "./Parent";

class ChildMethod1 extends ParentMethod{

    createAccount()
    {
        console.log("Account")
    }


}
let ch1 = new ChildMethod1()
ch1.createAccount()
ch1.lauchBrowser()
ch1.loadUrl()
ch1.loginInfo()