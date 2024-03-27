import { Locator, Page } from '@playwright/test';
import { BasePage } from './base-page.po';

export class CollectionPage extends BasePage {
    private readonly fieldSetRoot: Locator;
    private readonly lastNameInput: Locator;
    private readonly firstNameInput: Locator;
    private readonly jobTitleInput: Locator;
    private readonly dateOfBirthInput: Locator;
    private readonly phoneInput: Locator;
    private readonly signCheckbox: Locator;
    private readonly email: Locator;
    private readonly registrationNumberInput: Locator;
    private readonly companyNameInput: Locator;
    private readonly countrySelectButton: Locator;
    private readonly countrySelectInput: Locator;
    private readonly taxIdentificationNumberInput: Locator;
    private readonly amountOfEmployeesInput: Locator;
    private readonly corporateTypeInput: Locator;
    private readonly corporateArr: Array<string>;
    private readonly registeredCapitalInput: Locator;
    private readonly businessStreetInput: Locator;
    private readonly businessStreetNumberInput: Locator;
    private readonly businessCityInput: Locator;
    private readonly businessCountrySelectButton: Locator;
    private readonly uboCheckbox: Locator;
    private readonly uboNationalitySelectButton: Locator;
    private readonly uboNationalitySelectInput: Locator;
    private readonly SelectFirstOption: Locator;
    private readonly uboIdentityNumberInput: Locator;
    private readonly uboFullAddressInput: Locator;
    private readonly uboOwnershipPercentageInput: Locator;
    private readonly directorsCheckbox: Locator;
    private readonly directorsNationalitySelectButton: Locator;
    private readonly directorsNationalitySelectInput: Locator;
    private readonly directorsIdentityNumberInput: Locator;
    private readonly directorsFullAddressInput: Locator;
    private readonly directorsIDPhotoFileInput: Locator;
    private readonly directorsSelfieIDPhotoFileInput: Locator;
    private readonly contatcsFirstNameInput: Locator;
    private readonly contatcsLastNameInput: Locator;
    private readonly contatcsEmailInput: Locator;
    private readonly contatcsPhoneInput: Locator;
    private readonly continueButton: Locator;
    private readonly cardHolderNameInput: Locator;
    private readonly residentAddressInput: Locator;
    private readonly bankingAccountNumberInput: Locator;
    private readonly bankingIbanInput: Locator;
    private readonly bankingSwiftInput: Locator;
    private readonly bankingRouteNumberInput: Locator;
    private readonly bankingBankNameInput: Locator;
    private readonly bankingBankCodeInput: Locator;
    private readonly bankingBankAddressInput: Locator;
    private readonly bankingSubBranchNumberInput: Locator;
    private readonly bankingAccountCurrencySelectButton: Locator;
    private readonly bankingCurrencySelectInput: Locator;
    private readonly websiteUrlInput: Locator;
    private readonly dbaDescriptorInput: Locator;
    private readonly industrySelectButton: Locator;
    private readonly industrySelectInput: Locator;
    private readonly productsDescriptionInput: Locator;
    private readonly establishedDateInput: Locator;
    private readonly industryArr: Array<string>;
    private readonly companyMainWebSiteInput: Locator;
    private readonly companyContactsDetailAddressInput: Locator;
    private readonly companyReturnExchangePolicyInput: Locator;
    private readonly companyShippingPolicyInput: Locator;
    private readonly companyAboutUsInput: Locator;
    private readonly companyTermsOfUseInput: Locator;
    private readonly companyPrivacyPolicyInput: Locator;
    private readonly companyProductQuantityInput: Locator;
    private readonly companyProductDescriptionTextarea: Locator;
    private readonly companyProductPriceInput: Locator;
    private readonly companyWebsiteLanguageSelectButton: Locator;
    private readonly companyWebsiteLanguageSelectInput: Locator;
    private readonly monthlySalesVolumeInput: Locator;
    private readonly monthlyNumberOfTransactionsInput: Locator;
    private readonly estMonthlySalesVolumeInput: Locator;
    private readonly estMonthlyNumberOfTransactionsInput: Locator;
    private readonly averageTicketAmountInput: Locator;
    private readonly minimumTicketAmountInput: Locator;
    private readonly maximumTicketAmountInput: Locator;
    private readonly asia70Europe30Input: Locator;
    private readonly customerCategorySelectButton: Locator;
    private readonly customCategoryArr: Array<string>;
    private readonly membershipSelectCheckbox: Locator;
    private readonly directPurchaseSelectCheckbox: Locator;
    private readonly certificateOfIncorporationInput: Locator;
    private readonly businessRegistrationCertificateInput: Locator;
    private readonly corporateTaxCertificateInput: Locator;
    private readonly certificateOfGoodStandingInput: Locator;
    private readonly certificateOfDirectorsAndShareholdersInput: Locator;
    private readonly companySealPictureInput: Locator;
    private readonly proofOfBankAccountInput: Locator;
    private readonly otherSupplementaryInformationInput: Locator;
    private readonly domainPurchaseRecordCertificateInput: Locator;
    private readonly frontDoorPhotoInput: Locator;
    private readonly interiorOfficePhoto1Input: Locator;
    private readonly interiorOfficePhoto2Input: Locator;
    private readonly transactionDataInput: Locator;
    private readonly iConfirmCheckbox: Locator;
    private readonly checkedIConfirmImage: Locator;

