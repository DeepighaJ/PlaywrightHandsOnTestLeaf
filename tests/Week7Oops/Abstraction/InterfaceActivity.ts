interface EventInt{

    alert():void
    window():void

}
class Call implements EventInt{

    alert(): void {
        console.log("Alert Implemented inside Caller")
    }

    window(): void {
        console.log("Window Implemented inside Caller")
    }

}

let c=new Call()
c.alert()
c.window()