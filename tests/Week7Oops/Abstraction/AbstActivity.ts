abstract class PageMethods{

    //defining properties
    abstract browserName:string
    app:string="Application"

    fill(){
        console.log("fill method")
    }
    clear(){
        console.log("Clear method")
    }
    abstract locator():void
    abstract frame():void

}

class Runner extends PageMethods{

    locator(){
        console.log("locator",this.app)
        
    }
    frame(){
        console.log("frame")
    } 

}

let run = new Runner()
run.fill()
run.clear()
run.frame()
run.locator()
console.log(run.browserName)