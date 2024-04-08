import { test, expect, Page } from '@playwright/test';
import { qase } from 'playwright-qase-reporter/dist/playwright';
import { preSetupApi } from '../../pageFactory/preSetupApi.po';
import { CollectionPage } from '../../pageFactory/collection.po';
// import { MailSacApi } from '../../pageFactory/mailSacApi.po';
import { faker } from '@faker-js/faker';
import { LogInPage } from '../../pageFactory/logIn-page.po';
const path = require('path');
import fs from 'fs';
import { DashboardPage } from '../../pageFactory/dasboard-page.po';
require('dotenv').config();

let page: Page;
let newPage: Page;
let collectionPage: CollectionPage;
let dashboardPage: DashboardPage;
let logInPage: LogInPage;
// const mailSacApiPage = new MailSacApi();
let workflowRuntimeId: string;
let endUserId: string;
let collectionFlowUrl: string;
let dataSave: object;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    collectionPage = new CollectionPage(page);
    dashboardPage = new DashboardPage(page);
    logInPage = new LogInPage(page);
    const preSetupApiPage = new preSetupApi();
    const responseRun = await preSetupApiPage.externalWorkflowsRun();
    workflowRuntimeId = responseRun.data.data.workflowRuntimeId;
    endUserId = responseRun.data.data.entities[0].id;
    dataSave = {
        ...dataSave,
        endUserId: responseRun.data.data.entities[0].id,
        workflowRuntimeId: responseRun.data.data.workflowRuntimeId
    };
    const responseCollRun = await preSetupApiPage.externalWorkflowsCreateCollectionFlowRun(
        responseRun.data.data.workflowRuntimeId,
        responseRun.data.data.entities[0].id
    );
    await test.step('Open the page', async () => {
        collectionFlowUrl = responseCollRun.data.data.collectionFlowUrl;
        dataSave = {
            ...dataSave,
            collectionFlowUrl: responseCollRun.data.data.collectionFlowUrl
        };
        await collectionPage.navigate(responseCollRun.data.data.collectionFlowUrl);
    });
    const dataRequired = `*DATAREQUIRED:*
                Workflow Runtime ID: ${workflowRuntimeId},
                End User ID: ${endUserId},
                Collection Flow URL: ${collectionFlowUrl},
                `;
    console.log(dataRequired);
    // const emailsList = await mailSacApiPage.getEmailsList();
    // await mailSacApiPage.deleteOneEmail(emailsList.pop());
});

