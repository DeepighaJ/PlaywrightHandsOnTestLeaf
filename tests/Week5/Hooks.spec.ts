import test from '@playwright/test'
import fs from 'fs'
import {parse} from 'csv-parse/sync'

let record:any[]

test.describe.parallel("Hooks Implementation",()=>{ //try giving serial and see 

    test.beforeAll("Read the value from CSV",async()=>{

           record= parse(fs.readFileSync("Data/Login.csv"),{
                   columns:true,
                   skipEmptyLines:true
                   })
        console.log("Before All hooks")

    })

    test.beforeEach("Login",async({page})=>{
        let val=record[1]
        await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.locator("#username").fill(val.username)
        await page.locator("#password").fill(val.password)
        await page.locator(".decorativeSubmit").click()
        await page.locator(`text='CRM/SFA'`).click()

        console.log("Before Each")

    })

    test("Leads",async({page})=>{
        console.log("TC1 Leads")
        await page.locator(`text='Leads'`).click()

    })

    test("Case",async({page})=>{
        console.log("TC2 Cases")
        await page.locator(`text='Cases'`).click()
    })

    test.afterEach("Test result",async({},testinfo)=>{  //default inbuilt parameter of playwright to get info of test
        console.log(testinfo.status)
        console.log(testinfo.title)
        console.log("After Each")
    })
    
    test.afterAll("Report attachment",()=>{
        console.log("report")
        console.log("After ALL")
    })

})