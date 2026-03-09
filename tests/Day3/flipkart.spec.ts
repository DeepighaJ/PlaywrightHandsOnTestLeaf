import test, { chromium } from '@playwright/test'
import { Channel } from 'node:diagnostics_channel'

test("Flipkart Launch test",async()=>{

    //launching the browser
    // run in the headless mode

    const browser = await chromium.launch({channel:'chrome', headless:false})
    
    //to open the window the followin code is used

    const context = await browser.newContext()    

    const page = await context.newPage()    //to open a new tab

    const page1 = await context.newPage()   //to open another tab

    await page.goto("https://www.flipkart.com/")

    await page1.goto("https://www.amazon.com/")

    await page.waitForTimeout(5000) // wait for 5 seconds before closing the browser

})