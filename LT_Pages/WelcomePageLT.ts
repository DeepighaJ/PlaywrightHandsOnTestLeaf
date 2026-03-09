import { LoginPageLT } from "./LoginPageLT"

export class WelcomePageLT extends LoginPageLT{

   async clickOnCRMSFALink()
   {
        await this.page.locator("//a[contains(text(),'CRM/SFA')]").click()
   }

          
}