import test from '@playwright/test'

test("Test Method",async({page})=>{
    await page.goto("https://www.amazon.com")
    await page.waitForTimeout(4000)
})

test.skip("Test  skip Method",async({page})=>{
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.locator("#username").fill("DemoSalesManager")
await page.locator("#password").fill("crmsfa")
await page.locator(".decorativeSubmit").click()
await page.locator(`text='CRM/SFA'`).click()
    
})

// test.only("Test  only Method",async({page})=>{
//     await page.goto("https://www.leafground.com/select.xhtml")
//     await page.selectOption(".ui-selectonemenu",{label:'Playwright'})  
// })

test.fail("Test  Fail Method",async({page})=>{
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.locator("#username").fill("DemoSalesManager")
await page.locator("#password").fill("crmsfa")
await page.locator(".decorativeSubmit").click()
await page.locator(`text='CRM/SFA'`).click()
    
})

test.fixme("Test  fixme Method",async({page})=>{
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.locator("#username").fill("Demosalesmanger")
await page.locator("#password").fill("crmsfa")
})

test("Test  slow",async({page})=>{
test.slow()
await page.goto("https://parabank.parasoft.com/parabank/index.htm")
await page.getByRole('link',{name:'Admin Page'}).click()
await page.getByAltText("ParaBank").click()
await page.getByText("Locations").first().click()
})

test("Test  info",async({page})=>{

    test.info().annotations.push({type:"Test Info", description:"This is a test info annotation"},
        {type:"author",description:"Dilip"}
    )

await page.goto("https://parabank.parasoft.com/parabank/index.htm")
await page.getByRole('link',{name:'Admin Page'}).click()
await page.getByAltText("ParaBank").click()
await page.getByText("Locations").first().click()
})


