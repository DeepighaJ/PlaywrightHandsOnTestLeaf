import test from '@playwright/test';

import logData from '../../Data/LT_Login.json'  //multiple set of data given as array

//let login = logData[0]  //if i want to run only for first set of data
for(let login of logData){ //to run fro multiple set of data
test(`JSON File ${login.TestID}`,async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")

    await page.locator("#username").fill(login.username)
    await page.locator("#password").fill(login.password)

    await page.locator("input[value='Login']").click()

    await page.waitForTimeout(3000)

    await page.locator("//a[contains(text(),'CRM/SFA')]").click()
})
}
