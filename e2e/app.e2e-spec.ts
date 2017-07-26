import { AngularCliProtractorCucumberTypescriptBoilerplatePage } from './app.po';

describe('angular-cli-protractor-cucumber-typescript-boilerplate App', () => {
  let page: AngularCliProtractorCucumberTypescriptBoilerplatePage;

  beforeEach(() => {
    page = new AngularCliProtractorCucumberTypescriptBoilerplatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
