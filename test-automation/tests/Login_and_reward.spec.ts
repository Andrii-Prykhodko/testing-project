import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ShopPage } from '../pages/ShopPage';

test('User can log in and purchase an item if funds are available', async ({ page }) => {
    // Login process
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login('qatest250901@gig.com', 'TesterH73+');
    await loginPage.verifyLoginSuccess();

    // Wait for the page to fully load
    await page.waitForLoadState('networkidle');

    // Navigate to the shop and attempt to purchase an item
    const shopPage = new ShopPage(page);

    await shopPage.openShop();
    await shopPage.buyFirstItemIfPossible();
});

