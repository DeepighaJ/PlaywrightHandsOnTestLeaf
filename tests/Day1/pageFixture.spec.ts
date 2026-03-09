import test from '@playwright/test';

//page fixture is reduce the 1st 3 lines of browser, context and page code by just adding page as parameter in the test method
test("Using Page Fixture", async ({page}) => {

    //browser details are fetched from the playwright.config.ts file
    
    await page.goto("https://www.amazon.com/")

    await page.waitForTimeout(4000)
})