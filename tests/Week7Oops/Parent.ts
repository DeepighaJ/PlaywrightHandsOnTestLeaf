import { GrandParent } from "./GrandParent"

export class ParentMethod extends GrandParent{

    loadUrl(){
        console.log("URL loaded")

    }
    loginInfo()
    {
        console.log("Login Info")
    }
    title()
    {
        console.log("Parent title")
        super.title(); // calls its immediate parent method which is Grandparent title
    }
}
let p = new ParentMethod()
p.lauchBrowser()