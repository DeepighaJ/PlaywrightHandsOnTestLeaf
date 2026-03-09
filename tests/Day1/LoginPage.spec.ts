import test from '@playwright/test';

test("Using CSS",async({page})=>{
    
    await page.goto("http://leaftaps.com/opentaps/control/main")

    await page.locator("#username").fill("Demosalesmanager") //#id value is username

    await page.locator("#password").fill("crmsfa") //#id value is password

    await page.locator(".decorativeSubmit").click() //.class value is decorativeSubmit

    await page.locator(`text='CRM/SFA'`).click() //text value is CRM/SFA
    
    await page.waitForTimeout(3000)

})

