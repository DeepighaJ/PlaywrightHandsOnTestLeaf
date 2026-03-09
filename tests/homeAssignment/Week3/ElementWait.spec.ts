import test,{expect} from '@playwright/test'

test("Handling Element wait",async({page})=>{

    page.goto("https://leafground.com/waits.xhtml")
    await page.locator("//span[text()='Click']").first().click()
    //await page.locator("//span[text()='I am here']").waitFor()
    await page.locator("//span[text()='I am here']").click()

    await page.locator("//span[text()='Click First Button']").click()

    await page.locator("//span[text()='Click Second']").click()

    await expect.soft( page.locator("//span[text()='I am about to hide']")).toBeVisible() //Before Click its visible

    await page.locator("//span[text()='Click']").nth(1).click()

    await page.waitForTimeout(5000)

    await expect.soft( page.locator("//span[text()='I am about to hide']")).toBeHidden() //After click its invisible/hidden

    expect.soft(await page.locator("//div[@class='col-12']//span[@class='ui-button-text ui-c']").last().textContent()).toEqual("I am going to change!")

    await page.locator("//span[text()='Click']").nth(2).click()
    await page.waitForTimeout(5000)

    expect.soft(await page.locator("//div[@class='col-12']//span[@class='ui-button-text ui-c']").last().textContent()).toEqual("Did you notice?")


})