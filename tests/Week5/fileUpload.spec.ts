import test from '@playwright/test'

test("File Upload with Input tag",async({page})=>{

await page.goto("https://www.leafground.com/file.xhtml")

await page.locator("//input[@type='file']").first().setInputFiles("Data/testdata1.docx")

await page.waitForTimeout(3000)
})

test.only("FIle upload with event listener",async({page})=>{

    await page.goto("https://www.leafground.com/file.xhtml")

    //create a promise
    const fileUpload=page.waitForEvent('filechooser')
    //click on the button which will open the file chooser
    await page.locator("//span[text()='Choose']").nth(1).click()
    //wait for the promise to resolve and get the file chooser object
    const filechooser=await fileUpload
    await filechooser.setFiles("Data/testImage.jpg")
    await page.waitForTimeout(5000)
    
})