import { Browser } from "./Browser";

class Edge extends Browser{

    launchBrowser()
    {
        console.log("Launch Browser Edge")
    }
}

let edg=new Edge()
edg.browserType();
edg.browserVersion();
edg.launchBrowser();
