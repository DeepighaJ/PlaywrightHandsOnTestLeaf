import { Interface } from "node:readline"

interface data{

    loadurl():void
    fill():void
    clear():void

}

//class to class -> extends
//class to Intefrace -> implements

class Execute implements data{

    loadurl(): void {
        console.log("Load URL")
    }

    fill(): void {
        console.log("Fill")
    }

    clear(): void {
        console.log("Clear")
    }


}
let inf=new Execute();
inf.loadurl();
inf.fill();
inf.clear();