    constructor(page: Page) {
        super(page);
        this.checkedIConfirmImage = this.page.locator('div>img[src*="checked"]');
        this.certificateOfIncorporationInput = this.page.locator(
            '[for="root_document-certificates-of-incorporation"]+div [data-testid="file-uploader-field"]'
        );
        this.businessRegistrationCertificateInput = this.page.locator(
            '[for="root_document-business-registration-certificate"]+div [data-testid="file-uploader-field"]'
        );
        this.corporateTaxCertificateInput = this.page.locator(
            '[for="root_document-corporate-tax-certificate"]+div [data-testid="file-uploader-field"]'
        );
        this.certificateOfGoodStandingInput = this.page.locator(
            '[for="root_document-certificate-of-good-standing"]+div [data-testid="file-uploader-field"]'
        );
        this.certificateOfDirectorsAndShareholdersInput = this.page.locator(
            '[for="root_document-certificate-of-directors-and-shareholders"]+div [data-testid="file-uploader-field"]'
        );
        this.companySealPictureInput = this.page.locator(
            '[for="root_document-picture-of-company-seal"]+div [data-testid="file-uploader-field"]'
        );
        this.proofOfBankAccountInput = this.page.locator(
            '[for="root_document-proof-of-bank-account"]+div [data-testid="file-uploader-field"]'
        );
        this.otherSupplementaryInformationInput = this.page.locator(
            '[for="root_document-other-supplementary-information"]+div [data-testid="file-uploader-field"]'
        );
        this.domainPurchaseRecordCertificateInput = this.page.locator(
            '[for="root_document-website-pictures-domain-certificate"]+div [data-testid="file-uploader-field"]'
        );
        this.frontDoorPhotoInput = this.page.locator(
            '[for="root_document-office-front-door-pictures-1"]+div [data-testid="file-uploader-field"]'
        );
        this.interiorOfficePhoto1Input = this.page.locator(
            '[for="root_document-office-interior-pictures-2"]+div [data-testid="file-uploader-field"]'
        );
        this.interiorOfficePhoto2Input = this.page.locator(
            '[for="root_document-office-interior-pictures-3"]+div [data-testid="file-uploader-field"]'
        );
        this.transactionDataInput = this.page.locator(
            '[for="root_document-transaction-data-last-months"]+div [data-testid="file-uploader-field"]'
        );
        this.iConfirmCheckbox = this.page.locator('button[role="checkbox"]');
        this.monthlySalesVolumeInput = this.page.locator('[name="monthly-sales-volume-input"]');
        this.monthlyNumberOfTransactionsInput = this.page.locator('[name="monthly-number-transactions-input"]');
        this.estMonthlySalesVolumeInput = this.page.locator('[name="est-monthly-sales-volume-input"]');
        this.estMonthlyNumberOfTransactionsInput = this.page.locator('[name="est-monthly-transactions-input"]');
        this.averageTicketAmountInput = this.page.locator('[name="average-ticket-sales-input"]');
        this.minimumTicketAmountInput = this.page.locator('[name="minimum-ticket-sales-input"]');
        this.maximumTicketAmountInput = this.page.locator('[name="maximum-ticket-sales-input"]');
        this.asia70Europe30Input = this.page.locator('[name="volume-in-region"]');
        this.customerCategorySelectButton = this.page.locator('[placeholder="Select more..."]');
        this.membershipSelectCheckbox = this.page.locator('button[value="Membership"]');
        this.directPurchaseSelectCheckbox = this.page.locator('button[value="Direct Purchase"]');
        this.companyMainWebSiteInput = this.page.locator('[name="main-company-website-input"]');
        this.companyContactsDetailAddressInput = this.page.locator('[name="contact-details-input"]');
        this.companyReturnExchangePolicyInput = this.page.locator('[name="return-policy-url-input"]');
        this.companyShippingPolicyInput = this.page.locator('[name="shipping-policy-url-input"]');
        this.companyAboutUsInput = this.page.locator('[name="about-us-url-input"]');
        this.companyTermsOfUseInput = this.page.locator('[name="terms-of-us-url-input"]');
        this.companyPrivacyPolicyInput = this.page.locator('[name="privacy-policy-url-input"]');
        this.companyProductQuantityInput = this.page.locator('[name="product-quantity-input"]');
        this.companyProductDescriptionTextarea = this.page.locator('[name="product-description-input"]');
        this.companyProductPriceInput = this.page.locator('[name="product-price-input"]');
        this.companyWebsiteLanguageSelectButton = this.page.locator('[for="root_website-language-input"]+div>button');
        this.companyWebsiteLanguageSelectInput = this.page.locator('div[data-radix-popper-content-wrapper] input');
        this.websiteUrlInput = this.page.locator('[name="store-website-urls-input"]');
        this.dbaDescriptorInput = this.page.locator('[name="store-dba-input"]');
        this.industrySelectButton = this.page.locator('[for="root_store-industry-input"]+div>button');
        this.industrySelectInput = this.page.locator('div[data-radix-popper-content-wrapper] input');
        this.productsDescriptionInput = this.page.locator('[name="store-products-input"]');
        this.establishedDateInput = this.page.locator(
            '[for="root_store-established-input"]+div [placeholder="MM/DD/YYYY"]'
        );
        this.cardHolderNameInput = this.page.locator('[name="card-holder-name-input"]');
        this.residentAddressInput = this.page.locator('[name="resident-address-input"]');
        this.bankingAccountNumberInput = this.page.locator('[name="account-number-input"]');
        this.bankingIbanInput = this.page.locator('[name="iban-input"]');
        this.bankingSwiftInput = this.page.locator('[name="swift-code-input"]');
        this.bankingRouteNumberInput = this.page.locator('[name="route-number-input"]');
        this.bankingBankNameInput = this.page.locator('[name="bank-name-input"]');
        this.bankingBankCodeInput = this.page.locator('[name="bank-code-input"]');
        this.bankingBankAddressInput = this.page.locator('[name="bank-address-input"]');
        this.bankingSubBranchNumberInput = this.page.locator('[name="bank-sub-branch-input"]');
        this.bankingAccountCurrencySelectButton = this.page.locator('[for="root_account-currency-input"]+div>button');
        this.bankingCurrencySelectInput = this.page.locator('div[cmdk-input-wrapper] input');
        this.fieldSetRoot = this.page.locator('fieldset#root');
        this.lastNameInput = this.page.locator('[name="last-name-input"]');
        this.firstNameInput = this.page.locator('[name="first-name-input"]');
        this.jobTitleInput = this.page.locator('[name="job-title-input"]');
        this.dateOfBirthInput = this.page.locator('[placeholder="MM/DD/YYYY"]');
        this.email = this.page.locator(
            '//legend[contains(text(), "Individual Information")]/following-sibling::div//label[contains(text(), "Email")]/following-sibling::div'
        );
        this.phoneInput = this.page.locator('[type="tel"]');
        this.signCheckbox = this.page.locator('button[role="checkbox"]');
        this.registrationNumberInput = this.page.locator('[name="registration-number-input"]');
        this.companyNameInput = this.page.locator('[name="company-name-input"]');
        this.countrySelectButton = this.page.locator('[for="root_country-picker-input"]+div>button');
        this.countrySelectInput = this.page.locator('div[data-radix-popper-content-wrapper] input');
        this.taxIdentificationNumberInput = this.page.locator('[name="tax-identification-number-input"]');
        this.amountOfEmployeesInput = this.page.locator('[name="number-of-employees-input"]');
        this.corporateTypeInput = this.page.locator('[for="root_business-type-input"]+div input');
        this.registeredCapitalInput = this.page.locator('[name="registered-capital-in-usd-type-input"]');
        this.businessStreetInput = this.page.locator('[name="street-input"]');
        this.businessStreetNumberInput = this.page.locator('[name="street-number-input"]');
        this.businessCityInput = this.page.locator('[name="city-input"]');
        this.businessCountrySelectButton = this.page.locator('[for="root_country-input"]+div>button');
        this.uboCheckbox = this.page.locator(
            '//*[text()="I own 25% or more of the company"]/preceding-sibling::button[@role="checkbox"]'
        );
        this.uboNationalitySelectButton = this.page.locator('[for="root_0_ubos:nationality-input"]+div>button');
        this.uboNationalitySelectInput = this.page.locator('div[cmdk-input-wrapper] input');
        this.SelectFirstOption = this.page.locator('[role="option"]').first();
        this.uboIdentityNumberInput = this.page.locator('[name="ubos:identity-number-input"]');
        this.uboFullAddressInput = this.page.locator('[name="ubos:address-of-residence-input"]');
        this.uboOwnershipPercentageInput = this.page.locator('[name="ubos:ownership-percentage-input"]');
        this.directorsCheckbox = this.page.locator(
            '//*[text()="I am a director in the company"]/preceding-sibling::button[@role="checkbox"]'
        );
        this.directorsNationalitySelectButton = this.page.locator(
            '[for="root_0_directors:nationality-input"]+div>button'
        );
        this.directorsNationalitySelectInput = this.page.locator('div[cmdk-input-wrapper] input');
        this.directorsIdentityNumberInput = this.page.locator('[name="directors:identity-number-input"]');
        this.directorsFullAddressInput = this.page.locator('[name="directors:address-of-residence-input"]');
        this.directorsIDPhotoFileInput = this.page.locator(
            '[for="root_0_directors:passport-document"]+div [data-testid="file-uploader-field"]'
        );
        this.directorsSelfieIDPhotoFileInput = this.page.locator(
            '[for="root_0_directors:passport-selfie"]+div [data-testid="file-uploader-field"]'
        );
        this.contatcsFirstNameInput = this.page.locator('[name="contact-first-name-input"]');
        this.contatcsLastNameInput = this.page.locator('[name="contact-last-name-input"]');
        this.contatcsEmailInput = this.page.locator('[name="contact-email-input"]');
        this.contatcsPhoneInput = this.page.locator('input[type="tel"]');
        this.continueButton = this.page.locator('div.grid>button');
        this.customCategoryArr = ['B2C', 'B2B', 'C2C', 'Other'];
        this.corporateArr = [
            'Sole Proprietorship',
            'Partnership',
            'Corporation',
            'Limited Liability Company (LLC)',
            'Limited Partnership (LP)',
            'Limited Liability Partnership (LLP)',
            'Public Limited Company (PLC)',
            'Private Limited Company (Ltd)',
            'Non-Profit Organization',
            'Cooperative',
            'Trust',
            'Government',
            'Other'
        ];
        this.industryArr = [
            'Adult Entertainment and Products',
            'Aerospace Engineering',
            'Agriculture and Farming',
            'Airlines and Aviation',
            'Airlines and Charter Services',
            'Alcohol Sales',
            'Alternative Medicine',
            'Animation',
            'Antiques',
            'Apparel and Fashion',
            'Architectural Restoration',
            'Architecture and Planning',
            'Arts and Crafts Supplies',
            'Arts and Crafts',
            'Astrology and Spiritual',
            'Auctions and Auctioneering',
            'Auctions and Penny Auctions',
            'Automotive Repair',
            'Automotive',
            'Aviation & Aerospace',
            'Bail Bonds',
            'Bakery and Confections',
            'Banking and Finance',
            'Beverage Production',
            'Bicycle Sales and Service',
            'Binary Options Trading',
            'Biomedical',
            'Biotechnology',
            'Bitcoins and Cryptocurrencies',
            'Boat Building and Repair',
            'Breweries and Distilleries',
            'Bridal Services',
            'Broadcast Media',
            'Building Materials',
            'Candle and Aromatherapy',
            'Cannabis and CBD Products',
            'Cannabis',
            'Ceramics and Pottery',
            'Charities and Non-Profits',
            'Chemicals',
            'Childcare',
            'Cigarettes, E-Cigarettes, and Vape Shops',
            'Civic and Social Organizations',
            'Civil Engineering',
            'Clinical Research',
            'Collectibles',
            'Collection Agencies',
            'Commercial Fishing',
            'Commercial Real Estate',
            'Commodities Trading',
            'Computer & Network Security',
            'Computer Gaming',
            'Computer Hardware',
            'Computer Software',
            'Construction',
            'Consumer Electronics',
            'Consumer Goods',
            'Consumer Services',
            'Cosmetics and Beauty',
            'Craft Brewing and Distilling',
            'Credit Repair Services',
            'Dairy',
            'Dance and Dance Instruction',
            'Data Analysis and Statistics',
            'Dating Services',
            'Debt Consolidation and Restructuring',
            'Defense and Space',
            'Design',
            'Digital Downloads',
            'Digital Media',
            'Direct Marketing',
            'E-commerce',
            'Education and E-Learning',
            'Elderly Care',
            'Electrical and Electronic Manufacturing',
            'Electrical Equipment',
            'Emergency Services',
            'Entertainment',
            'Environmental Services',
            'Equine and Equestrian',
            'eSports and Betting',
            'Event Ticket Brokers',
            'Events Services',
            'Executive Office and Management',
            'Facilities Services',
            'Farming and Agriculture Equipment',
            'Fashion Accessories',
            'Financial Services',
            'Fine Art',
            'Firearms, Ammunition, and Accessories',
            'Fireworks Sales',
            'Fishery',
            'Florists',
            'Food and Beverages',
            'Food Production',
            'Food Trucks',
            'Footwear Manufacturing',
            'Forestry and Logging',
            'Forex Trading',
            'Fossil Fuels',
            'Funeral Services',
            'Furniture Manufacturing',
            'Furniture',
            'Gambling and Casinos',
            'Genomics and Genetics',
            'Geology and Earth Sciences',
            'Glass, Ceramics and Concrete',
            'Government and Public Services',
            'Graphic Design',
            'Green and Sustainable Living',
            'Health, Wellness and Fitness',
            'Higher Education',
            'Hobbies and Crafts',
            'Home and Garden',
            'Home Health Care',
            'Homewares',
            'Horoscopes and Psychic Services',
            'Horticulture',
            'Hospital and Healthcare',
            'Hospitality',
            'Human Resources',
            'Illegal and Black Market Products',
            'Import and Export',
            'Indigenous Services',
            'Industrial Automation',
            'Infectious Diseases',
            'Information Services',
            'Information Technology',
            'Insurance',
            'Interior Design',
            'International Affairs',
            'International Trade and Development',
            'Internet',
            'Investment Banking',
            'Jewelry Sales',
            "Kid's Products",
            'Language Schools and Instruction',
            'Laundry and Dry Cleaning',
            'Law and Legal Services',
            'Leisure and Travel',
            'Library and Archives',
            'Lighting',
            'Linguistics',
            'Logistics and Supply Chain',
            'Luxury and Specialty Goods',
            'Luxury Goods and Jewelry',
            'Machinery',
            'Magazine Subscriptions',
            'Magazines',
            'Mail and Shipping Services',
            'Marine Sciences',
            'Maritime',
            'Marketing and Advertising',
            'Materials Research',
            'Mechanical or Industrial Engineering',
            'Media Production',
            'Medical and Recreational Marijuana Dispensaries',
            'Medical Devices',
            'Medical Practice',
            'Mental Health Care',
            'Meteorology and Weather Services',
            'Microelectronics',
            'Military and Defense',
            'Mining and Metals',
            'Modeling and Talent Agencies',
            'Motion Pictures and Film',
            'Multi-Level Marketing (MLM)',
            'Museums and Institutions',
            'Music',
            'Nanotechnology',
            'Natural and Organic Products',
            'Neurosciences',
            'Newspapers',
            'Nuclear Energy',
            'Nutraceuticals and Supplements',
            'Nutrition and Dietetics',
            'Office Supplies',
            'Oil and Energy',
            'Online Gaming and In-game Items',
            'Online Media',
            'Optometry',
            'Outsourcing and Offshoring',
            'Packaging',
            'Paper and Forest Products',
            'Pawn Shops',
            'Payday Loans and Lenders',
            'Performing Arts',
            'Pet Products and Services',
            'Pharmaceuticals and Drug Stores',
            'Pharmaceuticals',
            'Philanthropy',
            'Photography',
            'Plastics',
            'Podcasting',
            'Police and Security Services',
            'Political Organization and Lobbying',
            'Postal Services',
            'Poultry',
            'Precious Metals and Stones',
            'Primary and Secondary Education',
            'Printing',
            'Private and Specialty Education',
            'Professional Training and Coaching',
            'Public Broadcasting',
            'Public Policy',
            'Public Relations and Communications',
            'Publishing',
            'Pulp and Paper',
            'Railroad',
            'Ranching',
            'Real Estate',
            'Religious Organizations',
            'Renewable Energy',
            'Research',
            'Restaurants',
            'Retail',
            'Robotics',
            'Satellites',
            'Saunas and Spas',
            'Security and Investigations',
            'Semiconductors',
            'Shipbuilding',
            'Short-Term Rentals (e.g., Airbnb)',
            'Social Media',
            'Space Exploration',
            'Specialty Foods',
            'Sports Coaching and Instruction',
            'Sports Forecasting or Odds Making',
            'Sports',
            'Staffing and Recruiting',
            'Supermarkets',
            'Sustainable Agriculture',
            'Taxidermy',
            'Tea Production',
            'Telecommunications',
            'Telemarketing',
            'Telemedicine',
            'Television Broadcasting',
            'Textiles',
            'Therapeutics',
            'Timeshares',
            'Tobacco and Cigar Shops',
            'Tobacco',
            'Toys and Games',
            'Trade and Development',
            'Trade Shows and Events',
            'Traditional Energy',
            'Translation and Localization',
            'Travel Agencies and Tour Operators',
            'Urban Planning',
            'Utilities',
            'Veterinary Medicine',
            'Veterinary',
            'Video Production',
            'Virtual Reality and Augmented Reality',
            'Warehousing',
            'Water Treatment',
            'Weapons and Knives Sales',
            'Wearable Technology',
            'Weight Loss Programs and Products',
            'Wholesale',
            'Wine and Spirits',
            'Writing and Editing',
            'Yoga and Pilates',
            'Zoology and Wildlife'
        ];
    }

