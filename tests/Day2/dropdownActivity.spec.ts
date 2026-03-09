import test from '@playwright/test';

test ("Select tag Dropdown Handling",async({page})=>{

    await page.goto("https://www.telerik.com/contact")

    await page.selectOption('#Dropdown-1',{label:'Account activation'})

    await page.waitForTimeout(2000)

    await page.selectOption('[name="DropdownListFieldController"]',{label:'Kendo UI' })

    await page.waitForTimeout(2000)


})

