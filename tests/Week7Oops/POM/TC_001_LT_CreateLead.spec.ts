import test from '@playwright/test'

import { LoginPageLT } from '../../../LT_Pages/LoginPageLT'
import { LeadsPageLT } from '../../../LT_Pages/LeadsPageLT'

test("Create Lead in LeafTaps",async({page})=>{
    
    let lead = new LeadsPageLT(page);

    await lead.loadURL()
    await lead.enterUserName("Demosalesmanager")
    await lead.enterPassword("crmsfa")
    await lead.clickOnLogin()
    await lead.clickOnCRMSFALink()
    await lead.clickOnLeads()
    await lead.clickOnCreateLead()
    await lead.enterCompanyName("Test Leaf Playwright ")
    await lead.enterFirstName("Deepigha")
    await lead.enterLastName("Rajesh")
    await lead.enterSalutation("Mrs.")
    await lead.enterTitle("Automation")
    await lead.enterAnnualRevenue("12300000")
    await lead.SubmitCreateLead()

})

test("Edit Lead in LeafTaps",async({page})=>{
    
    let lead = new LeadsPageLT(page);

    await lead.loadURL()
    await lead.enterUserName("Demosalesmanager")
    await lead.enterPassword("crmsfa")
    await lead.clickOnLogin()
    await lead.clickOnCRMSFALink()
    await lead.clickOnLeads()
    await lead.clickOnCreateLead()
    await lead.enterCompanyName("Test Leaf Playwright ")
    await lead.enterFirstName("Deepigha")
    await lead.enterLastName("Rajesh")
    await lead.enterSalutation("Mrs.")
    await lead.enterTitle("Automation")
    await lead.enterAnnualRevenue("12300000")
    await lead.SubmitCreateLead()

    await page.getByRole("link",{name: 'Edit'}).click()

    await page.locator("input#updateLeadForm_companyName").fill("Test Leaf QA")

    await page.getByRole("button",{name:'Update'}).click()

    await page.waitForTimeout(1000)

})
