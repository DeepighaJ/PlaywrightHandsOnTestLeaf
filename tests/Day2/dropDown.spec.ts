import test from '@playwright/test'

test("Select DropDown Options",async({page})=>{

    await page.goto("https://www.leafground.com/select.xhtml")

    //if select tag is avalilable in dom go for selectOption method
    await page.selectOption(".ui-selectonemenu",{label:'Playwright'})
    // await page.selectOption("",{index:})
    // await page.selectOption("",{value:''})

    //non-selct tag dropdowm
    await page.locator(".ui-selectonemenu-label.ui-inputfield.ui-corner-all").first().click()
    await page.locator("li[class='ui-selectonemenu-item.ui-selectonemenu-list-item.ui-corner-all']").nth(2).click()
})