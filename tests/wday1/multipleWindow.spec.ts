
import test from '@playwright/test'


test("Multiple Window Handleing",async({page,context})=>{


await page.goto("https://www.leafground.com/window.xhtml")


//promise.all[]
//create promise
const [parentPage]=await Promise.all([
context.waitForEvent('page'),
//action
await page.locator("//span[text()='Open Multiple']").click()
])
//[parentPage] =>{p1,ch1,ch2}
const count=parentPage.context().pages()
console.log(count.length)

//Web Table
//Dashboard
let dashboard:any
let webtable:any


for(let i=0;i<count.length;i++){
const title= await count[i].title()

if(title==='Dashboard'){
//resolve the promise
dashboard=count[i]  //child window
}else if(title==='Web Table'){
webtable=count[i]   //another vhild window
}
}


await dashboard.locator('#email').fill("admin@testleaf.com")

await webtable.getByPlaceholder("Search...").fill("Russia")


})