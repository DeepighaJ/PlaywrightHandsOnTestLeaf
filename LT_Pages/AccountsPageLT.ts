import { HomePageLT } from "./HomePageLT";


export class AccountsPageLT extends HomePageLT{

    async clickOnCreateAccount()
    {
        await this.page.getByRole("link",{name:'Create Account'}).first().click()
    }

    async enterAccountName(name:string)
    {
        await this.page.locator("input#accountName").fill(name)
    }

    async submitCreateAccount()
    {
        await this.page.getByRole("button",{name:'Create Account'}).click()
    }

}