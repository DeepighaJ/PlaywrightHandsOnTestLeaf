import test from '@playwright/test';

// import loginInfo from 'D:/Playwright Workspace/playwright-testleaf/Data/salesforceLogin.json'

// for(let login of loginInfo){

//     test(`Salesforce Login with Multiple Json Data ${login.tCID}`,async({page})=>{

//         await page.goto("https://login.salesforce.com/")
//         await page.locator("#username").fill(login.username)
//         await page.locator("#password").fill(login.password)
//         await page.locator("#Login").click()

//         await page.waitForTimeout(2000)

//     })
// }