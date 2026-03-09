import test from '@playwright/test'

//Storage state is a feature in Playwright that allows you to save the state of the browser,
//  including cookies, local storage, and session storage, to a file. This can be useful for
//  maintaining a logged-in state across multiple test runs without having to go through the 
// login process each time.

test("Storage State",async({page})=>{

await page.goto("https://login.salesforce.com/?locale=in")
await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
await page.locator("#password").fill("TestLeaf@2025")
await page.locator("#Login").click();

//storage state ->accpect only json response
//generates json with cookie information by running this file
await page.context().storageState({path:"helper/SF_storageState.json"})


})