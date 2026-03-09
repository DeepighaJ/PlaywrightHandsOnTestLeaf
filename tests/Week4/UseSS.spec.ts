import test from '@playwright/test'
//using the storage state json with use annotation
test.use({storageState:"helper/SF_storageState.json"})

test("Use Storage State",async({page})=>{
    
await page.goto("https://testleaf.lightning.force.com/lightning/page/home")
await page.waitForTimeout(3000)
await page.locator("//span[text()='Accounts']").click()
await page.waitForTimeout(3000)
})

test("Use Storage State 1",async({page})=>{
await page.goto("https://testleaf.lightning.force.com/lightning/page/home")
await page.waitForTimeout(3000)
await page.locator("//span[text()='Leads']").click()
await page.waitForTimeout(3000)

})