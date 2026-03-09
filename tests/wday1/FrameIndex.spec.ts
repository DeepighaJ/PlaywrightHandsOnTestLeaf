import test from '@playwright/test';

test("Handle Frame with Index",async({page})=>{

    await page.goto("https://www.leafground.com/frame.xhtml")

    const numberofFrames= await page.frames() //returns array of no. of frames in the page includig the main page also, it will return the array of frames

    console.log("Number of frames in the page: "+numberofFrames.length)

    //no need to switch back to main page in playwright, it will automatically switch to main page after performing the action in the frame

    //handle frame with index
    const frame1=numberofFrames[1] //index starts with 0, 0 is main page, 1 is first frame, 2 is second frame

    await frame1.locator("#Click").click()

    await page.waitForTimeout(3000)


})

test("Handle Frame with Locator",async({page})=>{

    await page.goto("https://www.leafground.com/frame.xhtml")

    //locate the frame and then perform the action in the frame,
    //  it is the alternate way to handle frame without using index, 
    // it is more reliable than index because if the number of frames changes then the index will change 
    // but the locator will not change
    //framelocator().locator().click(); frame locator is inbuild method in playwright to handle frame with locator, 
    // it will return the frame locator and then we can perform the action in the frame
    await page.frameLocator("(#iframe)[1]").locator("#Click").click() 
    //no need to switch back to main page in playwright, it will automatically switch to main page after performing the action in the frame

    //nested frame handling
    //handle outer frame then handle inner frame then perfrom the action in the inner frame
    await page.frameLocator("(#iframe)[3]").frameLocator("#frame2").locator("#Click").click()
    
    await page.waitForTimeout(3000)

    
})

test.only("Handle Frame with Content Frame",async({page})=>{

    await page.goto("https://www.leafground.com/frame.xhtml")

    //locate the frame and then perform the action in the frame, it is the alternate way to handle frame without using index, it is more reliable than index because if the number of frames changes then the index will change but the locator will not change
    //framelocator().locator().click(); frame locator is inbuild method in playwright to handle frame with locator, it will return the frame locator and then we can perform the action in the frame
    await page.frameLocator("(#iframe)[1]").locator("#Click").click() 
    //no need to switch back to main page in playwright, it will automatically switch to main page after performing the action in the frame

    //nested frame handling
    //handle outer frame then handle inner frame then perfrom the action in the inner frame
    await page.frameLocator("(#iframe)[3]").frameLocator("#frame2").locator("#Click").click()
    
    await page.waitForTimeout(3000)

    
})