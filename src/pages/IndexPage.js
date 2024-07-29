const {expect} = require('@playwright/test');
const {SignInPage} = require('./SignInPage');

class IndexPage {

  signInBtn = "//a[@class='login']";
  myStoreLogo = "//img[@class='logo img-responsive']";
  productSearchBox = "search_query_top";
  productSearchBtn = "//button[@name='submit_search']";
  constructor(page) 
  {
    this.page = page;
  }

  async navigateToTheIndexPage() {
    await this.page.goto("http://www.automationpractice.pl/index.php");
    await expect(this.page).toHaveURL("http://www.automationpractice.pl/index.php");
  }
  async clickOnSignIn() {
    await this.page.locator(this.signInBtn).click();
    
    const signInPage = new SignInPage(this.page);
    return signInPage;
  }

  async getSignInPageUrl(){
    await this.page.locator(this.signInBtn).click();
    await expect(this.page).toHaveURL("http://www.automationpractice.pl/index.php?controller=authentication&back=my-account");
  }

  async validateLogo() {
    await expect(this.page.locator(this.myStoreLogo)).toBeVisible();
  }
}

module.exports = {IndexPage};