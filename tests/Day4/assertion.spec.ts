import test,{expect} from '@playwright/test'

test("Assertion",async({page})=>{

    await page.goto("https://www.leafground.com/input.xhtml")

    // //hard assert - if this line fails the next line will not be executed, it terminate with error
    // await expect(page.getByPlaceholder("Babu Manickam")).toBeDisabled()
    // console.log("Disabled field assertion passed")

     //soft assert - if this assert fails the next line will be executed
    await expect.soft(page.getByPlaceholder("Babu Manickam")).toBeDisabled()
    console.log("Disabled field assertion passed")

//visit playwright.dev/docs/test-assertions to see all the methods of assertions

    //Non retry assertion- mostly value comparison comes under this
    let titleValue='Input components'
    let expectedtitle = await page.title()
    //assertion
    expect.soft(expectedtitle).toEqual(titleValue)
    console.log("Title assertion passed")







})