import test from "@playwright/test"
import dotenv from 'dotenv' //this dotenv is custom variable

//set path for env file
dotenv.config({path:'Data/LT_LoginDEV.env'})

test("ENV File",async({page})=>{

    //process --> global variable
    //env --> env file
    //variable --> LT_Url

    let url = process.env.LT_Url as string
    let user = process.env.LT_Username as string
    let pass = process.env.LT_Password as string

await page.goto(url)
await page.locator("#username").fill(user)
await page.locator("#password").fill(pass)
await page.locator(".decorativeSubmit").click()
await page.locator(`text='CRM/SFA'`).click()
})