import test, {expect} from '@playwright/test';

test("Handle Frame and Handle Alert",async({page})=>{

    let myname="Deepigha"
    
    await page.once('dialog',alert=>{
        const type = alert.type()
        console.log(type)

        const msg =alert.message()
        console.log(msg)

        if(type==='alert')
        {alert.accept()
        }
        else if(type==='confirm')
        {alert.accept()
        
        }
        else if(type==='prompt')
        {
            alert.accept(myname)
        }
    
    })
    //handle frame // handle alert in the frame
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_prompt");
    await page.frameLocator("#iframeResult").locator("//button[text()='Try it']").click()

    await page.waitForTimeout(2000)

    let displaymsg =await page.frameLocator("#iframeResult").locator("#demo").textContent();

    console.log(displaymsg)
    
    expect.soft(displaymsg).toEqual("Hello "+myname+"! How are you today?")

})