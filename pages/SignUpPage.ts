import { Page, Locator, expect } from '@playwright/test';

export class SignUpPage {
    readonly page: Page;
    readonly signUpButton: Locator;
    readonly modal: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly continueButton: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly dayInput: Locator;
    readonly monthInput: Locator;
    readonly yearInput: Locator;
    readonly addressInput: Locator;
    readonly cityInput: Locator;
    readonly postcodeInput: Locator;
    readonly mobileNumberInput: Locator;
    readonly agreeCheckbox: Locator;
    readonly createAccountButton: Locator;
    readonly ageErrorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signUpButton = page.locator('[data-v-test-id="top-nav-signup"]');
        this.modal = page.locator('[data-v-test-id="modal"]');
        this.emailInput = page.locator('input[name="email"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.continueButton = page.locator('button[data-v-test-id="step1-submit"]');
        this.firstNameInput = page.locator('input[name="firstName"]');
        this.lastNameInput = page.locator('input[name="lastName"]');
        this.dayInput = page.locator('[data-v-test-id="date-day"] magic-ui-number');
        this.monthInput = page.locator('[data-v-test-id="date-month"] magic-ui-number');
        this.yearInput = page.locator('[data-v-test-id="date-year"] magic-ui-number');
        this.addressInput = page.locator('input[name="address"]');
        this.cityInput = page.locator('input[name="city"]');
        this.postcodeInput = page.locator('input[name="postcode"]');
        this.mobileNumberInput = page.locator('input[placeholder="Mobile number"]');
        this.agreeCheckbox = page.locator('input[id="agreeAllCheckbox"]');
        this.createAccountButton = page.locator('[data-v-test-id="step2-submit"]');
        this.ageErrorMessage = page.locator('[data-v-test-id="message-test"]');
    }

    async open() {
        await this.page.goto('/');
    }

    async startSignUp() {
        await this.page.waitForLoadState('networkidle');
        await this.signUpButton.waitFor({ state: 'visible' });
        await this.signUpButton.click();
        await expect(this.modal).toBeVisible();
    }

    async fillStep1(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
    
        await this.page.waitForTimeout(1000); // Allow time for animation

        await this.page.keyboard.press('Enter'); // Press Enter to proceed to the next step
        await this.firstNameInput.waitFor({ state: 'visible', timeout: 10000 }); // Wait for the next step to appear
    }

    async fillStep2(details: { firstName: string; lastName: string; dobDay: string; dobMonth: string; dobYear: string; address: string; city: string; postcode: string; mobile: string }) {
        if (!details.dobDay || !details.dobMonth || !details.dobYear) {
            throw new Error('Date of birth must be fully provided!');
        }
    
        await this.firstNameInput.fill(details.firstName);
        await this.lastNameInput.fill(details.lastName);
    
        // Fill date of birth by clicking before typing each value
        await this.dayInput.click();
        await this.dayInput.type(details.dobDay);

        await this.monthInput.click();
        await this.monthInput.type(details.dobMonth);

        await this.yearInput.click();
        await this.yearInput.type(details.dobYear);

        await this.addressInput.fill(details.address);
        await this.cityInput.fill(details.city);
        await this.postcodeInput.fill(details.postcode);

        // Click on the mobile number input before typing the value
        await this.mobileNumberInput.click();
        await this.mobileNumberInput.type(details.mobile);
    }

    async agreeToTerms() {
        await this.agreeCheckbox.check();
    }

    async verifyAgeRestrictionMessage() {
        await expect(this.ageErrorMessage).toHaveText('You must be at least 18 years old to register.');
        await expect(this.createAccountButton).toBeDisabled();
    }
    // TODO: Uncomment this section once the 'Create account' button bug is resolved
    
    // async correctDateOfBirth(dob: { day: string; month: string; year: string }) {
    //     // Click each field before entering data
    //     await this.dayInput.click();
    //     await this.dayInput.type(dob.day);

    //     await this.monthInput.click();
    //     await this.monthInput.type(dob.month);

    //     await this.yearInput.click();
    //     await this.yearInput.type(dob.year);
        
    //     await expect(this.ageErrorMessage).toBeHidden();
    //     await expect(this.createAccountButton).not.toBeDisabled();
    // }
}
