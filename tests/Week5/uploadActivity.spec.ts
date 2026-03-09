import test from '@playwright/test';

test("Handle Upload with Input",async({page})=>{

    await page.goto("https://www.naukri.com/registration/createAccount")

    await page.locator('//h2[contains(text(),"experienced")]').click()

    await page.locator("//input[@id='resumeUpload']").setInputFiles("Data/testdata.docx")

    await page.waitForTimeout(3000)

})

test.only("File upload with Listener",async({page})=>{

      await page.goto("https://www.naukri.com/registration/createAccount")

     await page.locator('//h2[contains(text(),"experienced")]').click()

     const fileUpload = page.waitForEvent('filechooser')
     await page.locator("//button[text()='Upload Resume']").click()

     const filechooser = await fileUpload

     await filechooser.setFiles("Data/testdata.docx")

     await page.waitForTimeout(3000)

})