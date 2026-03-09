import { parse } from "csv-parse/sync";
import fs from 'fs'
import test from "@playwright/test";

const data:any[]=parse(fs.readFileSync("Data/Login.csv"),{
columns:true,
skipEmptyLines:true
})

//for(let val of data){zz

let val=data[1]

test(`CSV File ${val.tcid}`,async({page})=>{ 
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.locator("#username").fill(val.username)
await page.locator("#password").fill(val.password)
await page.locator(".decorativeSubmit").click()
await page.locator(`text='CRM/SFA'`).click()

})
//}