    /**
     * Checks if the papers checked confirmation image is visible.
     * @returns A promise that resolves to a boolean indicating whether the image is visible.
     */
    public async papersCheckedIsVisible(): Promise<boolean> {
        return this.checkedIConfirmImage.isVisible();
    }

    /**
     * Uploads a certificate of incorporation file.
     * @param filePath - The path of the file to upload.
     * @returns A promise that resolves when the file is uploaded successfully.
     */
    public async uploadCertificateOfIncorporation(filePath: string): Promise<void> {
        await this.certificateOfIncorporationInput.waitFor({ state: 'visible' });
        await this.certificateOfIncorporationInput.setInputFiles(filePath);
    }

    /**
     * Uploads a business registration certificate file.
     * @param filePath - The path of the file to upload.
     * @returns A promise that resolves when the file is uploaded successfully.
     */
    public async uploadBusinessRegistrationCertificate(filePath: string): Promise<void> {
        await this.businessRegistrationCertificateInput.waitFor({ state: 'visible' });
        await this.businessRegistrationCertificateInput.setInputFiles(filePath);
    }

    /**
     * Uploads a corporate tax certificate file.
     * @param filePath - The path of the file to upload.
     * @returns A promise that resolves when the file is uploaded successfully.
     */
    public async uploadCorporateTaxCertificate(filePath: string): Promise<void> {
        await this.corporateTaxCertificateInput.waitFor({ state: 'visible' });
        await this.corporateTaxCertificateInput.setInputFiles(filePath);
    }

