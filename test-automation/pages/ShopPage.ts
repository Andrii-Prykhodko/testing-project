import { Page, expect } from '@playwright/test';

export class ShopPage {
    private page: Page;
    private menuButton = '[data-v-test-id="top-nav-menu"]';
    private shopLink = 'a:has-text("Shop")';
    private balanceLocator = '.coin-balance .balance'; // Balance locator
    private shopItemLocator = '[data-v-test-id="shop-item"]'; // Shop item locator
    private priceLocator = '.price'; // Price locator
    private buyButtonLocator = '[data-v-test-id="shop-item-buy"]'; // Buy button locator
    private modalLocator = '[data-v-test-id="shop-details"]'; // Modal window locator
    private confirmBuyButtonLocator = '[data-v-test-id="shop-details-later-button"]'; // Confirm purchase button locator

    constructor(page: Page) {
        this.page = page;
    }

    async openShop() {
        await this.page.click(this.menuButton);
        await this.page.click(this.shopLink);
        await this.page.waitForLoadState('domcontentloaded');
        
        console.log("Waiting for shop items to load...");
        await this.page.waitForSelector(this.shopItemLocator, { state: 'visible' });
        console.log("Shop items loaded.");
    }

    async getBalance(): Promise<number> {
        console.log("Fetching balance...");

        const balanceElement = this.page.locator(this.balanceLocator);
        await balanceElement.waitFor({ state: 'visible' });

        const balanceText = await balanceElement.evaluate(el => {
            if (el instanceof HTMLElement) {
                return el.textContent?.trim() || '0';
            }
            return '0';
        });

        const balance = parseInt(balanceText);
        console.log(`Balance: ${balance}`);
        return balance;
    }

    async buyFirstItemIfPossible() {
        const balanceBefore = await this.getBalance();

        if (balanceBefore > 0) {
            const firstItem = this.page.locator(this.shopItemLocator).first();
            await firstItem.waitFor({ state: 'visible' });

            const itemPriceText = await firstItem.locator(this.priceLocator).textContent();
            const itemPrice = itemPriceText ? parseInt(itemPriceText.trim()) : 0;

            console.log(`Found an item for ${itemPrice} coins.`);
            if (itemPrice > 0 && balanceBefore >= itemPrice) {
                await firstItem.locator(this.buyButtonLocator).click();

                // Wait for the purchase confirmation modal
                console.log("Waiting for confirmation modal...");
                await this.page.waitForSelector(this.modalLocator, { state: 'visible' });

                // Confirm the purchase
                console.log("Confirming purchase...");
                await this.page.locator(this.confirmBuyButtonLocator).click();

                // Wait for the balance to update
                await this.page.waitForTimeout(1000); 

                const balanceAfter = await this.getBalance();
                console.log(`Balance after purchase: ${balanceAfter}`);
                expect(balanceAfter).toBe(balanceBefore - itemPrice);
            } else {
                console.log('Not enough funds to purchase the item.');
            }
        } else {
            console.log('Balance is 0. Purchase not possible.');
        }
    }
}
