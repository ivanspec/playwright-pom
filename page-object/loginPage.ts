import { Page, Locator } from 'playwright';
import { expect } from '@playwright/test';
import { BasePage } from './basePage';

export class LoginPage extends BasePage {
    readonly fieldUsername: Locator;
    readonly fieldPassword: Locator;
    readonly btnLogin: Locator;
    readonly errorLogin: Locator;
    readonly titlePageLogin: Locator;
    readonly titleProduct: Locator;
    
    
    constructor(page: Page){
        super(page);
        this.fieldUsername = page.locator('[data-test="username"]');
        this.fieldPassword = page.locator('[data-test="password"]');
        this.btnLogin = page.locator('[data-test="login-button"]');
        this.errorLogin = page.locator('[data-test="error"]');
        this.titlePageLogin = page.getByText('Swag Labs');
        this.titleProduct = page.locator('[data-test="title"]')
    }

    async assertTitlePage(): Promise<void> {
        await expect(this.titlePageLogin).toBeVisible();
    }

    async fillLogin(username: string, password: string): Promise<void> {
        await this.fieldUsername.fill(username);
        await this.fieldPassword.fill(password);
    }

    async clickLogin(): Promise<void> {
        await this.btnLogin.click();
    }

    async getErrorLogin(errorMsg: string): Promise<void> {    
        await expect(this.errorLogin).toHaveText(errorMsg);
    }

    async assertTitleProduct(): Promise<void> {
        await expect(this.titleProduct).toHaveText('Products');
    }
}