    /**
     * Uploads a certificate of good standing file.
     * @param filePath - The path of the file to upload.
     * @returns A promise that resolves when the file is uploaded successfully.
     */
    public async uploadCertificateOfGoodStanding(filePath: string): Promise<void> {
        await this.certificateOfGoodStandingInput.waitFor({ state: 'visible' });
        await this.certificateOfGoodStandingInput.setInputFiles(filePath);
    }

    /**
     * Uploads a certificate of directors and shareholders file.
     * @param filePath - The path of the file to upload.
     * @returns A promise that resolves when the file is uploaded successfully.
     */
    public async uploadCertificateOfDirectorsAndShareholders(filePath: string): Promise<void> {
        await this.certificateOfDirectorsAndShareholdersInput.waitFor({ state: 'visible' });
        await this.certificateOfDirectorsAndShareholdersInput.setInputFiles(filePath);
    }

    /**
     * Uploads a company seal picture file.
     * @param filePath - The path of the file to upload.
     * @returns A promise that resolves when the file is uploaded successfully.
     */
    public async uploadCompanySealPicture(filePath: string): Promise<void> {
        await this.companySealPictureInput.waitFor({ state: 'visible' });
        await this.companySealPictureInput.setInputFiles(filePath);
    }

    /**
     * Uploads a proof of bank account file.
     * @param filePath - The path of the file to upload.
     * @returns A promise that resolves when the file is uploaded successfully.
     */
    public async uploadProofOfBankAccount(filePath: string): Promise<void> {
        await this.proofOfBankAccountInput.waitFor({ state: 'visible' });
        await this.proofOfBankAccountInput.setInputFiles(filePath);
    }

    /**
     * Uploads an other supplementary information file.
     * @param filePath - The path of the file to upload.
     * @returns A promise that resolves when the file is uploaded successfully.
     */
    public async uploadOtherSupplementaryInformation(filePath: string): Promise<void> {
        await this.otherSupplementaryInformationInput.waitFor({ state: 'visible' });
        await this.otherSupplementaryInformationInput.setInputFiles(filePath);
    }

    /**
     * Uploads a domain purchase record certificate file.
     * @param filePath - The path of the file to upload.
     * @returns A promise that resolves when the file is uploaded successfully.
     */
    public async uploadDomainPurchaseRecordCertificate(filePath: string): Promise<void> {
        await this.domainPurchaseRecordCertificateInput.waitFor({ state: 'visible' });
        await this.domainPurchaseRecordCertificateInput.setInputFiles(filePath);
    }

    /**
     * Uploads a front door photo file.
     * @param filePath - The path of the file to upload.
     * @returns A promise that resolves when the file is uploaded successfully.
     */
    public async uploadFrontDoorPhoto(filePath: string): Promise<void> {
        await this.frontDoorPhotoInput.waitFor({ state: 'visible' });
        await this.frontDoorPhotoInput.setInputFiles(filePath);
    }

    /**
     * Uploads an interior office photo 1 file.
     * @param filePath - The path of the file to upload.
     * @returns A promise that resolves when the file is uploaded successfully.
     */
    public async uploadInteriorOfficePhoto1(filePath: string): Promise<void> {
        await this.interiorOfficePhoto1Input.waitFor({ state: 'visible' });
        await this.interiorOfficePhoto1Input.setInputFiles(filePath);
    }

    /**
     * Uploads an interior office photo 2 file.
     * @param filePath - The path of the file to upload.
     * @returns A promise that resolves when the file is uploaded successfully.
     */
    public async uploadInteriorOfficePhoto2(filePath: string): Promise<void> {
        await this.interiorOfficePhoto2Input.waitFor({ state: 'visible' });
        await this.interiorOfficePhoto2Input.setInputFiles(filePath);
    }

    /**
     * Uploads a transaction data file.
     * @param filePath - The path of the file to upload.
     * @returns A promise that resolves when the file is uploaded successfully.
     */
    public async uploadTransactionData(filePath: string): Promise<void> {
        await this.transactionDataInput.waitFor({ state: 'visible' });
        await this.transactionDataInput.setInputFiles(filePath);
    }

    /**
     * Clicks the I confirm checkbox.
     * @returns A promise that resolves once the checkbox is clicked.
     */
    public async clickIConfirmCheckbox(): Promise<void> {
        await this.iConfirmCheckbox.waitFor({ state: 'visible' });
        await this.iConfirmCheckbox.click();
    }

