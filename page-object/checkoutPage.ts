import { Page, Locator } from 'playwright';
import { expect } from '@playwright/test';
import { BasePage } from './basePage';

export class CartPage extends BasePage {
  readonly fieldUsername: Locator;
  titelCart: Locator;
  titleQty: Locator;
  titleDesc: Locator;
  totalItem: Locator;
  nameItemInCart: Locator;
  btnContinueShopping: Locator;
  btnRemoveItem: Locator;
  btnCheckout: Locator;
  infoFirstName: Locator;
  infoLastName: Locator;
  infoPostalCode: Locator;
  continueYourInfo: Locator;
  titlePayInfo: Locator;
  titleShipInfo: Locator;
  titlePriceTotal: Locator;
  total: Locator;
  btnCancel: Locator;
  btnFinish: Locator;
  iconSuccessCheck: Locator;
  descThankYour: Locator;
  descOrderDispatch: Locator;
  btnBackHome: Locator;

  constructor(page: Page) {
    super(page);
    this.titelCart = page.locator('[data-test="title"]');
    this.titleQty = page.locator('[data-test="cart-quantity-label"]');
    this.titleDesc = page.locator('[data-test="cart-desc-label"]');
    this.totalItem = page.locator('[data-test="item-quantity"]');
    this.nameItemInCart = page.locator('[data-test="item-4-title-link"]');
    this.btnContinueShopping = page.locator('[data-test="continue-shopping"]');
    this.btnRemoveItem = page.locator('[data-test="remove-sauce-labs-backpack"]');
    this.btnCheckout = page.locator('[data-test="checkout"]');
    this.infoFirstName = page.locator('[data-test="firstName"]');
    this.infoLastName = page.locator('[data-test="lastName"]');
    this.infoPostalCode = page.locator('[data-test="postalCode"]');
    this.continueYourInfo = page.locator('[data-test="continue"]');
    //
    this.titlePayInfo = page.locator('[data-test="payment-info-label"]');
    this.titleShipInfo = page.locator('[data-test="shipping-info-label"]');
    this.titlePriceTotal = page.locator('[data-test="total-info-label"]');
    this.total = page.locator('[data-test="total-label"]');
    this.btnCancel = page.locator('[data-test="cancel"]');
    this.btnFinish = page.locator('[data-test="finish"]');
    this.iconSuccessCheck = page.locator('[data-test="pony-express"]');
    this.descThankYour = page.locator('[data-test="complete-header"]');
    this.descOrderDispatch = page.locator('[data-test="complete-text"]');
    this.btnBackHome = page.locator('[data-test="back-to-products"]');
  }

  async assertInventoryPage(): Promise<void> {
    await expect(this.titelCart).toHaveText('Your Cart');
    await expect(this.titleQty).toHaveText('QTY');
    await expect(this.titleDesc).toHaveText('Description');
    await expect(this.totalItem).toHaveText('1');
    await expect(this.nameItemInCart).toHaveText('Sauce Labs Backpack');
    await expect(this.btnContinueShopping).toBeVisible();
    await expect(this.btnRemoveItem).toBeVisible();
  }

  async clickCheckout(): Promise<void> {
    await this.btnCheckout.click();
  }

  async assertCheckoutInformation(): Promise<void> {
    await expect(this.titelCart).toHaveText('Checkout: Your Information');
  }

  async fillInformation(firstName: string, lastName: string, postalCode: string): Promise<void> {
    await this.infoFirstName.fill(firstName);
    await this.infoLastName.fill(lastName);
    await this.infoPostalCode.fill(postalCode);
  }

  async clickContinue(): Promise<void> {
    await this.continueYourInfo.click();
  }

  async assertOverviewPage(): Promise<void> {
    await expect(this.titelCart).toHaveText('Checkout: Overview');
    await expect(this.titlePayInfo).toHaveText('Payment Information:');
    await expect(this.titleShipInfo).toHaveText('Shipping Information:');
    await expect(this.titlePriceTotal).toHaveText('Price Total');
    await expect(this.total).toContainText('Total: $32.39');
    await expect(this.btnCancel).toBeVisible();
  }

  async clickFinish(): Promise<void> {
    await this.btnFinish.click();
  }

  async assertFinisOrderPage(): Promise<void> {
    await expect(this.iconSuccessCheck).toBeVisible();
    await expect(this.descThankYour).toContainText('Thank you for your order!');
    await expect(this.descOrderDispatch).toContainText(
      'Your order has been dispatched, and will arrive just as fast as the pony can get there!'
    );
  }

  async clickBackHome(): Promise<void> {
    await this.btnBackHome.click();
  }
}
