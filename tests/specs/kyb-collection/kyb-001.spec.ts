import { test, expect, Page } from '@playwright/test';
import { qase } from 'playwright-qase-reporter/dist/playwright';
//import { preSetupApi } from '../../pageFactory/preSetupApi.po';
import { CollectionPage } from '../../pageFactory/collection.po';
import { faker } from '@faker-js/faker';
const path = require('path');
require('dotenv').config();

let page: Page;
let collectionPage: CollectionPage;
// let workflowRuntimeId: string;
// let endUserId: string;
// let collectionFlowUrl: string;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    // const preSetupApiPage = new preSetupApi();
    // const responseRun = await preSetupApiPage.externalWorkflowsRun();
    // workflowRuntimeId = responseRun.data.data.workflowRuntimeId;
    // endUserId = responseRun.data.data.entities[0].id;
    // const responseCollRun = await preSetupApiPage.externalWorkflowsCreateCollectionFlowRun(
    //     responseRun.data.data.workflowRuntimeId,
    //     responseRun.data.data.entities[0].id
    // );
    // await test.step('Open the page', async () => {
    //     collectionFlowUrl = responseCollRun.data.data.collectionFlowUrl;
    //     collectionPage = new CollectionPage(page);
    //     await collectionPage.navigate(responseCollRun.data.data.collectionFlowUrl);
    // });
    // const dataRequired = `*DATAREQUIRED:*

    //         Workflow Runtime ID: ${workflowRuntimeId},
    //         End User ID: ${endUserId},
    //         Collection Flow URL: ${collectionFlowUrl},
    //         `;
    // console.log(dataRequired);
    //https://collection-dev.eu.ballerine.io/collection-flow?token=e8165dc5-b92f-4da1-8ad9-b4c2d6c813dd
    collectionPage = new CollectionPage(page);
    await collectionPage.navigate(
        'https://collection-dev.eu.ballerine.io/collection-flow?token=e8165dc5-b92f-4da1-8ad9-b4c2d6c813dd'
    );
});

