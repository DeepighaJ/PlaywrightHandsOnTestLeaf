class Wrapper{

    ElementClick(locator:string):void //since im not implementing so giving void
    ElementClick(locator:string,forceClick:boolean):void //required parameter(locator);optional parameter(forceclick)

    ElementClick(locator:string,forceClick?:boolean){   //Method Overloading since multiple implementation throws error
        if(forceClick===true){
            console.log("Force Click Action"); //implementing second method
        }
        else{
            console.log("Normal Click Action")  //implementing first method 
        }
        
    }
}

let mol = new Wrapper();
mol.ElementClick("#id")
mol.ElementClick("#id",true) //Method Overloading