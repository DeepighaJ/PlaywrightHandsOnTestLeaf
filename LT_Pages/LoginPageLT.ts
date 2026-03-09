import { Page } from "@playwright/test";

export class LoginPageLT{

    page:Page
    constructor(page:Page)
    {
        this.page =page
    }

    async loadURL(){
        await this.page.goto("http://leaftaps.com/opentaps/control/main")
    }

    async enterUserName(user:string){
        await this.page.locator("#username").fill(user)
    }

    async enterPassword(pass:string){
        await this.page.locator("#password").fill(pass)
    }

    async clickOnLogin(){
        await this.page.locator("input.decorativeSubmit").click()
    } 

}