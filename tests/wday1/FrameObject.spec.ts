import test from '@playwright/test';

test("Handle frame with object",async({page})=>{

    await page.goto("https://www.leafground.com/frame.xhtml")

    //when there is no id or name attribute and src url is there then we can handle frame with object

    await page.frame({url:'https://www.leafground.com/default.xhtml'})?.locator("#Click").click()
    //question mark means the return type is either frame or null, 
    // if it is null then it will not throw error and it will move to next line of code
    //if frame not present then ignore it

    //nested frame handling
    await page.frame({name:'frame2'})?.locator("#Click").click()
    

})