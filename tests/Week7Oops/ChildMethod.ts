import { ParentMethod } from "./Parent";
class ChildMethod extends ParentMethod{

    createLead()
    {
        console.log("Create Lead")
    } 
    title(){
        console.log("Child Title");
        super.title(); //to access immediate parent not grandparent
    }

}

let ch = new ChildMethod();
ch.loadUrl()
ch.loginInfo()
ch.createLead()
ch.lauchBrowser()
ch.title() 
