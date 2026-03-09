class MethodOverloading{

    fill(text:string):void
    fill(locator:string,text:string):void
    fill(locator:string,text:string,element:string):void

    fill(text:string,locator?:string,element?:string){

        if(locator!==undefined)
        {
            console.log("Fill with locator")
        }
        else if(element!==undefined)
        {
            console.log("Fill with button")
        }
        else
            console.log("Fill with text")

    }

}

let k = new MethodOverloading();
k.fill("Deepi")
k.fill("Deepi","#a")
k.fill("Deepi","button",undefined)
