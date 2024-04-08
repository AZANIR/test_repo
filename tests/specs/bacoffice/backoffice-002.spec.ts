// import { test, expect, Page } from '@playwright/test';
// import { qase } from 'playwright-qase-reporter/dist/playwright';
// import { LogInPage } from '../../pageFactory/logIn-page.po';
// import { DashboardPage } from '../../pageFactory/dasboard-page.po';
// import { SideMenuButton, SideMenuIndividualsLink } from '../../enums/backoffice.enum';

// let logInPage: LogInPage;
// let dashboardPage: DashboardPage;
// const configData = {
//     ID: '483fb098-16da-450a-8d39-e78b6cc9ed16',
//     ENTITY_ID: 'clpvdz7hy005n23isepjs8gp3',
//     BALLERINE_ENTITY_ID: 'ckkt3t2bw000aqxtt0hj4pw4c',
//     FIRST_NAME: 'Dorothea',
//     LAST_NAME: 'Maggio',
//     EMAIL: 'Nakia71@yahoo.com',
//     PHONE: '991-382-8483 x75169',
//     PARTIAL_NAME: 'Trev'
// };
// let page: Page;

// test.beforeAll(async ({ browser }) => {
//     page = await browser.newPage();
//     logInPage = new LogInPage(page);
//     dashboardPage = new DashboardPage(page);

//     await test.step('Preconditions', async () => {
//         await logInPage.login();
//     });
//     await test.step('Switch to the Individuals, Risk Score Improvement', async () => {
//         await dashboardPage.clickSideMenuButton(SideMenuButton.INDIVIDUALS);
//         await dashboardPage.clickSideMenuLink(SideMenuIndividualsLink.ONBOARDING);
//         expect(await dashboardPage.isSideMenuLinkActive(SideMenuIndividualsLink.ONBOARDING)).toBe(true);
//     });
// });

// test(qase([4], 'Exact Match Search @search'), async () => {
//     await test.step('Enter an exact id into the search field and initiate the search', async () => {
//         expect(await dashboardPage.isSearchInputVisible()).toBe(true);
//         await dashboardPage.setSearchInputValue('');
//         await dashboardPage.setSearchInputValue(configData.ID);
//         const response = await dashboardPage.catchIncludesResponse(configData.ID, 200, 20000);
//         expect(response.status()).toBe(200);
//         expect(
//             (await response.json()).data[0].entity.id,
//             `Expected: ballerineEntityId - ${configData.BALLERINE_ENTITY_ID}`
//         ).toBe(configData.BALLERINE_ENTITY_ID);
//     });
//     await test.step('Enter an exact lastName into the search field and initiate the search.', async () => {
//         expect(await dashboardPage.isSearchInputVisible()).toBe(true);
//         await dashboardPage.setSearchInputValue('');
//         await dashboardPage.setSearchInputValue(configData.BALLERINE_ENTITY_ID);
//         const response = await dashboardPage.catchIncludesResponse(configData.BALLERINE_ENTITY_ID, 200, 20000);
//         expect(response.status()).toBe(200);
//         const responseData = await response.json();
//         expect(responseData.data[0].entity.id, `Expected: id - ${configData.BALLERINE_ENTITY_ID}`).toBe(
//             configData.BALLERINE_ENTITY_ID
//         );
//     });
//     await test.step('Enter an exact ballerineEntityId into the search field and initiate the search.', async () => {
//         expect(await dashboardPage.isSearchInputVisible()).toBe(true);
//         await dashboardPage.setSearchInputValue('');
//         await dashboardPage.setSearchInputValue(configData.LAST_NAME);
//         const response = await dashboardPage.catchIncludesResponse(configData.LAST_NAME, 200, 20000);
//         expect(response.status()).toBe(200);
//         await dashboardPage.clickSearchedElement();
//         expect(await dashboardPage.getLastName(), `Expected: lastName - ${configData.LAST_NAME}`).toBe(
//             configData.LAST_NAME
//         );
//     });
// });

// test(qase([5], 'Combined Fields Search @search'), async () => {
//     await test.step('Enter a combination of firstName and email into the search field and initiate the search.', async () => {
//         expect(await dashboardPage.isSearchInputVisible()).toBe(true);
//         await dashboardPage.setSearchInputValue('');
//         await dashboardPage.setSearchInputValue(`${configData.FIRST_NAME} ${configData.EMAIL}`);
//         const response = await dashboardPage.catchIncludesResponse(configData.FIRST_NAME, 200, 20000);
//         expect(response.status()).toBe(200);
//         await dashboardPage.clickSearchedElement();
//         expect(await dashboardPage.getFirstName(), `Expected: lastName - ${configData.FIRST_NAME}`).toBe(
//             configData.FIRST_NAME
//         );
//         expect(await dashboardPage.getEmail(), `Expected: email - ${configData.EMAIL}`).toBe(configData.EMAIL);
//     });

