import test, { expect } from'@playwright/test'
import { Assert } from 'assert'

test("Salesforce login",async({page})=>{

    await page.goto("https://login.salesforce.com")

    await page.getByRole('textbox',{name:'username'}).fill("dilipkumar.rajendran@testleaf.com")

    await page.getByRole('textbox',{name:'password'}).fill("**********")

    await page.locator("#Login").click()
    
    await page.waitForTimeout(5000)

    await page.getByTitle('App Launcher').click()

    await page.waitForTimeout(2000)

    await page.locator("//button[text()='View All']").click()

    await page.getByPlaceholder("Search apps or items...").fill("Opportunities")

    await page.locator("//p[@class='slds-truncate']/mark").click()
    
    await page.waitForTimeout(2000)

    await page.locator("//div[@title='New']").click()

    let OpportunityName = "Deepigha Japamony"

    await page.locator("//input[@name='CloseDate']").fill("05/02/2026")
    await page.waitForTimeout(1000)

    await page.locator("//input[@name='Name']").fill(OpportunityName)
    
   await page.locator("//span[@class='slds-truncate' and text()='--None--']").first().click()

   await page.locator("//lightning-base-combobox-item//span[@title='Needs Analysis']").click()

   await page.getByPlaceholder("Search Accounts...").click()

   await page.locator("//span[@title='SystemLeaf']").click()
   
   await page.locator("//button[@name='SaveEdit']").click()

   await expect.soft(await page.locator("//lightning-formatted-text[@slot='primaryField']").textContent()).toEqual(OpportunityName)


//     await page.waitForTimeout(2000)

  
//     let number = await page.locator("//span[@class='slds-media__body']/span").count()

//     for(let i =0;i<=number;i++)
//     {
//        let  text = await page.locator(`(//span[@class='slds-media__body']/span)[${i}]`).textContent()
//        if(text=='Need Analysis')
//             await page.locator(`(//span[@class='slds-media__body']/span)[${i}]`).click();

//     }
   
//  await page.waitForTimeout(2000)
    

})