test(qase([9], 'Fill data for create collection @collection'), async () => {
    await test.step('Fill Personal Information', async () => {
        expect(await collectionPage.isFieldSetRootVisible()).toBe(true);
        const firstName = await collectionPage.getFirstNameInputValue();
        const lastName = await collectionPage.getLastNameInputValue();
        const jobTitle = faker.person.jobTitle();
        const dateOfBirth = faker.date
            .birthdate()
            .toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
        const phoneNumber = faker.phone.number();
        await collectionPage.fillJobTittleInput(jobTitle);
        await collectionPage.fillDateOfBirthInput(dateOfBirth);
        await collectionPage.fillPhoneInput(phoneNumber);
        dataSave = {
            ...dataSave,
            personalInformation: {
                firstName: firstName,
                lastName: lastName,
                jobTitle: jobTitle,
                dateOfBirth: dateOfBirth,
                phoneNumber: phoneNumber
            }
        };
        await collectionPage.clickContinueButton();
    });
    await test.step('Fill Business Information', async () => {
        expect(await collectionPage.isFieldSetRootVisible()).toBe(true);
        const companyName = await collectionPage.getCompanyNameInputValue();
        const registrationNumber = faker.finance.accountNumber({ length: 13 });
        const country = faker.location.country();
        const taxIdentificationNumber = faker.finance.accountNumber({ length: 13 });
        const amountOfEmployees = faker.number.int({ min: 5, max: 50 }).toString();
        const registeredCapital = faker.number.int({ min: 10000, max: 5000000 }).toString();
        await collectionPage.fillRegistrationNumberInput(registrationNumber);
        await collectionPage.clickCountrySelectButton();
        await collectionPage.fillCountrySelectInput(country);
        await collectionPage.fillTaxIdentificationNumberInput(taxIdentificationNumber);
        await collectionPage.fillAmountOfEmployeesInput(amountOfEmployees);
        await collectionPage.setCorporateTypeInput();
        const corporateType = await collectionPage.getCorporateTypeInputValue();
        await collectionPage.fillRegisteredCapitalInput(registeredCapital);
        dataSave = {
            ...dataSave,
            businessInformation: {
                companyName: companyName,
                registrationNumber: registrationNumber,
                country: country,
                taxIdentificationNumber: taxIdentificationNumber,
                amountOfEmployees: amountOfEmployees,
                corporateType: corporateType,
                registeredCapital: registeredCapital
            }
        };
        await collectionPage.clickContinueButton();
    });
    await test.step('Fill Business Address', async () => {
        expect(await collectionPage.isFieldSetRootVisible()).toBe(true);
        const businessStreet = faker.location.streetAddress(false);
        const businessStreetNumber = faker.number.int({ min: 5, max: 50 }).toString();
        const businessCity = faker.location.city();
        const businessCountry = faker.location.country();
        await collectionPage.fillBusinessStreetInput(businessStreet);
        await collectionPage.fillBusinessStreetNumberInput(businessStreetNumber);
        await collectionPage.fillBusinessCityInput(businessCity);
        await collectionPage.fillBusinessCountrySelectInput(businessCountry);
        dataSave = {
            ...dataSave,
            businessAddress: {
                businessStreet: businessStreet,
                businessStreetNumber: businessStreetNumber,
                businessCity: businessCity,
                businessCountry: businessCountry
            }
        };
        await collectionPage.clickContinueButton();
    });
    await test.step('Fill Directors and UBOs', async () => {
        expect(await collectionPage.isFieldSetRootVisible()).toBe(true);
        // UBO
        const uboCountry = faker.location.country();
        const uboIdentityNumberInput = faker.finance.accountNumber({ length: 13 });
        const uboFullAddress = faker.location.streetAddress(true);
        const uboOwnershipPercentage = faker.number.int({ min: 25, max: 100 }).toString();
        // Directors
        const directorsCountry = uboCountry;
        const directorsIdentityNumberInput = faker.finance.accountNumber({ length: 13 });
        const directorsFullAddress = faker.location.streetAddress(true);
        // UBO
        await collectionPage.clickUboCheckbox();
        await collectionPage.fillUboNationalitySelectInput(uboCountry.substring(0, 4));
        await collectionPage.fillUboIdentityNumberInput(uboIdentityNumberInput);
        await collectionPage.fillUboFullAddressInput(uboFullAddress);
        await collectionPage.fillUboOwnershipPercentageInput(uboOwnershipPercentage);
        // Directors
        await collectionPage.clickDirectorsCheckbox();
        await collectionPage.fillDirectorsNationalitySelectInput(directorsCountry.substring(0, 4));
        await collectionPage.fillDirectorsIdentityNumberInput(directorsIdentityNumberInput);
        await collectionPage.fillDirectorsFullAddressInput(directorsFullAddress);
        await collectionPage.uploadDirectorsIDPhotoFileInput(path.join(__dirname, 'upload/ID.jpg'));
        await collectionPage.uploadDirectorsSelfieIDPhotoFileInput(path.join(__dirname, 'upload/Selfie_ID.jpg'));
        dataSave = {
            ...dataSave,
            directorsAndUBOs: {
                ubo: [
                    {
                        uboCountry: uboCountry,
                        uboIdentityNumberInput: uboIdentityNumberInput,
                        uboFullAddress: uboFullAddress,
                        uboOwnershipPercentage: uboOwnershipPercentage
                    }
                ],
                directors: [
                    {
                        directorsCountry: directorsCountry,
                        directorsIdentityNumberInput: directorsIdentityNumberInput,
                        directorsFullAddress: directorsFullAddress,
                        directorsIDPhoto: 'upload/ID.jpg',
                        directorsSelfieIDPhoto: 'upload/Selfie_ID.jpg'
                    }
                ]
            }
        };
        await collectionPage.clickContinueButton();
    });
    await test.step('Fill Contacts', async () => {
        expect(await collectionPage.isFieldSetRootVisible()).toBe(true);
        const contactsFirstName = faker.person.firstName();
        const contactsLastName = faker.person.lastName();
        const contactsEmail = faker.internet.email();
        const contactsPhone = faker.phone.number();
        await collectionPage.fillContatcsFirstNameInput(contactsFirstName);
        await collectionPage.fillContatcsLastNameInput(contactsLastName);
        await collectionPage.fillContatcsEmailInput(contactsEmail);
        await collectionPage.fillContatcsPhoneInput(contactsPhone);
        dataSave = {
            ...dataSave,
            contacts: {
                contactsFirstName: contactsFirstName,
                contactsLastName: contactsLastName,
                contactsEmail: contactsEmail,
                contactsPhone: contactsPhone
            }
        };
        await collectionPage.clickContinueButton();
    });
    await test.step('Fill Banking Details', async () => {
        expect(await collectionPage.isFieldSetRootVisible()).toBe(true);
        const bankCardHolderName = faker.person.fullName();
        const residentAddress = faker.location.streetAddress(true);
        const bankingAccountNumber = faker.finance.accountNumber({ length: 13 });
        const bankingIban = faker.finance.iban();
        const bankingSwift = faker.finance.bic({ includeBranchCode: true });
        const bankingRouteNumber = faker.finance.routingNumber();
        const bankingBankName = faker.company.name();
        const bankingBankCode = faker.finance.pin(4);
        const bankingBankAddress = faker.location.streetAddress(true);
        const bankingSubBranchNumber = faker.finance.pin(4);
        const bankingAccountCurrency = faker.finance.currencyCode();
        await collectionPage.fillCardHolderNameInput(bankCardHolderName);
        await collectionPage.fillResidentAddressInput(residentAddress);
        await collectionPage.fillBankingAccountNumberInput(bankingAccountNumber);
        await collectionPage.fillBankingIbanInput(bankingIban);
        await collectionPage.fillBankingSwiftInput(bankingSwift);
        await collectionPage.fillBankingRouteNumberInput(bankingRouteNumber);
        await collectionPage.fillBankingBankNameInput(bankingBankName);
        await collectionPage.fillBankingBankCodeInput(bankingBankCode);
        await collectionPage.fillBankingBankAddressInput(bankingBankAddress);
        await collectionPage.fillBankingSubBranchNumberInput(bankingSubBranchNumber);
        await collectionPage.fillBankingAccountCurrencySelectInput(bankingAccountCurrency);
        dataSave = {
            ...dataSave,
            bankingDetails: {
                bankCardHolderName: bankCardHolderName,
                residentAddress: residentAddress,
                bankingAccountNumber: bankingAccountNumber,
                bankingIban: bankingIban,
                bankingSwift: bankingSwift,
                bankingRouteNumber: bankingRouteNumber,
                bankingBankName: bankingBankName,
                bankingBankCode: bankingBankCode,
                bankingBankAddress: bankingBankAddress,
                bankingSubBranchNumber: bankingSubBranchNumber,
                bankingAccountCurrency: bankingAccountCurrency
            }
        };
        await collectionPage.clickContinueButton();
    });
    await test.step('Fill Store Info', async () => {
        expect(await collectionPage.isFieldSetRootVisible()).toBe(true);
        const storeUrl = faker.internet.url();
        const dbaDescriptor = faker.database.column();
        const productsDescription = faker.commerce.productDescription();
        const establishedDate = faker.date
            .past({ years: 10 })
            .toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
        await collectionPage.fillWebsiteUrlInput(storeUrl);
        await collectionPage.fillDbaDescriptorInput(dbaDescriptor);
        await collectionPage.fillIndustrySelectInput();
        const industry = collectionPage.getIndustryValue();
        await collectionPage.fillProductsDescriptionInput(productsDescription);
        await collectionPage.fillEstablishedDateInput(establishedDate);
        dataSave = {
            ...dataSave,
            storeInfo: {
                storeUrl: storeUrl,
                dbaDescriptor: dbaDescriptor,
                industry: industry,
                productsDescription: productsDescription,
                establishedDate: establishedDate
            }
        };
        await await collectionPage.clickContinueButton();
    });
    await test.step('Fill Website Basic Requirement', async () => {
        expect(await collectionPage.isFieldSetRootVisible()).toBe(true);
        const companyMainWebSite = faker.internet.url();
        const companyContactsDetailAddress = faker.location.streetAddress(true);
        const companyReturnExchangePolicy = faker.internet.url();
        const companyShippingPolicy = faker.internet.url();
        const companyAboutUs = faker.internet.url();
        const companyTermsOfUse = faker.internet.url();
        const companyPrivacyPolicy = faker.internet.url();
        const companyProductQuantity = faker.number.int({ min: 5, max: 100 }).toString();
        const companyProductDescription = faker.lorem.lines({ min: 2, max: 3 });
        const companyProductPrice = faker.finance.amount({ min: 5, max: 1000 });
        const companyWebsiteLanguage = faker.location.country().substring(0, 3);
        await collectionPage.fillCompanyMainWebSiteInput(companyMainWebSite);
        await collectionPage.fillCompanyContactsDetailAddressInput(companyContactsDetailAddress);
        await collectionPage.fillCompanyReturnExchangePolicyInput(companyReturnExchangePolicy);
        await collectionPage.fillCompanyShippingPolicyInput(companyShippingPolicy);
        await collectionPage.fillCompanyAboutUsInput(companyAboutUs);
        await collectionPage.fillCompanyTermsOfUseInput(companyTermsOfUse);
        await collectionPage.fillCompanyPrivacyPolicyInput(companyPrivacyPolicy);
        await collectionPage.fillCompanyProductQuantityInput(companyProductQuantity);
        await collectionPage.fillCompanyProductDescriptionTextarea(companyProductDescription);
        await collectionPage.fillCompanyProductPriceInput(companyProductPrice);
        await collectionPage.fillCompanyWebsiteLanguageInput(companyWebsiteLanguage);
        dataSave = {
            ...dataSave,
            websiteBasicRequirement: {
                companyMainWebSite: companyMainWebSite,
                companyContactsDetailAddress: companyContactsDetailAddress,
                companyReturnExchangePolicy: companyReturnExchangePolicy,
                companyShippingPolicy: companyShippingPolicy,
                companyAboutUs: companyAboutUs,
                companyTermsOfUse: companyTermsOfUse,
                companyPrivacyPolicy: companyPrivacyPolicy,
                companyProductQuantity: companyProductQuantity,
                companyProductDescription: companyProductDescription,
                companyProductPrice: companyProductPrice,
                companyWebsiteLanguage: companyWebsiteLanguage
            }
        };
        await collectionPage.clickContinueButton();
    });
    await test.step('Fill Processing Details', async () => {
        expect(await collectionPage.isFieldSetRootVisible()).toBe(true);
        const monthlySalesVolume = faker.finance.amount({ min: 1000, max: 100000, dec: 0 });
        const monthlyNumberOfTransactions = faker.number.int({ min: 5, max: 100 }).toString();
        const estMonthlySalesVolume = faker.finance.amount({ min: 1000, max: 100000, dec: 0 });
        const estMonthlyNumberOfTransactions = faker.number.int({ min: 5, max: 100 }).toString();
        const averageTicketAmount = faker.finance.amount({ min: 5, max: 1000 });
        const minimumTicketAmount = faker.finance.amount({ min: 5, max: 100 });
        const maximumTicketAmount = faker.finance.amount({ min: 100, max: 500 });
        const asia70Europe30 = faker.finance.amount({ min: 5, max: 100 });
        await collectionPage.fillMonthlySalesVolumeInput(monthlySalesVolume);
        await collectionPage.fillMonthlyNumberOfTransactionsInput(monthlyNumberOfTransactions);
        await collectionPage.fillEstMonthlySalesVolumeInput(estMonthlySalesVolume);
        await collectionPage.fillEstMonthlyNumberOfTransactionsInput(estMonthlyNumberOfTransactions);
        await collectionPage.fillAverageTicketAmountInput(averageTicketAmount);
        await collectionPage.fillMinimumTicketAmountInput(minimumTicketAmount);
        await collectionPage.fillMaximumTicketAmountInput(maximumTicketAmount);
        await collectionPage.fillAsia70Europe30Input(asia70Europe30);
        await collectionPage.selectCustomerCategorySelectInput();
        await collectionPage.clickMembershipSelectCheckbox();
        await collectionPage.clickDirectPurchaseSelectCheckbox();
        dataSave = {
            ...dataSave,
            processingDetails: {
                monthlySalesVolume: monthlySalesVolume,
                monthlyNumberOfTransactions: monthlyNumberOfTransactions,
                estMonthlySalesVolume: estMonthlySalesVolume,
                estMonthlyNumberOfTransactions: estMonthlyNumberOfTransactions,
                averageTicketAmount: averageTicketAmount,
                minimumTicketAmount: minimumTicketAmount,
                maximumTicketAmount: maximumTicketAmount,
                asia70Europe30: asia70Europe30
            }
        };
        await collectionPage.clickContinueButton();
    });
    await test.step('Fill Company Documents', async () => {
        expect(await collectionPage.isFieldSetRootVisible()).toBe(true);
        await collectionPage.uploadCertificateOfIncorporation(path.join(__dirname, 'upload/cer_verif.jpg'));
        await collectionPage.uploadBusinessRegistrationCertificate(path.join(__dirname, 'upload/cer_verif.jpg'));
        await collectionPage.uploadCorporateTaxCertificate(path.join(__dirname, 'upload/cer_verif.jpg'));
        await collectionPage.uploadCertificateOfGoodStanding(path.join(__dirname, 'upload/cer_verif.jpg'));
        await collectionPage.uploadCertificateOfDirectorsAndShareholders(path.join(__dirname, 'upload/cer_verif.jpg'));
        await collectionPage.uploadCompanySealPicture(path.join(__dirname, 'upload/company_seal.jpg'));
        await collectionPage.uploadProofOfBankAccount(path.join(__dirname, 'upload/bank_verif.jpg'));
        await collectionPage.uploadOtherSupplementaryInformation(path.join(__dirname, 'upload/cer_verif.jpg'));
        await collectionPage.uploadDomainPurchaseRecordCertificate(path.join(__dirname, 'upload/domai_pushare.jpg'));
        await collectionPage.uploadFrontDoorPhoto(path.join(__dirname, 'upload/office1.jpg'));
        await collectionPage.uploadInteriorOfficePhoto1(path.join(__dirname, 'upload/office2.jpg'));
        await collectionPage.uploadInteriorOfficePhoto2(path.join(__dirname, 'upload/office3.jpg'));
        await collectionPage.uploadTransactionData(path.join(__dirname, 'upload/finantial.pdf'));
        await collectionPage.clickIConfirmCheckbox();
        dataSave = {
            ...dataSave,
            companyDocuments: {
                certificateOfIncorporation: 'upload/cer_verif.jpg',
                businessRegistrationCertificate: 'upload/cer_verif.jpg',
                corporateTaxCertificate: 'upload/cer_verif.jpg',
                certificateOfGoodStanding: 'upload/cer_verif.jpg',
                certificateOfDirectorsAndShareholders: 'upload/cer_verif.jpg',
                companySealPicture: 'upload/company_seal.jpg',
                proofOfBankAccount: 'upload/bank_verif.jpg',
                otherSupplementaryInformation: 'upload/cer_verif.jpg',
                domainPurchaseRecordCertificate: 'upload/domai_pushare.jpg',
                frontDoorPhoto: 'upload/office1.jpg',
                interiorOfficePhoto1: 'upload/office2.jpg',
                interiorOfficePhoto2: 'upload/office3.jpg',
                transactionData: 'upload/finantial.pdf'
            }
        };
        await page.waitForTimeout(2000);
        await collectionPage.clickContinueButton();
        await expect
            .poll(
                async () => {
                    const response = await collectionPage.papersCheckedIsVisible();
                    return response;
                },
                {
                    intervals: [1_000, 2_000, 3_000],
                    timeout: 60_000
                }
            )
            .toBe(true);
        // const emailsList = await mailSacApiPage.getEmailsList();
        // await mailSacApiPage.deleteOneEmail(emailsList.pop());
        const jsonData = JSON.stringify(dataSave);
        fs.writeFileSync('data.json', jsonData);
    });
});

