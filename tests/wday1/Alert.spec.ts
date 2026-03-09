//default nature alert in playwright -> its going to do auto dismiss -> click cancel button
import test from '@playwright/test';
import { listen } from 'node:quic';


test("Alert handling",async({page})=>{

    await page.goto("https://www.leafground.com/alert.xhtml")
    await page.locator("//span[text()='Show']").nth(1).click()
    await page.waitForTimeout(4000)
    
})
//Event listener for alert
//page.om -> handle multipl aert present in the test
//page.once -> handle only first alert

test("Handle Alert with Page.Once",async({page})=>{

    //handle alert
    //page.once ->listener
    //dialog -> event
    //alertType -> alert,confirm,prompt//is variable nmae can change any name
    page.once('dialog',alertType=>{
        const type=alertType.type()
        console.log(type)

        const msg=alertType.message()
        console.log(msg)

        //action
        alertType.accept()
    })

    //it is always 2nd alert is auto dismissed by playwright?
    await page.goto("https://www.leafground.com/alert.xhtml")
    await page.locator("//span[text()='Show']").first().click()
    await page.waitForTimeout(4000)
    await page.locator("//span[text()='Show']").nth(1).click()
    await page.waitForTimeout(4000)
})

test.only("Handle Alert with Page,On",async({page})=>{

    //handle alert
    //dialog -> event
    //alertType -> alert,confirm,prompt//variable nmae
    page.on('dialog',alertType=>{
        const type=alertType.type()
        console.log(type)

        const msg=alertType.message()
        console.log(msg)

        //action
        if(type==='alert'){
            alertType.accept()
        }
        else if(type==='confirm')
        {      alertType.accept()
        }
        else if(type==='prompt')
        {
            alertType.dismiss()
        }
    })

    //it is always 2nd alert is auto dismissed by playwright?
    await page.goto("https://www.leafground.com/alert.xhtml")
    await page.locator("//span[text()='Show']").first().click()
    await page.waitForTimeout(4000)
    await page.locator("//span[text()='Show']").nth(1).click()
    await page.waitForTimeout(4000)
})

test("Sweet Alert",async({page})=>{ //sweet alerts are inspectable and are non-model alerts
    await page.goto("https://www.leafground.com/alert.xhtml")
    await page.locator("//span[text()='Show']").nth(2).click()
    await page.waitForTimeout(4000)
    await page.locator("//span[@class='ui-icon-closethick']").first().click()       //normal click action X button
    await page.waitForTimeout(4000)
})

