import test from '@playwright/test';

test ("Handle Alert with Page.once",async({page})=>{

    page.once('dialog',alert=>{
        const type=alert.type()
        console.log(type)
        const msg=alert.message()
        console.log(msg)
        alert.accept()
    })

    await page.goto("https://www.leafground.com/alert.xhtml")
    await page.locator("//span[text()='Show']").nth(1).click()
    await page.waitForTimeout(4000)
    await page.locator("//span[text()='Show']").nth(4).click()
  }
)

test.only ("Handle Alert with Page.on",async({page})=>{

    page.once('dialog',alert=>{
        const type=alert.type()
        console.log(type)
        const msg=alert.message()
        console.log(msg)
                //action
        if(type==='confirm'){
            alert.accept()
        }
        else if(type==='alert')
        {
            alert.accept()
        }
        else if(type==='prompt')
        {
            alert.accept("Playwright")
        }
        
    })

    await page.goto("https://www.leafground.com/alert.xhtml")
    await page.locator("//span[text()='Show']").nth(0).click() //alert link
    await page.waitForTimeout(4000)
    await page.locator("//span[text()='Show']").nth(1).click()  //confirm alert link
    await page.waitForTimeout(4000)
    await page.locator("//span[text()='Show']").nth(4).click() //promt alert link
    await page.waitForTimeout(4000)
  }
)



