import test from '@playwright/test'

test.describe("Regression Testing",()=>{

    test.describe.configure({mode:'default',retries:1})
    //test.describe.configure({mode:'serial',retries:1})
    test("TC1",async({page})=>
    {
        test.slow()
        await page.goto("https://www.amazon.com")
        console.log("Test Case 1 Executed , Amazon")
        
    })
    test.skip("TC2",async({page})=>              //this will be skipped
    {
        await page.goto("https://www.flipkart.com")
        console.log("Test Case 2 Executed, Flipkart")
        
    })
    test.fail("TC3",async({page})=>             //this will fail while running
    {
        await page.goto("https://www.macys.com")
        console.log("Test Case 3 Executed, Macys")
        
    })
    test.fixme("TC4",async({page})=>            //this will be skipped to as this code is not ready yet
    {
        await page.goto("https://www.nike.com")
        console.log("Test Case 4 Executed, Nike")
        
    })
    test("TC5",async({page})=>
    {   
        test.info().annotations.push({type:'Scenario',description:'Validate this website has Dr.Suess author books'})
        //to print info about test in Report
        await page.goto("https://www.seussville.com/")
        console.log("Test Case 4 Executed, Books")
        
    })
    
    test.use({storageState:"helper/LeafTaps_SS.json"})
    test("Use Storage state TestCase 6",async({page})=>{
        //directly hitting homepage without login
        await page.goto("http://leaftaps.com/crmsfa/control/myHomeMain")
        console.log("Test Case 5 Executed, Storage State")
    })

})