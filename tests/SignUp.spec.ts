import { test, expect } from '@playwright/test';
import { SignUpPage } from '../pages/SignUpPage';

test('User cannot register under 18 and must correct DOB', async ({ page }) => {
    const signUpPage = new SignUpPage(page);

    await signUpPage.open();
    await signUpPage.startSignUp();
    
    await signUpPage.fillStep1('123@123.com', 'Qweasdzxc1!');

    await signUpPage.fillStep2({
        firstName: "TestName",
        lastName: "TestLastName",
        dobDay: "01",
        dobMonth: "01",
        dobYear: "2020", // Underage user
        address: "TestAddress",
        city: "TestCity",
        postcode: "10001",
        mobile: "1234567890"
    });

    await signUpPage.agreeToTerms();
    await signUpPage.verifyAgeRestrictionMessage(); // Verify that registration is blocked due to age restriction

    // Correct the date of birth to an acceptable value
    const dob = '01.01.2007';
    const [day, month, year] = dob.split('.');

    // TODO: Uncomment this section once the 'Create account' button bug is resolved
    
    // await signUpPage.correctDateOfBirth({ day, month, year });
});
