import { test } from '@playwright/test';
import { LoginPage } from '../page-object/loginPage';
import { ProductsPage } from '../page-object/productsPage';
import { CartPage } from '../page-object/checkoutPage';

let loginPage: LoginPage;
let productsPage: ProductsPage;
let cartPage: CartPage;

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  loginPage = new LoginPage(page);
  productsPage = new ProductsPage(page);
  cartPage = new CartPage(page);
});

test('user checkout item', async () => {
  await loginPage.assertTitlePage();
  await loginPage.fillLogin('standard_user', 'secret_sauce');
  await loginPage.clickLogin();
  await loginPage.assertTitleProduct();
  // assertion all product is shows
  await productsPage.assertItemInventory();
  // add item to cart
  await productsPage.clickAddItemBackpack();
  // open cart
  await productsPage.openCart();
  // assert cart page
  await cartPage.assertInventoryPage();
  await cartPage.clickCheckout();
  await cartPage.assertCheckoutInformation();
  // fill information checkout
  await cartPage.fillInformation('test', 'dummy', '14444');
  await cartPage.clickContinue();
  // assertion overview page
  await cartPage.assertOverviewPage();
  await cartPage.clickFinish();
  // assertion finish page
  await cartPage.assertFinisOrderPage();
  await cartPage.clickBackHome();
  await loginPage.assertTitleProduct();
});

