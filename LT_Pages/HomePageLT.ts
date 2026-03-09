import { WelcomePageLT } from "./WelcomePageLT";

export class HomePageLT extends WelcomePageLT{

    async clickOnLeads()
    {
        await this.page.getByRole("link",{name:'Leads'}).click()
    }

    async clickOnAccounts()
    {
        await this.page.getByRole("link",{name:'Accounts'}).click()
    }

    async clickOnIndividuals()
    {
        await this.page.getByRole("link",{name:'Individuals'}).click()
    }
}