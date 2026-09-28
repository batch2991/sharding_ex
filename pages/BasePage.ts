import { Page } from "@playwright/test";
import { CommonLoc } from "./CommonLocators";

export class BasePage {
    
    protected page: Page  
    protected common =new CommonLoc()

    constructor(page: Page) {
        this.page = page
    }
    async openUrl(url: string) {
        await this.page.goto(url)
    }
}
