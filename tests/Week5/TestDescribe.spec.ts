import test from '@playwright/test'

test.describe('Smoke testing',()=>{

    test.describe.configure({mode:'parallel'})

test("Test  info",async({page})=>{
    test.info().annotations.push({type:"Test Info", description:"This is a test info annotation"},
        {type:"author",description:"Dilip"}
    )
await page.goto("https://parabank.parasoft.com/parabank/index.htm")
await page.getByRole('link',{name:'Admin'}).click()
await page.getByAltText("ParaBank").click()
await page.getByText("Locations").first().click()
})

test("Test  info2",async({page})=>{
    test.info().annotations.push({type:"Test Info", description:"This is a test info annotation"},
        {type:"author",description:"Dilip"}
    )
await page.goto("https://parabank.parasoft.com/parabank/index.htm")
await page.getByRole('link',{name:'Admin'}).click()
await page.getByAltText("ParaBank").click()
await page.getByText("Locations").click()
})

test("Test Method",async({page})=>{
    await page.goto("https://www.amazon.com")
    await page.waitForTimeout(4000)
})

test("Test  info 3",async({page})=>{

    test.info().annotations.push({type:"Test Info", description:"This is a test info annotation"},
        {type:"author",description:"Dilip"}
    )
await page.goto("https://parabank.parasoft.com/parabank/index.htm")
await page.getByRole('link',{name:'Admin Page'}).click()
await page.getByAltText("ParaBank").click()
await page.getByText("Locations").first().click()
})

})
