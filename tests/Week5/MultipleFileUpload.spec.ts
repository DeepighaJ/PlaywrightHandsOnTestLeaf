import test from '@playwright/test';

test("Handle File upload with Input tag",async({page})=>{
    
    await page.goto("https://www.leafground.com/file.xhtml")

    //1 way Tag name should be <input> and attribute is type='File' then use .setInputFile()
    //event listerner create promise
    //.setFile()
})

test.only("Handle File upload with Event Listner",async({page})=>{
    
    await page.goto("https://www.leafground.com/file.xhtml")


    //create a promise
    const fileUpload=page.waitForEvent('filechooser')
    //click on the button which will open the file chooser
    await page.locator("//span[text()='Choose']").nth(1).click()
    //wait for the promise to resolve and get the file chooser object
    const filechooser=await fileUpload
    await filechooser.setFiles(["Data/testImage.jpg", "Data/TestImg2.jpg","Data/testImage3.jpg"])
    await page.waitForTimeout(5000)
    
})