    /**
     * Fills the monthly sales volume input field with the specified value.
     * @param monthlySalesVolume - The value to be filled in the monthly sales volume input field.
     * @returns A promise that resolves once the input field is filled.
     * */
    public async fillMonthlySalesVolumeInput(monthlySalesVolume: string): Promise<void> {
        await this.monthlySalesVolumeInput.waitFor({ state: 'visible' });
        await this.monthlySalesVolumeInput.fill(monthlySalesVolume);
    }

    /**
     * Fills the monthly number of transactions input field with the specified value.
     * @param monthlyNumberOfTransactions - The value to be filled in the monthly number of transactions input field.
     * @returns A promise that resolves once the input field is filled.
     */
    public async fillMonthlyNumberOfTransactionsInput(monthlyNumberOfTransactions: string): Promise<void> {
        await this.monthlyNumberOfTransactionsInput.waitFor({ state: 'visible' });
        await this.monthlyNumberOfTransactionsInput.fill(monthlyNumberOfTransactions);
    }

    /**
     * Fills the estimated monthly sales volume input field with the specified value.
     * @param estMonthlySalesVolume - The value to be filled in the estimated monthly sales volume input field.
     * @returns A promise that resolves once the input field is filled.
     */
    public async fillEstMonthlySalesVolumeInput(estMonthlySalesVolume: string): Promise<void> {
        await this.estMonthlySalesVolumeInput.waitFor({ state: 'visible' });
        await this.estMonthlySalesVolumeInput.fill(estMonthlySalesVolume);
    }

    /**
     * Fills the estimated monthly number of transactions input field with the specified value.
     * @param estMonthlyNumberOfTransactions - The value to be filled in the estimated monthly number of transactions input field.
     * @returns A promise that resolves once the input field is filled.
     */
    public async fillEstMonthlyNumberOfTransactionsInput(estMonthlyNumberOfTransactions: string): Promise<void> {
        await this.estMonthlyNumberOfTransactionsInput.waitFor({ state: 'visible' });
        await this.estMonthlyNumberOfTransactionsInput.fill(estMonthlyNumberOfTransactions);
    }

    /**
     * Fills the average ticket amount input field with the specified value.
     * @param averageTicketAmount - The value to be filled in the average ticket amount input field.
     * @returns A promise that resolves once the input field is filled.
     */
    public async fillAverageTicketAmountInput(averageTicketAmount: string): Promise<void> {
        await this.averageTicketAmountInput.waitFor({ state: 'visible' });
        await this.averageTicketAmountInput.fill(averageTicketAmount);
    }

    /**
     * Fills the minimum ticket amount input field with the specified value.
     * @param minimumTicketAmount - The value to be filled in the minimum ticket amount input field.
     * @returns A promise that resolves once the input field is filled.
     */
    public async fillMinimumTicketAmountInput(minimumTicketAmount: string): Promise<void> {
        await this.minimumTicketAmountInput.waitFor({ state: 'visible' });
        await this.minimumTicketAmountInput.fill(minimumTicketAmount);
    }

    /**
     * Fills the maximum ticket amount input field with the specified value.
     * @param maximumTicketAmount - The value to be filled in the maximum ticket amount input field.
     * @returns A promise that resolves once the input field is filled.
     */
    public async fillMaximumTicketAmountInput(maximumTicketAmount: string): Promise<void> {
        await this.maximumTicketAmountInput.waitFor({ state: 'visible' });
        await this.maximumTicketAmountInput.fill(maximumTicketAmount);
    }

    /**
     * Fills the asia 70 europe 30 input field with the specified value.
     * @param asia70Europe30 - The value to be filled in the asia 70 europe 30 input field.
     * @returns A promise that resolves once the input field is filled.
     */
    public async fillAsia70Europe30Input(asia70Europe30: string): Promise<void> {
        await this.asia70Europe30Input.waitFor({ state: 'visible' });
        await this.asia70Europe30Input.fill(asia70Europe30);
    }

    /**
     * Fills the customer category select input with a random value.
     * @returns A promise that resolves once the input is filled.
     */
    public async selectCustomerCategorySelectInput(): Promise<void> {
        await this.customerCategorySelectButton.waitFor({ state: 'visible' });
        await this.customerCategorySelectButton.click();
        const customerCategory = this.customCategoryArr[Math.floor(Math.random() * this.customCategoryArr.length)];
        await this.page.locator(`[data-value="${customerCategory.toLowerCase()}"]`).click();
    }

    /**
     * Clicks the membership select checkbox.
     * @returns A promise that resolves once the checkbox is clicked.
     */
    public async clickMembershipSelectCheckbox(): Promise<void> {
        await this.membershipSelectCheckbox.waitFor({ state: 'visible' });
        await this.membershipSelectCheckbox.click();
    }

    /**
     * Clicks the direct purchase select checkbox.
     * @returns A promise that resolves once the checkbox is clicked.
     */
    public async clickDirectPurchaseSelectCheckbox(): Promise<void> {
        await this.directPurchaseSelectCheckbox.waitFor({ state: 'visible' });
        await this.directPurchaseSelectCheckbox.click();
    }

    /**
     * Fills the company main website input field with the specified value.
     * @param mainCompanyWebsite The value to be filled in the company main website input field.
     * @returns A promise that resolves when the input field is filled.
     */
    public async fillCompanyMainWebSiteInput(mainCompanyWebsite: string): Promise<void> {
        await this.companyMainWebSiteInput.waitFor({ state: 'visible' });
        await this.companyMainWebSiteInput.fill(mainCompanyWebsite);
    }

    /**
     * Fills the company contacts detail address input field with the specified value.
     * @param contactDetails - The value to be filled in the company contacts detail address input field.
     * @returns A promise that resolves once the input field is filled.
     */
    public async fillCompanyContactsDetailAddressInput(contactDetails: string): Promise<void> {
        await this.companyContactsDetailAddressInput.waitFor({ state: 'visible' });
        await this.companyContactsDetailAddressInput.fill(contactDetails);
    }

    /**
     * Fills the company return exchange policy input field with the specified value.
     * @param returnExchangePolicy - The value to be filled in the company return exchange policy input field.
     * @returns A promise that resolves once the input field is filled.
     */
    public async fillCompanyReturnExchangePolicyInput(returnExchangePolicy: string): Promise<void> {
        await this.companyReturnExchangePolicyInput.waitFor({ state: 'visible' });
        await this.companyReturnExchangePolicyInput.fill(returnExchangePolicy);
    }

    /**
     * Fills the company shipping policy input field with the specified value.
     * @param shippingPolicy - The value to be filled in the company shipping policy input field.
     * @returns A promise that resolves once the input field is filled.
     */
    public async fillCompanyShippingPolicyInput(shippingPolicy: string): Promise<void> {
        await this.companyShippingPolicyInput.waitFor({ state: 'visible' });
        await this.companyShippingPolicyInput.fill(shippingPolicy);
    }

    /**
     * Fills the company about us input field with the specified value.
     * @param aboutUs - The value to be filled in the company about us input field.
     * @returns A promise that resolves once the input field is filled.
     */
    public async fillCompanyAboutUsInput(aboutUs: string): Promise<void> {
        await this.companyAboutUsInput.waitFor({ state: 'visible' });
        await this.companyAboutUsInput.fill(aboutUs);
    }

