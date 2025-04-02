import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    private page: Page;
    private loginButton: Locator;
    private emailInput: Locator;
    private passwordInput: Locator;
    private submitButton: Locator;

    constructor(page: Page) {
        this.page = page;

        // Element locators
        this.loginButton = page.locator('[data-v-test-id="top-nav-login"]');
        this.emailInput = page.locator('input[name="email"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.submitButton = page.locator('[data-v-test-id="login-form-submit"]');
    }

    async open() {
        await this.page.goto('/'); // Open the homepage
    }

    async login(email: string, password: string) {
        await this.page.waitForLoadState('networkidle'); // Wait for full page load
        await this.loginButton.click(); // Click "Login"
        await this.emailInput.fill(email); // Enter email
        await this.passwordInput.fill(password); // Enter password
        await this.submitButton.click(); // Click "Login"
    }

    async verifyLoginSuccess() {
        await expect(this.page).toHaveURL('https://qatesting-wand-stg.cpe.gigmagic.io/en/');
    }
}
