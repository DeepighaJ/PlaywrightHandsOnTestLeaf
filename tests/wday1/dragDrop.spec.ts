import test from '@playwright/test'

test.skip("Drag and drop",async({page})=>{

    await page.goto("https://www.leafground.com/drag.xhtml")

    const drag =  page.locator("//div[@id='form:drag_content']");
    const drop = page.locator("//div[@id='form:drop_header']");

    await drag.waitFor({state:"visible"});
    await drop.waitFor({state:"visible"});

    await drag.dragTo(drop);    //this works
    await page.waitForTimeout(2000);
    
})

test.fixme("Drag Around",async({page})=>{ //not sure how to move around 

    await page.goto("https://www.leafground.com/drag.xhtml")
    const drag= page.locator("//div[@id='form:conpnl']");
    await drag.waitFor({state:"visible"})


})

test.fixme("Drag Columns",async({page})=>{

    await page.goto("https://www.leafground.com/drag.xhtml#");

    const dragName = page.getByRole("columnheader",{name:"Name"}).first();
    const dropCol = page.getByRole("columnheader",{name:"Category"}).first();

    await dragName.waitFor({state:"attached"})
    await dropCol.waitFor({state:"attached"})

    await dragName.dragTo(dropCol);     //shows column reordered but not changed visually
    await page.waitForTimeout(5000);

})

test.only("Drag Rows",async({page})=>{

    await page.goto("https://www.leafground.com/drag.xhtml#");

    const dragName = page.locator("tr[data-ri='1'] td.ui-sortable-handle").first();
    const dropCol = page.locator("tr[data-ri='2'] td.ui-sortable-handle").first();

    await dragName.waitFor({state:"attached"})
    await dropCol.waitFor({state:"attached"})

    await dragName.dragTo(dropCol); //not working
    await page.waitForTimeout(2000);

})