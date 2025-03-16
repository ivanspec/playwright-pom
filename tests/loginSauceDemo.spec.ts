import { test } from '@playwright/test';
import { LoginPage } from '../page-object/loginPage';

let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  loginPage = new LoginPage(page);
});

test('user failed login cause user has been locked', async () => {
  const errorMsg = 'Epic sadface: Sorry, this user has been locked out.'

  await loginPage.assertTitlePage();
  await loginPage.fillLogin('locked_out_user','secret_sauce')
  await loginPage.clickLogin();
  await loginPage.getErrorLogin(errorMsg)
});

test('user failed login cause username is not found', async () => {
  const errorMsg = 'Epic sadface: Username and password do not match any user in this service'

  await loginPage.assertTitlePage();
  await loginPage.fillLogin('test123','secret_sauce')
  await loginPage.clickLogin();
  await loginPage.getErrorLogin(errorMsg)
});

test('user sucessfully login saucedemo', async () => {
  await loginPage.assertTitlePage();
  await loginPage.fillLogin('standard_user','secret_sauce')
  await loginPage.clickLogin();
  await loginPage.assertTitleProduct()
});