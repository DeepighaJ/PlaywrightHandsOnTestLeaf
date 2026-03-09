abstract class WrapperMethod{

    loadApplication(){   //Implemented method
        console.log("Launch Browser and Load URL")
    }

    alertPageNo()       //Implemented method
    {
        console.log("Handle all the alert")
    }

    abstract snap():void    //abstract methods, un-implemented methods
    abstract video():void

}
//we cannot create object for abstract class, throws error
//let ab=new WrapperMethod()

class Run extends WrapperMethod(){
    snap()
    {
        console.log("Take snap")
    }
    video()
    {
        console.log("Take Video")
    }
}

let r=new Run()
r.snap();
r.video();
r.loadApplication();
r.alertPageNo();