    /**
     * Fills the company terms of use input field with the specified value.
     * @param termsOfUse - The value to be filled in the company terms of use input field.
     * @returns A promise that resolves once the input field is filled.
     */
    public async fillCompanyTermsOfUseInput(termsOfUse: string): Promise<void> {
        await this.companyTermsOfUseInput.waitFor({ state: 'visible' });
        await this.companyTermsOfUseInput.fill(termsOfUse);
    }

    /**
     * Fills the company privacy policy input field with the specified value.
     * @param privacyPolicy - The value to be filled in the company privacy policy input field.
     * @returns A promise that resolves once the input field is filled.
     */
    public async fillCompanyPrivacyPolicyInput(privacyPolicy: string): Promise<void> {
        await this.companyPrivacyPolicyInput.waitFor({ state: 'visible' });
        await this.companyPrivacyPolicyInput.fill(privacyPolicy);
    }

    /**
     * Fills the company product quantity input field with the specified value.
     * @param productQuantity - The value to be filled in the company product quantity input field.
     * @returns A promise that resolves once the input field is filled.
     */
    public async fillCompanyProductQuantityInput(productQuantity: string): Promise<void> {
        await this.companyProductQuantityInput.waitFor({ state: 'visible' });
        await this.companyProductQuantityInput.fill(productQuantity);
    }

    /**
     * Fills the company product description textarea with the specified value.
     * @param productDescription - The value to be filled in the company product description textarea.
     * @returns A promise that resolves once the textarea is filled.
     */
    public async fillCompanyProductDescriptionTextarea(productDescription: string): Promise<void> {
        await this.companyProductDescriptionTextarea.waitFor({ state: 'visible' });
        await this.companyProductDescriptionTextarea.fill(productDescription);
    }

    /**
     * Fills the company product price input field with the specified value.
     * @param productPrice - The value to be filled in the company product price input field.
     * @returns A promise that resolves once the input field is filled.
     */
    public async fillCompanyProductPriceInput(productPrice: string): Promise<void> {
        await this.companyProductPriceInput.waitFor({ state: 'visible' });
        await this.companyProductPriceInput.fill(productPrice);
    }

    /**
     * Fills the company website language select input with the specified language.
     * @param language - The language to fill in the select input.
     * @returns A promise that resolves once the input is filled.
     */
    public async fillCompanyWebsiteLanguageInput(language: string): Promise<void> {
        await this.companyWebsiteLanguageSelectButton.waitFor({ state: 'visible' });
        await this.companyWebsiteLanguageSelectButton.click();
        await this.companyWebsiteLanguageSelectInput.fill(language);
        await this.SelectFirstOption.click();
    }

    /**
     * Fills the website url input field with the specified value.
     * @param websiteUrl - The website url to be filled in the input field.
     * @returns A promise that resolves once the input field is filled.
     */
    public async fillWebsiteUrlInput(websiteUrl: string): Promise<void> {
        await this.websiteUrlInput.waitFor({ state: 'visible' });
        await this.websiteUrlInput.fill(websiteUrl);
    }

    /**
     * Fills the dba descriptor input field with the specified value.
     * @param dbaDescriptor - The dba descriptor to be filled in the input field.
     * @returns A promise that resolves once the input field is filled.
     */
    public async fillDbaDescriptorInput(dbaDescriptor: string): Promise<void> {
        await this.dbaDescriptorInput.waitFor({ state: 'visible' });
        await this.dbaDescriptorInput.fill(dbaDescriptor);
    }

    public async fillIndustrySelectInput(): Promise<void> {
        await this.industrySelectButton.waitFor({ state: 'visible' });
        await this.industrySelectButton.click();
        const industry = this.industryArr[Math.floor(Math.random() * this.industryArr.length)];
        await this.industrySelectInput.fill(industry);
        await this.page.keyboard.press('Enter');
    }

    /**
     * Fills the product description input field with the specified value.
     * @param productDescription - The product description to be filled in the input field.
     * @returns A promise that resolves once the input field is filled.
     */
    public async fillProductsDescriptionInput(productDescription: string): Promise<void> {
        await this.productsDescriptionInput.waitFor({ state: 'visible' });
        await this.productsDescriptionInput.fill(productDescription);
    }

    public async fillEstablishedDateInput(establishedDate: string): Promise<void> {
        await this.establishedDateInput.waitFor({ state: 'visible' });
        await this.establishedDateInput.click();
        await this.establishedDateInput.fill(establishedDate);
    }

    /**
     * Fills the card holder name input field with the specified value.
     * @param cardHolderName - The value to be filled in the card holder name input field.
     * @returns A promise that resolves once the input field is filled.
     */
    public async fillCardHolderNameInput(cardHolderName: string): Promise<void> {
        await this.cardHolderNameInput.waitFor({ state: 'visible' });
        await this.cardHolderNameInput.fill(cardHolderName);
    }

    /**
     * Fills the resident address input field with the specified address.
     * @param residentAddress - The address to fill in the resident address input field.
     * @returns A promise that resolves once the address is filled.
     */
    public async fillResidentAddressInput(residentAddress: string): Promise<void> {
        await this.residentAddressInput.waitFor({ state: 'visible' });
        await this.residentAddressInput.fill(residentAddress);
    }

    /**
     * Fills the banking account number input field with the specified account number.
     * @param accountNumber - The account number to be filled in the input field.
     * @returns A promise that resolves once the input field is filled.
     */
    public async fillBankingAccountNumberInput(accountNumber: string): Promise<void> {
        await this.bankingAccountNumberInput.waitFor({ state: 'visible' });
        await this.bankingAccountNumberInput.fill(accountNumber);
    }

    /**
     * Fills the banking IBAN input field with the provided IBAN.
     * @param iban - The IBAN to be filled in the input field.
     * @returns A promise that resolves once the input field is filled.
     */
    public async fillBankingIbanInput(iban: string): Promise<void> {
        await this.bankingIbanInput.waitFor({ state: 'visible' });
        await this.bankingIbanInput.fill(iban);
    }

    /**
     * Fills the banking swift input field with the provided value.
     * @param swift - The value to be filled in the banking swift input field.
     * @returns A promise that resolves once the input field is filled.
     */
    public async fillBankingSwiftInput(swift: string): Promise<void> {
        await this.bankingSwiftInput.waitFor({ state: 'visible' });
        await this.bankingSwiftInput.fill(swift);
    }

    /**
     * Fills the banking route number input field with the specified value.
     * @param routeNumber - The value to be filled in the banking route number input field.
     * @returns A promise that resolves once the input field is filled.
     */
    public async fillBankingRouteNumberInput(routeNumber: string): Promise<void> {
        await this.bankingRouteNumberInput.waitFor({ state: 'visible' });
        await this.bankingRouteNumberInput.fill(routeNumber);
    }

    /**
     * Fills the banking bank name input field with the specified value.
     * @param bankName - The value to be filled in the banking bank name input field.
     * @returns A promise that resolves once the input field is filled.
     */
    public async fillBankingBankNameInput(bankName: string): Promise<void> {
        await this.bankingBankNameInput.waitFor({ state: 'visible' });
        await this.bankingBankNameInput.fill(bankName);
    }

    /**
     * Fills the banking bank code input field with the specified bank code.
     * @param bankCode - The bank code to fill in the input field.
     * @returns A promise that resolves once the input field is filled.
     */
    public async fillBankingBankCodeInput(bankCode: string): Promise<void> {
        await this.bankingBankCodeInput.waitFor({ state: 'visible' });
        await this.bankingBankCodeInput.fill(bankCode);
    }

