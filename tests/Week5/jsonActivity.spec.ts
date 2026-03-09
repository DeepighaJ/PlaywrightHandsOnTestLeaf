import test from '@playwright/test';

import loginData from '../../Data/login.json' //data provided here

for(let login of loginData){ //iterating thru the data set

test(`Login for test case ${login.TestID}`,async({page})=>{  //use backtick in case of using reg expresion

    await page.goto("https://login.salesforce.com")

    await page.getByRole('textbox',{name:'username'}).fill(login.username)

    await page.getByRole('textbox',{name:'password'}).fill(login.password)

    await page.locator("#Login").click()
    
    await page.waitForTimeout(5000)
})
}