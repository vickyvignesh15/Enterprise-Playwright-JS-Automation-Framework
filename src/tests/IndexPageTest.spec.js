const {test, expect} = require('@playwright/test');
const {IndexPage} = require('../pages/IndexPage');

test('IndexPage Navigation Test', async ({page}) => {
  const indexpage = new IndexPage(page);
  await indexpage.navigateToTheIndexPage();
})

test('Logo Visibility Test', async ({page}) => {
  const indexpage = new IndexPage(page);
  await indexpage.navigateToTheIndexPage();
  await indexpage.validateLogo();
})

test('Navigation To SignIn Page Test', async ({page}) => {
  const indexpage = new IndexPage(page);
  await indexpage.navigateToTheIndexPage();
  await indexpage.getSignInPageUrl();
})