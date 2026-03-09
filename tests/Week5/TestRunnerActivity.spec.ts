import test from '@playwright/test';
 test.describe("Smoke Testing",()=>{

   // test.describe.configure({mode: 'default',retries:1}) //default mode is sequential way but in config we given fully parallel true
    //so now its going to override the config.ts and tcs run in sequence
    //test.describe doesnt look for config file. IF any test fails it doenst stop the exeuction of other testcases
    //retry the failing testcases alone to 1 time.

    test.describe.configure({mode: 'serial',retries:1})  //its like depends on method, if previous test completed oly this will executed
    //if one test fail it will the next test are marked skipped and not executed
    //if any one test case fail aslo it start execution from first method


 test.skip("Login to Leaftaps",async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")

    await page.locator("#username").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")

    await page.locator("input[value='Login']").click()

    await page.waitForTimeout(3000)

    await page.locator("//a[contains(text(),'CRM/SFA')]").click()

 })

 
 test("TEst infor1",async({page})=>{

 
 test.info().annotations.push({type:'smoke',description:'Check the Login fucntion working'},
        {type:'Author',description:'dilip'}
    )
    })


 test.fail("Login to amazon",async({page})=>{
    await page.goto("https://amazon.com")

})

})