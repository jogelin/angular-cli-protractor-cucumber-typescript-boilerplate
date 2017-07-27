import { AppPageObject } from '../pages/app.po';
import { defineSupportCode } from 'cucumber';

defineSupportCode(({Given, Then}) => {

  const page: AppPageObject = new AppPageObject();


  Given(/^I visit the Homepage$/, async function () {
    await page.navigateTo();
  });

  Then(/^I see the welcome message$/, async function () {
    await expect(page.getParagraphText()).toBe('Welcome to app!!');
  });

});