//     await test.step('Enter a combination of lastName and phone into the search field and initiate the search.', async () => {
//         expect(await dashboardPage.isSearchInputVisible()).toBe(true);
//         await dashboardPage.setSearchInputValue('');
//         await dashboardPage.setSearchInputValue(`${configData.LAST_NAME} ${configData.PHONE}`);
//         const response = await dashboardPage.catchIncludesResponse(configData.LAST_NAME, 200, 20000);
//         expect(response.status()).toBe(200);
//         await dashboardPage.clickSearchedElement();
//         expect(await dashboardPage.getLastName(), `Expected: lastName - ${configData.LAST_NAME}`).toBe(
//             configData.LAST_NAME
//         );
//         expect(await dashboardPage.getPhone(), `Expected: phone - ${configData.PHONE}`).toBe(configData.PHONE);
//     });

//     await test.step('Enter a combination of firstName and middleName into the search field and initiate the search.', async () => {
//         expect(await dashboardPage.isSearchInputVisible()).toBe(true);
//         await dashboardPage.setSearchInputValue('');
//         await dashboardPage.setSearchInputValue(`${configData.FIRST_NAME} ${configData.LAST_NAME}`);
//         const response = await dashboardPage.catchIncludesResponse(configData.FIRST_NAME, 200, 20000);
//         expect(response.status()).toBe(200);
//         await dashboardPage.clickSearchedElement();
//         expect(await dashboardPage.getFirstName(), `Expected: lastName - ${configData.FIRST_NAME}`).toBe(
//             configData.FIRST_NAME
//         );
//         expect(await dashboardPage.getLastName(), `Expected: lastName - ${configData.LAST_NAME}`).toBe(
//             configData.LAST_NAME
//         );
//     });
// });

// test(qase([6], 'Special Characters and Whitespace Handling @search'), async () => {
//     await test.step('Enter an email address with special characters (like a period or underscore) into the search field and initiate the search.', async () => {
//         const email_underscore = 'Tobin_Schultz@gmail.com';
//         const email_period = 'Paxton.Halvorson70@yahoo.com';
//         expect(await dashboardPage.isSearchInputVisible()).toBe(true);
//         await dashboardPage.setSearchInputValue('');
//         await dashboardPage.setSearchInputValue(email_underscore);
//         const response = await dashboardPage.catchIncludesResponse(email_underscore, 200, 20000);
//         expect(response.status()).toBe(200);
//         await dashboardPage.clickSearchedElement();
//         expect(await dashboardPage.getEmail(), `Expected: email - ${email_underscore}`).toBe(email_underscore);

//         await dashboardPage.setSearchInputValue('');
//         await dashboardPage.setSearchInputValue(email_period);
//         const response2 = await dashboardPage.catchIncludesResponse(email_period, 200, 20000);
//         expect(response2.status()).toBe(200);
//         await dashboardPage.clickSearchedElement();
//         expect(await dashboardPage.getEmail(), `Expected: email - ${email_period}`).toBe(email_period);
//     });

//     await test.step('Enter a phone number with whitespace and special characters (like parentheses and hyphens) into the search field and initiate the search.', async () => {
//         const phone = '(398) 676-7505 x345';
//         expect(await dashboardPage.isSearchInputVisible()).toBe(true);
//         await dashboardPage.setSearchInputValue('');
//         await dashboardPage.setSearchInputValue(phone);
//         await dashboardPage.clickSearchedElement();
//         expect(await dashboardPage.getPhone(), `Expected: phone with hyphens - ${phone}`).toBe(phone);
//     });

//     // await test.step("Enter a lastName with an apostrophe (e.g., O'Connor) into the search field and initiate the search.", async () => {
//     //     const firstName = 'San-Martin';
//     //     const lastName = "O'Connor";
//     //     expect(await dashboardPage.isSearchInputVisible()).toBe(true);
//     //     await dashboardPage.setSearchInputValue('');
//     //     await dashboardPage.setSearchInputValue(lastName);
//     //     const response = await dashboardPage.catchIncludesResponse(lastName, 200, 20000);
//     //     expect(response.status()).toBe(200);
//     //     await dashboardPage.clickSearchedElement();
//     //     expect(await dashboardPage.getLastName(), `Expected: lastName - ${lastName}`).toBe(lastName);

