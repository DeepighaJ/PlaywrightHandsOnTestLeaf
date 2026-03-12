import test, { devices ,expect} from '@playwright/test'

test.use({

    ...devices['Galaxy S5']
    //...devices['iPad (gen 11)']

})

test("Mobile device Emulation",async({page})=>{

  await page.goto("https://www.amazon.in")

  await page.getByRole('button',{name:'Continue shopping'}).click()
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('Mobile under 30000');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).press('Enter');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  
})

