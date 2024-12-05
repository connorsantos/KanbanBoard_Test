import { Page, expect } from "@playwright/test";
import { todo } from "node:test";

export class KanbanPage{

    page: Page;

    constructor(page: Page){
        this.page = page
    }

    //locaters
    private navToWebBtn      = '//*[@id="root"]/div/div[1]/nav/button[1]';
    private navToMobileBtn   = '//*[@id="root"]/div/div[1]/nav/button[2]';
    private toDoColumn       = '//*[@id="root"]/div/div[2]/main/div/div/div[1]';
    private inProgressColumn = '//*[@id="root"]/div/div[2]/main/div/div/div[2]';
    private doneColumn       = '//*[@id="root"]/div/div[2]/main/div/div/div[4]';

    //actions
    async navToWebAppPage(){ await this.page.click(this.navToWebBtn);} 
    async navToMobileAppPage(){ await this.page.click(this.navToMobileBtn);}

    //Verify columns
    async verifyTitleAndTagsInToDo(titleCard: string, tags: Array<string>){
        const toDoDiv = this.page.locator('xpath=' + this.toDoColumn);
        const title = toDoDiv.locator('h3', { hasText: titleCard });
        expect(await title.textContent()).toBe(titleCard);
        tags.forEach( async (tag) =>{
            const tagName = toDoDiv.locator('span', { hasText: tag });
            expect(await tagName.textContent()).toBe(tag);
        });
    }
    
    async verifyTitleAndTagsInProg(titleCard: string, tags: Array<string>){
        const toDoDiv = this.page.locator('xpath=' + this.inProgressColumn);
        const title = toDoDiv.locator('h3', { hasText: titleCard });
        expect(await title.textContent()).toBe(titleCard);
        tags.forEach( async (tag) =>{
            const tagName = toDoDiv.locator('span', { hasText: tag });
            expect(await tagName.textContent()).toBe(tag);
        });
    }

    async verifyTitleAndTagsInDone(titleCard: string, tags: Array<string>){
        const toDoDiv = this.page.locator('xpath=' + this.doneColumn);
        const title = toDoDiv.locator('h3', { hasText: titleCard });
        expect(await title.textContent()).toBe(titleCard);
        tags.forEach( async (tag) =>{
            const tagName = toDoDiv.locator('span', { hasText: tag });
            expect(await tagName.textContent()).toBe(tag);
        });
    }

}