//     //     await dashboardPage.setSearchInputValue('');
//     //     await dashboardPage.setSearchInputValue(firstName);
//     //     const response2 = await dashboardPage.catchIncludesResponse(firstName, 200, 20000);
//     //     expect(response2.status()).toBe(200);
//     //     await dashboardPage.clickSearchedElement();
//     //     expect(await dashboardPage.getFirstName(), `Expected: firstName - ${firstName}`).toBe(firstName);
//     // });
// });

// test(qase([7], 'Search Functionality - Partial Data Matching @search'), async () => {
//     await test.step('Enter a partial first name into the search field and initiate the search.', async () => {
//         const partialName = configData.PARTIAL_NAME;
//         expect(await dashboardPage.isSearchInputVisible()).toBe(true);
//         await dashboardPage.setSearchInputValue('');
//         await dashboardPage.setSearchInputValue(partialName);
//         const response = await dashboardPage.catchIncludesResponse(partialName, 200, 20000);
//         expect(response.status()).toBe(200);
//         await dashboardPage.clickSearchedElement();
//         expect(
//             await dashboardPage.getFirstName(),
//             `Expected: firstName contains - ${configData.PARTIAL_NAME}`
//         ).toContain(configData.PARTIAL_NAME);
//     });

//     await test.step('Enter a partial combination of first name and middle name "German Ja" into the search field and initiate the search.', async () => {
//         const partialName = 'German Ja';
//         expect(await dashboardPage.isSearchInputVisible()).toBe(true);
//         await dashboardPage.setSearchInputValue('');
//         await dashboardPage.setSearchInputValue(partialName);
//         const encodedPartialName = encodeURIComponent(partialName);
//         const response = await dashboardPage.catchIncludesResponse(encodedPartialName, 200, 20000);
//         expect(response.status()).toBe(200);
//         await dashboardPage.clickSearchedElement();
//         const name = partialName.split(' ')[0];
//         expect(await dashboardPage.getFirstName(), `Expected: firstName - ${name}`).toBe(name);
//         const lastName = partialName.split(' ')[1];
//         expect(await dashboardPage.getLastName(), `Expected: lastName contains - ${lastName}`).toContain(lastName);
//     });

//     await test.step('Enter a partial email address  which is also a first name, into the search field and initiate the search.', async () => {
//         const partialEmail = 'Paxton.Halvorson70@yahoo.com';
//         expect(await dashboardPage.isSearchInputVisible()).toBe(true);
//         await dashboardPage.setSearchInputValue('');
//         await dashboardPage.setSearchInputValue(partialEmail.slice(0, 9));
//         const response = await dashboardPage.catchIncludesResponse(partialEmail.slice(0, 9), 200, 20000);
//         expect(response.status()).toBe(200);
//         await dashboardPage.clickSearchedElement();
//         expect(await dashboardPage.getEmail(), `Expected: email contains - ${partialEmail}`).toContain(partialEmail);
//     });

//     await test.step('Enter a partial phone number "382-8483" into the search field and initiate the search.', async () => {
//         const phone = '(398) 676-7505 x345';
//         expect(await dashboardPage.isSearchInputVisible()).toBe(true);
//         await dashboardPage.setSearchInputValue('');
//         await dashboardPage.setSearchInputValue(phone.slice(6, 14));
//         await dashboardPage.clickSearchedElement();
//         expect(await dashboardPage.getPhone(), `Expected: phone contains - ${phone}`).toContain(phone);
//     });
// });

// test(qase([8], 'Fuzzy Search and Auto-Correction @search'), async () => {
//     await test.step('Enter a partial first name into the search field and initiate the search.', async () => {
//         const misspelledName = 'Doroth';
//         expect(await dashboardPage.isSearchInputVisible()).toBe(true);
//         await dashboardPage.setSearchInputValue('');
//         await dashboardPage.setSearchInputValue(misspelledName);
//         const response = await dashboardPage.catchIncludesResponse(misspelledName, 200, 20000);
//         expect(response.status()).toBe(200);
//         await dashboardPage.clickSearchedElement();
//         expect(await dashboardPage.getFirstName(), `Expected: firstName - ${configData.FIRST_NAME}`).toBe(
//             configData.FIRST_NAME
//         );
//     });
// });
