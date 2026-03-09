import test from '@playwright/test';

import { AccountsPageLT } from '../../../LT_Pages/AccountsPageLT';

test("Create Account in LeafTaps",async({page})=>{

    let acc = new AccountsPageLT(page);

    await acc.loadURL()
    await acc.enterUserName("Demosalesmanager")
    await acc.enterPassword("crmsfa")
    await acc.clickOnLogin()
    await acc.clickOnCRMSFALink()
    await acc.clickOnAccounts()
    await acc.clickOnCreateAccount();
    await acc.enterAccountName("Deepigha");
    await acc.submitCreateAccount()
   
})
