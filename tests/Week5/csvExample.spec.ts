
import {parse} from "csv-parse/sync";
import fs from 'fs'
import test from '@playwright/test'

const data:any[]=parse(fs.readFileSync("Data/paraBank.csv"),{
    columns:true,
    skipEmptyLines:true //skip empty lines in csv file
})

for (let val of data)       //data parameterization with CSV data 
{

test(`CSV File ${val.TestCaseId}`,async({page})=>{
    await page.goto("https://parabank.parasoft.com/parabank/index.htm")
    await page.waitForTimeout(2000)
    await page.locator("//a[text()='Register']").click()
    await page.waitForTimeout(2000)
    await page.locator("//input[@id='customer.firstName']").fill(val.FirstName)
    await page.locator("//input[@id='customer.lastName']").fill(val.LastName)
    await page.locator("//input[@id='customer.address.city']").fill(val.City)
    await page.locator("//input[@id='customer.address.state']").fill(val.State)

})
}