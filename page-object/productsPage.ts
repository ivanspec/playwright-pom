import { Page, Locator } from 'playwright';
import { expect } from '@playwright/test';
import { BasePage } from './basePage';

export class ProductsPage extends BasePage {
  readonly fieldUsername: Locator;
  readonly allItem: Locator;
  btnAddItemBackpack: Locator;
  iconCart: Locator;

  constructor(page: Page) {
    super(page);
    this.allItem = page.locator('[class="inventory_item"]');
    this.btnAddItemBackpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.iconCart = page.locator('[data-test="shopping-cart-link"]');
  }

  async assertItemInventory(): Promise<void> {
    const totalItem = await this.allItem.count();
    expect(totalItem).toBe(6);
  }

  async clickAddItemBackpack(): Promise<void> {
    await this.btnAddItemBackpack.click();
  }

  async openCart(): Promise<void> {
    await this.iconCart.click();
  }
}