    /**
     * Fills the banking bank address input field with the specified value.
     * @param bankAddress - The value to be filled in the banking bank address input field.
     * @returns A promise that resolves once the input field is filled.
     */
    public async fillBankingBankAddressInput(bankAddress: string): Promise<void> {
        await this.bankingBankAddressInput.waitFor({ state: 'visible' });
        await this.bankingBankAddressInput.fill(bankAddress);
    }

    /**
     * Fills the banking sub-branch number input field with the specified value.
     * @param subBranchNumber - The value to be filled in the input field.
     * @returns A promise that resolves once the input field is filled.
     */
    public async fillBankingSubBranchNumberInput(subBranchNumber: string): Promise<void> {
        await this.bankingSubBranchNumberInput.waitFor({ state: 'visible' });
        await this.bankingSubBranchNumberInput.fill(subBranchNumber);
    }

    /**
     * Fills the banking account currency select input with the specified currency.
     *
     * @param currency - The currency to fill in the select input.
     * @returns A promise that resolves once the input is filled.
     */
    public async fillBankingAccountCurrencySelectInput(currency: string): Promise<void> {
        await this.bankingAccountCurrencySelectButton.waitFor({ state: 'visible' });
        await this.bankingAccountCurrencySelectButton.click();
        await this.bankingCurrencySelectInput.fill(currency);
        await this.page.keyboard.press('Enter');
    }

    /**
     * Checks if the field set root is visible.
     * @returns A promise that resolves to a boolean indicating whether the field set root is visible.
     */
    public async isFieldSetRootVisible(): Promise<boolean> {
        this.fieldSetRoot.first().waitFor({ state: 'visible' });
        return this.fieldSetRoot.first().isVisible();
    }

    /**
     * Retrieves the value of the first name input field.
     * @returns A promise that resolves to a string representing the input value.
     */
    public async getFirstNameInputValue(): Promise<string> {
        return this.firstNameInput.inputValue();
    }

    /**
     * Retrieves the value of the last name input field.
     * @returns A promise that resolves to a string representing the value of the last name input field.
     */
    public async getLastNameInputValue(): Promise<string> {
        return this.lastNameInput.inputValue();
    }

    /**
     * Fills the job title input field with the specified value.
     * @param jobTitle - The job title to be filled in the input field.
     * @returns A promise that resolves once the job title input field is filled.
     */
    public async fillJobTittleInput(jobTitle: string): Promise<void> {
        await this.jobTitleInput.waitFor({ state: 'visible' });
        await this.jobTitleInput.fill(jobTitle);
    }

    /**
     * Fills the date of birth input field with the specified value.
     * @param dateOfBirth - The date (MM/DD/YYYY) of birth to be filled in the input field.
     * @returns A promise that resolves once the date of birth input field is filled.
     */
    public async fillDateOfBirthInput(dateOfBirth: string): Promise<void> {
        await this.dateOfBirthInput.waitFor({ state: 'visible' });
        await this.dateOfBirthInput.click();
        await this.dateOfBirthInput.fill(dateOfBirth);
    }

    /**
     * Fills the phone input field with the specified phone number.
     * @param phone The phone number to fill in the input field.
     * @returns A promise that resolves once the phone input field is filled.
     */
    public async fillPhoneInput(phone: string): Promise<void> {
        await this.phoneInput.waitFor({ state: 'visible' });
        await this.phoneInput.click();
        await this.phoneInput.fill(phone);
    }

    /**
     * Clicks the sign checkbox.
     * @returns A promise that resolves when the checkbox is clicked.
     */
    public async clickSignCheckbox(): Promise<void> {
        await this.signCheckbox.waitFor({ state: 'visible' });
        await this.signCheckbox.click();
    }

    /**
     * Clicks the continue button.
     * @returns A promise that resolves once the continue button is clicked.
     */
    public async clickContinueButton(): Promise<void> {
        await this.continueButton.waitFor({ state: 'visible' });
        await this.continueButton.click();
        await this.waitForPageIsLoaded();
    }

    /**
     * Fills the registration number input field with the provided value.
     * @param registrationNumber - The registration number to be filled in the input field.
     * @returns A promise that resolves once the input field is filled.
     */
    public async fillRegistrationNumberInput(registrationNumber: string): Promise<void> {
        await this.registrationNumberInput.waitFor({ state: 'visible' });
        await this.registrationNumberInput.fill(registrationNumber);
    }

    /**
     * Retrieves the company name from the input field.
     * @returns A promise that resolves to the company name as a string.
     */
    public async getCompanyName(): Promise<string> {
        return this.companyNameInput.inputValue();
    }

    /**
     * Clicks the country select button.
     * Waits for the button to be visible before clicking.
     *
     * @returns A promise that resolves once the button is clicked.
     */
    public async clickCountrySelectButton(): Promise<void> {
        await this.countrySelectButton.waitFor({ state: 'visible' });
        await this.countrySelectButton.click();
    }

    /**
     * Fills the country select input with the specified country.
     * @param country - The country to fill in the select input.
     * @returns A promise that resolves once the country is filled in.
     */
    public async fillCountrySelectInput(country: string): Promise<void> {
        await this.countrySelectInput.waitFor({ state: 'visible' });
        await this.countrySelectInput.fill(country);
        await this.page.keyboard.press('Enter');
    }

    /**
     * Fills the tax identification number input field with the specified value.
     * @param taxIdentificationNumber - The value to be filled in the tax identification number input field.
     * @returns A promise that resolves once the input field is filled.
     */
    public async fillTaxIdentificationNumberInput(taxIdentificationNumber: string): Promise<void> {
        await this.taxIdentificationNumberInput.waitFor({ state: 'visible' });
        await this.taxIdentificationNumberInput.fill(taxIdentificationNumber);
    }

    /**
     * Fills the amount of employees input field with the specified value.
     * @param amountOfEmployees - The value to be filled in the amount of employees input field.
     * @returns A promise that resolves once the input field is filled.
     */
    public async fillAmountOfEmployeesInput(amountOfEmployees: string): Promise<void> {
        await this.amountOfEmployeesInput.waitFor({ state: 'visible' });
        await this.amountOfEmployeesInput.fill(amountOfEmployees);
    }

    /**
     * Sets the corporate type input by selecting a random item from the corporateArr.
     * Waits for the registeredCapitalInput to be visible before performing the action.
     * @returns A promise that resolves once the corporate type input is set.
     */
    public async setCorporateTypeInput(): Promise<void> {
        await this.registeredCapitalInput.waitFor({ state: 'visible' });
        await this.corporateTypeInput.click();
        const randomItem = this.corporateArr[Math.floor(Math.random() * this.corporateArr.length)];
        await this.corporateTypeInput.fill(randomItem);
    }

    /**
     * Fills the registered capital input field with the specified value.
     * @param registeredCapital - The value to be filled in the registered capital input field.
     * @returns A promise that resolves once the input field is filled.
     */
    public async fillRegisteredCapitalInput(registeredCapital: string): Promise<void> {
        await this.registeredCapitalInput.waitFor({ state: 'visible' });
        await this.registeredCapitalInput.fill(registeredCapital);
    }

    /**
     * Fills the business street input field with the specified street value.
     * @param street - The street value to be filled in the input field.
     * @returns A promise that resolves once the input field is filled.
     */
    public async fillBusinessStreetInput(street: string): Promise<void> {
        await this.businessStreetInput.waitFor({ state: 'visible' });
        await this.businessStreetInput.fill(street);
    }

