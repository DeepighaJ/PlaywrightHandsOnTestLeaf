export class Browser{

    browserName:string='Chrome'
    app:string

    loadUrl(){
        console.log("URL loaded")
    }

    constructor(app:string){
        this.app=app;   //assign global property as leaftaps
        console.log(this.app)
    }
    //this keyword -> refers to current class properties/methods
}
let obj=new Browser("leaftaps") //object creation should be outside the class
obj.loadUrl()