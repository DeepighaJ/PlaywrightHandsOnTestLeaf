import test from '@playwright/test';

test("Handle Window", async({page,context})=>{


    await page.goto("https://www.leafground.com/window.xhtml")
    //click on parent page
    await page.locator("//span[text()='Open']").click()
    //create promise
    const parentWindow = context.waitForEvent('page')

    //get new page
    const childwindow=await parentWindow

    await childwindow.getByPlaceholder("Write your message...").fill("Hello! Have a great day!")

    childwindow.close()

    await page.locator("//span[text()='Open Multiple']").click()

})