    /**
     * Fills the business street number input field with the provided value.
     * @param streetNumber - The street number to fill in the input field.
     * @returns A promise that resolves once the input field is filled.
     */
    public async fillBusinessStreetNumberInput(streetNumber: string): Promise<void> {
        await this.businessStreetNumberInput.waitFor({ state: 'visible' });
        await this.businessStreetNumberInput.fill(streetNumber);
    }

    /**
     * Fills the business city input field with the specified city.
     * @param city - The city to be filled in the input field.
     * @returns A promise that resolves once the city is filled in the input field.
     */
    public async fillBusinessCityInput(city: string): Promise<void> {
        await this.businessCityInput.waitFor({ state: 'visible' });
        await this.businessCityInput.fill(city);
    }

    /**
     * Fills the business country select input with the specified country.
     * @param country - The country to fill in the input.
     * @returns A promise that resolves when the input is filled.
     */
    public async fillBusinessCountrySelectInput(country: string): Promise<void> {
        await this.businessCountrySelectButton.waitFor({ state: 'visible' });
        await this.businessCountrySelectButton.click();
        await this.countrySelectInput.fill(country);
        await this.page.keyboard.press('Enter');
    }

    /**
     * Clicks the UBO checkbox.
     *
     * @returns A promise that resolves when the checkbox is clicked.
     */
    public async clickUboCheckbox(): Promise<void> {
        await this.uboCheckbox.waitFor({ state: 'visible' });
        await this.uboCheckbox.click();
    }

    /**
     * Fills the UBO nationality select input with the specified value.
     *
     * @param national - The nationality value to fill.
     * @returns A promise that resolves once the input is filled.
     */
    public async fillUboNationalitySelectInput(national: string): Promise<void> {
        await this.uboNationalitySelectButton.waitFor({ state: 'visible' });
        await this.uboNationalitySelectButton.click();
        await this.uboNationalitySelectInput.fill(national);
        await this.SelectFirstOption.click();
    }

    /**
     * Fills the UBO identity number input field with the provided value.
     * @param identityNumber - The identity number to fill in the input field.
     * @returns A promise that resolves once the input field is filled.
     */
    public async fillUboIdentityNumberInput(identityNumber: string): Promise<void> {
        await this.uboIdentityNumberInput.waitFor({ state: 'visible' });
        await this.uboIdentityNumberInput.fill(identityNumber);
    }

    /**
     * Fills the UBO full address input field with the specified address.
     * @param address - The address to fill in the UBO full address input field.
     * @returns A promise that resolves once the address is filled.
     */
    public async fillUboFullAddressInput(address: string): Promise<void> {
        await this.uboFullAddressInput.waitFor({ state: 'visible' });
        await this.uboFullAddressInput.fill(address);
    }

    /**
     * Fills the UBO ownership percentage input field with the specified value.
     * @param ownershipPercentage - The ownership percentage to fill in the input field.
     * @returns A promise that resolves once the input field is filled.
     */
    public async fillUboOwnershipPercentageInput(ownershipPercentage: string): Promise<void> {
        await this.uboOwnershipPercentageInput.waitFor({ state: 'visible' });
        await this.uboOwnershipPercentageInput.fill(ownershipPercentage);
    }

    /**
     * Clicks the directors checkbox.
     * @returns A promise that resolves when the checkbox is clicked.
     */
    public async clickDirectorsCheckbox(): Promise<void> {
        await this.directorsCheckbox.waitFor({ state: 'visible' });
        await this.directorsCheckbox.click();
    }

    /**
     * Fills the directors nationality select input with the specified value.
     *
     * @param national - The nationality value to fill in the input.
     * @returns A promise that resolves once the input is filled.
     */
    public async fillDirectorsNationalitySelectInput(national: string): Promise<void> {
        await this.directorsNationalitySelectButton.waitFor({ state: 'visible' });
        await this.directorsNationalitySelectButton.click();
        await this.directorsNationalitySelectInput.fill(national);
        await this.page.keyboard.press('Enter');
    }

    /**
     * Fills the directors identity number input field with the specified value.
     * @param identityNumber - The identity number to fill in the input field.
     * @returns A promise that resolves once the input field is filled.
     */
    public async fillDirectorsIdentityNumberInput(identityNumber: string): Promise<void> {
        await this.directorsIdentityNumberInput.waitFor({ state: 'visible' });
        await this.directorsIdentityNumberInput.fill(identityNumber);
    }

    /**
     * Fills the directors full address input field with the specified address.
     * @param address - The address to fill in the input field.
     * @returns A promise that resolves once the address is filled.
     */
    public async fillDirectorsFullAddressInput(address: string): Promise<void> {
        await this.directorsFullAddressInput.waitFor({ state: 'visible' });
        await this.directorsFullAddressInput.fill(address);
    }

    /**
     * Uploads the director's ID photo file input.
     *
     * @param filePath - The path of the file to upload.
     * @returns A promise that resolves when the file is uploaded successfully.
     */
    public async uploadDirectorsIDPhotoFileInput(filePath): Promise<void> {
        await this.directorsIDPhotoFileInput.waitFor({ state: 'visible' });
        await this.directorsIDPhotoFileInput.setInputFiles(filePath);
    }

    /**
     * Uploads a file to the directorsSelfieIDPhotoFileInput element.
     * @param {string} filePath - The path of the file to upload.
     * @returns {Promise<void>} - A promise that resolves when the file is uploaded.
     */
    public async uploadDirectorsSelfieIDPhotoFileInput(filePath): Promise<void> {
        await this.directorsSelfieIDPhotoFileInput.waitFor({ state: 'visible' });
        await this.directorsSelfieIDPhotoFileInput.setInputFiles(filePath);
    }

    /**
     * Fills the contacts first name input field with the specified value.
     * @param firstName - The first name to be filled in the input field.
     * @returns A promise that resolves once the input field is filled.
     */
    public async fillContatcsFirstNameInput(firstName: string): Promise<void> {
        await this.contatcsFirstNameInput.waitFor({ state: 'visible' });
        await this.contatcsFirstNameInput.fill(firstName);
    }

    /**
     * Fills the contacts last name input field with the specified value.
     * @param lastName - The last name to be filled in the input field.
     * @returns A promise that resolves once the input field is filled.
     */
    public async fillContatcsLastNameInput(lastName: string): Promise<void> {
        await this.contatcsLastNameInput.waitFor({ state: 'visible' });
        await this.contatcsLastNameInput.fill(lastName);
    }

    /**
     * Fills the contacts email input field with the specified email.
     * @param email - The email to be filled in the contacts email input field.
     * @returns A promise that resolves once the email has been filled.
     */
    public async fillContatcsEmailInput(email: string): Promise<void> {
        await this.contatcsEmailInput.waitFor({ state: 'visible' });
        await this.contatcsEmailInput.fill(email);
    }

    /**
     * Fills the contacts phone input field with the specified phone number.
     * @param phone - The phone number to fill in the input field.
     * @returns A promise that resolves once the input field is filled.
     */
    public async fillContatcsPhoneInput(phone: string): Promise<void> {
        await this.contatcsPhoneInput.waitFor({ state: 'visible' });
        await this.contatcsPhoneInput.click();
        await this.contatcsPhoneInput.fill(phone);
    }
}
