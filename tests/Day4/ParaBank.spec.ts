import test from '@playwright/test'

test("Playwright Inbuild Locator",async({page})=>{

await page.goto("https://parabank.parasoft.com/parabank/index.htm")

await page.getByRole('link',{name:'Admin Page',exact:true}).click()
await page.waitForTimeout(3000)
await page.getByAltText("ParaBank").click()
await page.waitForTimeout(3000)
//await page.getByTitle("").click()
await page.getByText("Locations").first().click()//
await page.getByRole('button',{name:'Search',exact:true}).click()
await page.waitForTimeout(3000)
await page.getByPlaceholder("Search").fill("Hiii")
await page.getByTestId('directions').click(); //when data-testid attribute is available in dom


})