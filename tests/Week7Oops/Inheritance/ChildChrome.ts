import { Browser } from "./Browser";

class Chrome extends Browser{

    launchBrowser()
    {
        console.log("Launch Brower Chrome")
    }
    browserVersion()        //method overridding
        {
            super.browserVersion(); //calling method of parent class
            console.log("Browser Version 2.0")
            
        }
    
}

let chr = new Chrome()
chr.browserType();
chr.browserVersion(); //runs overridden method of child class 
chr.launchBrowser();