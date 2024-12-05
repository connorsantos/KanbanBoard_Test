import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { KanbanPage } from '../pages/kanbanPage';
import { cardArray } from '../data/cardData';


test('Validate Kanban Board', async ({ page }) => {
    let loginPage: LoginPage;
    let kanbanPage: KanbanPage;

    loginPage = new LoginPage(page);
    kanbanPage = new KanbanPage(page);
    
    // Step 1: Login
    await loginPage.open();
    await loginPage.login();

    //For Each test in the json object:
    cardArray.forEach((card) => {

      //Step 2: Navigate to correct page
      if(card.page == "webApplicationPage"){
        kanbanPage.navToWebAppPage();
      } else {
        kanbanPage.navToMobileAppPage();
      }

      //Step 3: Validate the Card Placement and its tags
      if(card.status == "To Do"){
        kanbanPage.verifyTitleAndTagsInToDo(card.cardTitle, card.tags);
      } else if(card.status == "In Progress"){
        kanbanPage.verifyTitleAndTagsInProg(card.cardTitle, card.tags);
      } else {
        kanbanPage.verifyTitleAndTagsInDone(card.cardTitle, card.tags);
      }
    });
    
    
  });


        
