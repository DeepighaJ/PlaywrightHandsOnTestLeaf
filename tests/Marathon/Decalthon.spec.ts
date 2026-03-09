import test ,{expect} from '@playwright/test';

test("Search add product to cart",async({page})=>{

    await page.goto("https://www.decathlon.in/")
    
    console.log(await page.title())
    expect(page).toHaveTitle("Buy Sporting Goods, Sportswear and Equipments | Download App")

   await page.getByText('Search for  ').first().click();
   const searchbox=  page.getByRole('textbox')
   await searchbox.click();
   await expect.soft(searchbox).toBeEnabled();
   await searchbox.fill("shoes");
   await searchbox.press('Enter')

   await page.waitForTimeout(3000);

   console.log(await page.title())
   await expect.soft(page).toHaveTitle("Search | shoes")

   const genderFilter = page.locator("//span[contains(text(),'Men')]");
   await genderFilter.click();
   
//await page.locator("//span[text()='Men (276)	']").click()
await page.locator("//span[contains(text(),'Running')]").click();   //why only this order executes but not with size first
await page.waitForTimeout(5000)
await page.locator("//span[contains(text(),'Uk 10.5 - eu 45')]").click();

/*
   const sizeSearch = page.getByPlaceholder("Search...").nth(1);
   await sizeSearch.click()
   await sizeSearch.pressSequentially("Running")
   await sizeSearch.press('Enter')
   await page.waitForTimeout(2000)

   const categoryFilter = page.locator("//span[contains(text(),'Running')]"); 
   await categoryFilter.first().click();

   const sizeFilter = page.locator("//span[contains(text(),'Uk 10.5')]");
   //const sizeFilter = page.getByText("Uk 10.5Uk 10.5 - eu 45 (3)	");
   await sizeFilter.click();
   */ 
   await page.locator('span').filter({ hasText: 'Most Relevant' }).click();

   const ullist = page.locator('.block.absolute').first()

   const count =await ullist.locator("li").count();
   console.log(count)

   for(let i=0;i<count;i++)
   {
    if(await ullist.locator("li").nth(i).textContent()==='Price: High to Low')
    {
    ullist.locator("li").locator("a").nth(i).click();
    break;
    }
   }

   await page.getByAltText("Men Running Shoes Superior Grip Cushioned Upto 20km/week, Jogflow 190.1 - Grey").first().click();
   await page.waitForTimeout(2000)

   await page.getByText("10.5").click()

   await page.getByRole('button', { name: 'addToCart' }).click()

   await page.locator("//p[text()='Cart']").click();

   await page.waitForTimeout(2000)

   const totalAmount = await page.locator("//div[@data-test-id='cart:cart-checkout-total-cart-value']/p").textContent();
  // const totalAmount = await page.getByTestId("cart:cart-checkout-total-cart-value").innerText() -- why this isnt working?
   console.log("The total cart amount: ",totalAmount)


})