test(qase([10], 'Check data for create collection @collection'), async () => {
    await test.step('Login to the backoffice', async () => {
        await logInPage.navigate('/');
        await logInPage.setEmailInput(process.env.LOGIN_EMAIL);
        await logInPage.setPasswordInput(process.env.LOGIN_PASSWORD);
        await logInPage.clickSignInButton();
        expect(await logInPage.isSearchInputVisible()).toBe(true);
    });
    await test.step('Search for the created collection', async () => {
        expect(await dashboardPage.isSearchInputVisible()).toBe(true);
        await dashboardPage.setSearchInputValue('');
        await dashboardPage.setSearchInputValue((dataSave as any).businessInformation.companyName);
        await page.waitForTimeout(1000);
        await dashboardPage.clickSearchedElement();
    });
    await test.step('Check the created collection', async () => {
        //todo check the created collection
    });
});

test(qase([11], 'Reupload document and reject @collection'), async ({ browser }) => {
    //let linkToReupload: string;
    await test.step('Assign to first user', async () => {
        await dashboardPage.assignToFirstUser();
    });
    await test.step('Reupload the document', async () => {
        await dashboardPage.clickReUploadButton();
        expect(await dashboardPage.isReUploadModalVisible()).toBe(true);
        await dashboardPage.enterReUploadComment('Rejected');
        await dashboardPage.clickReUploadConfirmButton();
        await page.waitForTimeout(1000);
        await dashboardPage.clickAskForReUploadButton();
        await dashboardPage.clickSendEmailButton();
        await page.waitForTimeout(10000); // wait for the email to be sent
        // const emailsList = await mailSacApiPage.getEmailsList();
        // const emailID = emailsList.pop();
        // const mailsList = await mailSacApiPage.getEmailMessage(emailID);
        // linkToReupload = mailsList.links[0];
        // await mailSacApiPage.deleteOneEmail(emailID);
    });
    await test.step('Check the link to re-upload', async () => {
        newPage = await browser.newPage();
        const newCollectionPage = new CollectionPage(newPage);
        await newCollectionPage.navigate((dataSave as any).collectionFlowUrl);
        expect(await newCollectionPage.isDestructiveTextVisible()).toBe(true);
        await newCollectionPage.reuploadDestructiveDocument(path.join(__dirname, 'upload/re_ID.jpg'));
        await newCollectionPage.clickContinueButtonIfDisplayed();
        await expect
            .poll(
                async () => {
                    const response = await newCollectionPage.papersCheckedIsVisible();
                    return response;
                },
                {
                    intervals: [1_000, 2_000, 3_000],
                    timeout: 60_000
                }
            )
            .toBe(true);
        await newPage.close();
    });
    await test.step('Reject profile', async () => {
        await page.reload();
        expect(await logInPage.isSearchInputVisible()).toBe(true);
        await dashboardPage.clickRejectButton();
    });
});