test(qase([9], 'Fill data for create collection @collection'), async () => {
    await test.step('Fill Personal Information', async () => {
        expect(await collectionPage.isFieldSetRootVisible()).toBe(true);
        await collectionPage.fillJobTittleInput(faker.person.jobTitle());
        await collectionPage.fillDateOfBirthInput(
            faker.date.birthdate().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })
        );
        await collectionPage.fillPhoneInput(faker.phone.number());
        //await collectionPage.clickSignCheckbox();
        await collectionPage.clickContinueButton();
    });

    await test.step('Fill Business Information', async () => {
        expect(await collectionPage.isFieldSetRootVisible()).toBe(true);
        await collectionPage.fillRegistrationNumberInput(faker.finance.accountNumber({ length: 13 }));
        await collectionPage.clickCountrySelectButton();
        await collectionPage.fillCountrySelectInput(faker.location.country());
        await collectionPage.fillTaxIdentificationNumberInput(faker.finance.accountNumber({ length: 13 }));
        await collectionPage.fillAmountOfEmployeesInput(faker.number.int({ min: 5, max: 50 }).toString());
        await collectionPage.setCorporateTypeInput();
        await collectionPage.fillRegisteredCapitalInput(faker.number.int({ min: 10000, max: 5000000 }).toString());
        await collectionPage.clickContinueButton();
    });

    await test.step('Fill Business Address', async () => {
        expect(await collectionPage.isFieldSetRootVisible()).toBe(true);
        await collectionPage.fillBusinessStreetInput(faker.location.streetAddress(false));
        await collectionPage.fillBusinessStreetNumberInput(faker.number.int({ min: 5, max: 50 }).toString());
        await collectionPage.fillBusinessCityInput(faker.location.city());
        await collectionPage.fillBusinessCountrySelectInput(faker.location.country());
        await collectionPage.clickContinueButton();
    });

    await test.step('Fill Directors and UBOs', async () => {
        expect(await collectionPage.isFieldSetRootVisible()).toBe(true);
        // UBOs
        const country = faker.location.country();
        await collectionPage.clickUboCheckbox();
        await collectionPage.fillUboNationalitySelectInput(country.substring(0, 4));
        await collectionPage.fillUboIdentityNumberInput(faker.finance.accountNumber({ length: 13 }));
        await collectionPage.fillUboFullAddressInput(faker.location.streetAddress(true));
        await collectionPage.fillUboOwnershipPercentageInput(faker.number.int({ min: 25, max: 100 }).toString());
        // Directors
        await collectionPage.clickDirectorsCheckbox();
        await collectionPage.fillDirectorsNationalitySelectInput(country.substring(0, 4));
        await collectionPage.fillDirectorsIdentityNumberInput(faker.finance.accountNumber({ length: 13 }));
        await collectionPage.fillDirectorsFullAddressInput(faker.location.streetAddress(true));
        await collectionPage.uploadDirectorsIDPhotoFileInput(path.join(__dirname, 'upload/ID.jpg'));
        await collectionPage.uploadDirectorsSelfieIDPhotoFileInput(path.join(__dirname, 'upload/Selfie_ID.jpg'));
        await collectionPage.clickContinueButton();
    });

    await test.step('Fill Contacts', async () => {
        expect(await collectionPage.isFieldSetRootVisible()).toBe(true);
        await collectionPage.fillContatcsFirstNameInput(faker.person.firstName());
        await collectionPage.fillContatcsLastNameInput(faker.person.lastName());
        await collectionPage.fillContatcsEmailInput(faker.internet.email());
        await collectionPage.fillContatcsPhoneInput(faker.phone.number());
        await collectionPage.clickContinueButton();
    });

    await test.step('Fill Banking Details', async () => {
        expect(await collectionPage.isFieldSetRootVisible()).toBe(true);
        await collectionPage.fillCardHolderNameInput(faker.person.fullName());
        await collectionPage.fillResidentAddressInput(faker.location.streetAddress(true));
        await collectionPage.fillBankingAccountNumberInput(faker.finance.accountNumber({ length: 13 }));
        await collectionPage.fillBankingIbanInput(faker.finance.iban());
        await collectionPage.fillBankingSwiftInput(faker.finance.bic({ includeBranchCode: true }));
        await collectionPage.fillBankingRouteNumberInput(faker.finance.routingNumber());
        await collectionPage.fillBankingBankNameInput(faker.company.name());
        await collectionPage.fillBankingBankCodeInput(faker.finance.pin(4));
        await collectionPage.fillBankingBankAddressInput(faker.location.streetAddress(true));
        await collectionPage.fillBankingSubBranchNumberInput(faker.finance.pin(4));
        await collectionPage.fillBankingAccountCurrencySelectInput(faker.finance.currencyCode());
        await await collectionPage.clickContinueButton();
    });

    await test.step('Fill Store Info', async () => {
        expect(await collectionPage.isFieldSetRootVisible()).toBe(true);
        await collectionPage.fillWebsiteUrlInput(faker.internet.url());
        await collectionPage.fillDbaDescriptorInput(faker.database.column());
        await collectionPage.fillIndustrySelectInput();
        await collectionPage.fillProductsDescriptionInput(faker.commerce.productDescription());
        await collectionPage.fillEstablishedDateInput(
            faker.date
                .past({ years: 10 })
                .toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })
        );
        await await collectionPage.clickContinueButton();
    });

    await test.step('Fill Website Basic Requirement', async () => {
        expect(await collectionPage.isFieldSetRootVisible()).toBe(true);
        await collectionPage.fillCompanyMainWebSiteInput(faker.internet.url());
        await collectionPage.fillCompanyContactsDetailAddressInput(faker.location.streetAddress(true));
        await collectionPage.fillCompanyReturnExchangePolicyInput(faker.internet.url());
        await collectionPage.fillCompanyShippingPolicyInput(faker.internet.url());
        await collectionPage.fillCompanyAboutUsInput(faker.internet.url());
        await collectionPage.fillCompanyTermsOfUseInput(faker.internet.url());
        await collectionPage.fillCompanyPrivacyPolicyInput(faker.internet.url());
        await collectionPage.fillCompanyProductQuantityInput(faker.number.int({ min: 5, max: 100 }).toString());
        await collectionPage.fillCompanyProductDescriptionTextarea(faker.lorem.lines({ min: 2, max: 3 }));
        await collectionPage.fillCompanyProductPriceInput(faker.finance.amount({ min: 5, max: 1000 }));
        await collectionPage.fillCompanyWebsiteLanguageInput(faker.location.country().substring(0, 3));
        await collectionPage.clickContinueButton();
    });

    await test.step('Fill Processing Details', async () => {
        expect(await collectionPage.isFieldSetRootVisible()).toBe(true);
        await collectionPage.fillMonthlySalesVolumeInput(faker.finance.amount({ min: 1000, max: 100000, dec: 0 }));
        await collectionPage.fillMonthlyNumberOfTransactionsInput(faker.number.int({ min: 5, max: 100 }).toString());
        await collectionPage.fillEstMonthlySalesVolumeInput(faker.finance.amount({ min: 1000, max: 100000, dec: 0 }));
        await collectionPage.fillEstMonthlyNumberOfTransactionsInput(faker.number.int({ min: 5, max: 100 }).toString());
        await collectionPage.fillAverageTicketAmountInput(faker.finance.amount({ min: 5, max: 1000 }));
        await collectionPage.fillMinimumTicketAmountInput(faker.finance.amount({ min: 5, max: 100 }));
        await collectionPage.fillMaximumTicketAmountInput(faker.finance.amount({ min: 100, max: 500 }));
        await collectionPage.fillAsia70Europe30Input(faker.finance.amount({ min: 5, max: 100 }));
        await collectionPage.selectCustomerCategorySelectInput();
        await collectionPage.clickMembershipSelectCheckbox();
        await collectionPage.clickDirectPurchaseSelectCheckbox();
        await collectionPage.clickContinueButton();
    });

    await test.step('Fill Company Documents', async () => {
        expect(await collectionPage.isFieldSetRootVisible()).toBe(true);
        // Certificate of Incorporation
        // Business Registration Certificate
        // Corporate Tax Certificate (optional)
        // Certificate of Good Standing (optional)
        // Certificate of Directors and Shareholders (optional)
        // Picture of the company seal
        // Proof of bank account (optional)
        // Other supplementary information (Supplement according to the onboarding document checklist) (optional)
        // Domain purchase record / certificate
        // Front door photo showing the company name
        // Photo showing interior of the office - #1
        // Photo showing interior of the office - #2
        // Transaction data for the last 3-6 months
        // I confirm
        await collectionPage.clickContinueButton();
    });
});
