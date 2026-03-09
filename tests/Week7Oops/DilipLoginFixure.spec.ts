import { customFixture } from "../Week7Oops/CFixtureSF";


//test("",async{page})
customFixture("Click Accounts",async({salesForceLogin})=>{
//the login will not be skipped it will be happening here

    const title= await salesForceLogin.title()
    console.log(title)


await salesForceLogin.locator("//span[text()='Accounts']").first().click()

})
//multiple test it will login and take it from them.
