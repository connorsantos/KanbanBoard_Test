import { Page } from "@playwright/test";
import { config } from '../config/config.ts';

export class LoginPage{
    page: Page;

    constructor(page: Page){
        this.page = page
    }

    //locaters
    private username = "#username";
    private password = "#password";
    private loginBtn = "button[type='submit']";

    //openURL
    async open() {
        await this.page.goto(config.baseUrl);
    }

    //login
    async login(){
        await this.page.fill(this.username, config.username);
        await this.page.fill(this.password, config.password);
        await this.page.click(this.loginBtn);
    }

}