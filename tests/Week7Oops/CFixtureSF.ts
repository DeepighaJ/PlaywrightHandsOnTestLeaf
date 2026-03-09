import { test as login, Page} from '@playwright/test'


//step 2
 export const customFixture=login.extend<{salesForceLogin:any}>({


//step 3
salesForceLogin:async({page}:{page:Page},use:(arg0:Page)=>any)=>{


    //step4
await page.goto("https://login.salesforce.com/?locale=in")
await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
await page.locator("#password").fill("TestLeaf@2025")
await page.locator("#Login").click();
await page.waitForTimeout(10000)


//step5
await use(page)
}


})