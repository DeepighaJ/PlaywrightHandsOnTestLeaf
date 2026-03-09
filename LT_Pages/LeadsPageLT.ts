import { Page } from "@playwright/test";
import { HomePageLT } from "./HomePageLT";


export class LeadsPageLT extends HomePageLT{

    async clickOnCreateLead(){
        await this.page.locator("//a[text()='Create Lead']").click() 
    }
    
    async enterCompanyName(cname:string){
        await this.page.locator("#createLeadForm_companyName").fill(cname)
    }

    async enterFirstName(firstName: string){
        await this.page.locator("#createLeadForm_firstName").fill(firstName)
    }

    async enterLastName(lastName:string){
        await this.page.locator("#createLeadForm_lastName").fill(lastName)
    }
    
    async enterSalutation(salutation:string){
        await this.page.locator("#createLeadForm_personalTitle").fill(salutation)
    }

    async enterTitle(title:string){
        await this.page.locator("#createLeadForm_generalProfTitle").fill(title)
    }

    async enterAnnualRevenue(revenue:string){
        await this.page.locator("#createLeadForm_annualRevenue").fill(revenue)
    }

    async enterDepartmentName(dept:string){
        await this.page.locator("#createLeadForm_departmentName").fill(dept)
    }

    async enterPhoneNumber(phn:string){
        await this.page.locator("#createLeadForm_primaryPhoneNumber").fill(phn)
    }

    async SubmitCreateLead(){
        await this.page.locator(".smallSubmit").click()
    }

}