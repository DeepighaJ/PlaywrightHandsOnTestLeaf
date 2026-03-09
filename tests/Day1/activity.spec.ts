import test from '@playwright/test';

test("Login method",async({page})=>{

    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").fill("TestLeaf@2025")
    await page.waitForTimeout(2000)
    await page.locator("#Login").click()
    await page.waitForTimeout(12000)
    console.log(await page.title())
    await page.locator("button[title='App Launcher']").click();
    await page.waitForTimeout(2000)
    

})