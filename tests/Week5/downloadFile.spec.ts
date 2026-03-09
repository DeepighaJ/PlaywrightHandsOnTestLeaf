////span[text()='Download']
import test from '@playwright/test'
test("File Download",async({page})=>{


    await page.goto("https://www.leafground.com/file.xhtml")
    
    //create a promise to wait for the download event
    const downloadPromise=page.waitForEvent('download')
    //click on the download button to trigger the download event
    await page.locator("//span[text()='Download']").click()
    //wait for the promise to resolve and get the download object
    const download=await downloadPromise

    await download.saveAs("Data/"+download.suggestedFilename())
})