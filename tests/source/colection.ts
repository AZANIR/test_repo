import path from 'path';
import { Countries, CountryCodes } from '../enums/countries.enum';
import { preSetupApi } from '../pageFactory/preSetupApi.po';
import { faker } from '@faker-js/faker';

export async function CollectionDataBuilder(
    ballerineEntityId: string,
    token: string,
    customerCompany: string = process.env.CUSTOMER_COMPANY,
    email: string = 'ballerine@mailsac.com'
) {
    const firstName = `${faker.person.firstName()}`;
    const lastName = `${faker.person.lastName()}`;
    const companyName = `${faker.company.name()}`;
    const dateOfBirth = '1991-01-09T21:00:00.000Z';
    const country = Object.keys(Countries)[Math.floor(Math.random() * Object.keys(Countries).length)];
    const countryCode = CountryCodes[country];
    const fileName = 'Selfie_ID.jpg';
    const preSetupApiPage = new preSetupApi();
    const dataResponse = await preSetupApiPage.uploadCollectionFlowDocument(
        fileName,
        path.resolve(__dirname, `upload/${fileName}`),
        token
    );
    const ballerineFileId = dataResponse.data.data.id;
    if (customerCompany == 'Clipspay') {
        return {
            data: {
                context: {
                    entity: {
                        id: 'my-user-1712418712937',
                        data: {
                            companyName: companyName,
                            additionalInfo: {
                                mainRepresentative: {
                                    email: email,
                                    lastName: lastName,
                                    firstName: firstName,
                                    additionalInfo: {
                                        jobTitle: 'Principal Usability Strategist'
                                    },
                                    dateOfBirth: dateOfBirth,
                                    phone: '50082716538'
                                },
                                registeredCapitalInUsd: 249932,
                                headquarters: {
                                    physical: {},
                                    isDifferentFromPhysical: false,
                                    street: '801 Russell Street',
                                    streetNumber: 12,
                                    city: 'St. George',
                                    country: countryCode
                                },
                                imShareholder: true,
                                ubos: [
                                    {
                                        additionalInfo: {
                                            __isGeneratedAutomatically: true,
                                            companyName: companyName,
                                            customerCompany: customerCompany,
                                            nationality: 'CG',
                                            fullAddress: '298 Clarendon Road Apt. 387',
                                            percentageOfOwnership: 61
                                        },
                                        email: email,
                                        lastName: 'Zboncak',
                                        firstName: 'Ansley',
                                        nationalId: '9290711687821'
                                    }
                                ],
                                imDirector: true,
                                directors: [
                                    {
                                        additionalInfo: {
                                            __isGeneratedAutomatically: true,
                                            companyName: companyName,
                                            customerCompany: customerCompany,
                                            nationality: 'CG',
                                            fullAddress: '1831 Clark Street Apt. 624',
                                            documents: [
                                                {
                                                    id: 'directors:passport-selfie-[index:0]',
                                                    type: 'selfie',
                                                    issuer: {
                                                        country: 'ZZ'
                                                    },
                                                    version: '1',
                                                    category: 'proof_of_identity_ownership',
                                                    properties: {},
                                                    issuingVersion: 1,
                                                    propertiesSchema: {
                                                        type: 'object',
                                                        properties: {
                                                            documentNumber: {
                                                                type: 'string'
                                                            },
                                                            firstName: {
                                                                type: 'string'
                                                            },
                                                            lastName: {
                                                                type: 'string'
                                                            }
                                                        }
                                                    },
                                                    pages: [
                                                        {
                                                            ballerineFileId: ballerineFileId,
                                                            fileName: fileName,
                                                            type: 'image/jpeg'
                                                        }
                                                    ],
                                                    decision: {}
                                                },
                                                {
                                                    id: 'directors:passport-document-[index:0]',
                                                    type: 'passport',
                                                    issuer: {
                                                        country: 'ZZ'
                                                    },
                                                    version: '1',
                                                    category: 'proof_of_identity',
                                                    properties: {},
                                                    issuingVersion: 1,
                                                    propertiesSchema: {
                                                        type: 'object',
                                                        properties: {
                                                            documentNumber: {
                                                                type: 'string'
                                                            },
                                                            firstName: {
                                                                type: 'string'
                                                            },
                                                            lastName: {
                                                                type: 'string'
                                                            }
                                                        }
                                                    },
                                                    pages: [
                                                        {
                                                            ballerineFileId: ballerineFileId,
                                                            fileName: fileName,
                                                            type: 'image/jpeg'
                                                        }
                                                    ],
                                                    decision: {}
                                                }
                                            ]
                                        },
                                        email: email,
                                        lastName: 'Zboncak',
                                        firstName: 'Ansley',
                                        nationalId: '0045681329507'
                                    }
                                ],
                                mainContact: {
                                    firstName: 'Raina',
                                    lastName: 'Flatley',
                                    email: 'Dayna.Hilpert27@gmail.com',
                                    phone: '3464833812'
                                },
                                bank: {
                                    holderName: 'Dr. Bryant Brekke',
                                    holderFullAddress: '3472 Grady Crossing Apt. 518',
                                    accountNumber: '2532934361018',
                                    iban: 'RS39002358746501087384',
                                    swiftCode: 'BLHZHMCWXXX',
                                    routeNumber: 269009295,
                                    bankName: 'Jast Group',
                                    bankCode: '8469',
                                    bankAddress: '98684 W 3rd Street Apt. 411',
                                    subBranch: '7753',
                                    currency: 'ZMW'
                                },
                                store: {
                                    hasMobileApp: false,
                                    websiteUrls: 'https://different-cape.org',
                                    dba: 'token',
                                    industry: 'Outsourcing and Offshoring',
                                    products:
                                        'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
                                    established: '2021-03-08T22:00:00.000Z',
                                    website: {
                                        mainWebsite: 'https://milky-pan.name/',
                                        contactDetails: '91396 Sycamore Drive Suite 631',
                                        returnPolicyUrl: 'https://disgusting-bongo.com',
                                        shippingPolicyUrl: 'https://twin-identity.net/',
                                        aboutUsUrl: 'https://reckless-infection.org/',
                                        termsOfUseUrl: 'https://parched-forager.com',
                                        privacyPolicyUrl: 'https://misty-boy.org/',
                                        productQuantity: 33,
                                        productDescription:
                                            'Defluo deludo coerceo.\nCedo truculenter antiquus absconditus teneo conventus villa subito thermae.',
                                        productPrice: 39.91,
                                        websiteLanguage: 'interlingua (international auxiliary language association)'
                                    },
                                    processingDetails: {
                                        isSpikeInSales: false,
                                        monthlySalesVolume: 61460,
                                        monthlyTransactions: 27,
                                        estimatedMonthlySales: 26779,
                                        estimatedMonthlyTransactions: 97,
                                        averageTicketAmount: 542.87,
                                        minimumTicketAmount: 92.82,
                                        maximumTicketAmount: 303.66,
                                        volumeInRegion: '87.46',
                                        mainCategory: ['B2C'],
                                        businessModel: ['Membership', 'Direct Purchase']
                                    }
                                },
                                hasConfirmed: true
                            },
                            registrationNumber: '3360492520669',
                            country: countryCode,
                            taxIdentificationNumber: '4001308760125',
                            numberOfEmployees: 31,
                            businessType: 'Non-Profit Organization'
                        },
                        type: 'business',
                        ballerineEntityId: ballerineEntityId
                    },
                    metadata: {
                        token: token,
                        customerName: customerCompany,
                        collectionFlowUrl: 'https://collection-dev.eu.ballerine.io',
                        customerNormalizedName: customerCompany.toLowerCase()
                    },
                    documents: [
                        {
                            id: 'document-certificates-of-incorporation',
                            type: 'certificate_of_incorporation',
                            issuer: {
                                country: 'ZZ'
                            },
                            version: '1',
                            category: 'proof_of_registration',
                            properties: {},
                            issuingVersion: 1,
                            propertiesSchema: {
                                type: 'object',
                                properties: {
                                    businessName: {
                                        type: 'string'
                                    },
                                    registrationNumber: {
                                        pattern: '^[a-zA-Z0-9]*$',
                                        type: 'string'
                                    },
                                    issueDate: {
                                        format: 'date',
                                        formatMaximum: '2024-04-06',
                                        type: 'string'
                                    }
                                }
                            },
                            pages: [
                                {
                                    ballerineFileId: ballerineFileId,
                                    fileName: fileName,
                                    type: 'image/jpeg'
                                }
                            ],
                            decision: {}
                        },
                        {
                            id: 'document-business-registration-certificate',
                            type: 'business_registration_certificate',
                            issuer: {
                                country: 'ZZ'
                            },
                            version: '1',
                            category: 'proof_of_registration',
                            properties: {},
                            issuingVersion: 1,
                            propertiesSchema: {
                                type: 'object',
                                properties: {
                                    businessName: {
                                        type: 'string'
                                    },
                                    registrationNumber: {
                                        pattern: '^[a-zA-Z0-9]*$',
                                        type: 'string'
                                    },
                                    issueDate: {
                                        format: 'date',
                                        formatMaximum: '2024-04-06',
                                        type: 'string'
                                    }
                                }
                            },
                            pages: [
                                {
                                    ballerineFileId: ballerineFileId,
                                    fileName: fileName,
                                    type: 'image/jpeg'
                                }
                            ],
                            decision: {}
                        },
                        {
                            id: 'document-corporate-tax-certificate',
                            type: 'corporate_tax_certificate',
                            issuer: {
                                country: 'ZZ'
                            },
                            version: '1',
                            category: 'financial_information',
                            properties: {},
                            issuingVersion: 1,
                            propertiesSchema: {
                                type: 'object',
                                properties: {
                                    businessName: {
                                        type: 'string'
                                    },
                                    taxIdNumber: {
                                        type: 'string'
                                    },
                                    issueDate: {
                                        format: 'date',
                                        formatMaximum: '2024-04-06',
                                        type: 'string'
                                    }
                                }
                            },
                            pages: [
                                {
                                    ballerineFileId: ballerineFileId,
                                    fileName: fileName,
                                    type: 'image/jpeg'
                                }
                            ],
                            decision: {}
                        },
                        {
                            id: 'document-certificate-of-good-standing',
                            type: 'certificate_of_good_standing',
                            issuer: {
                                country: 'ZZ'
                            },
                            version: '1',
                            category: 'proof_of_good_standing',
                            properties: {},
                            issuingVersion: 1,
                            propertiesSchema: {
                                type: 'object',
                                properties: {
                                    businessName: {
                                        type: 'string'
                                    },
                                    issueDate: {
                                        format: 'date',
                                        formatMaximum: '2024-04-06',
                                        type: 'string'
                                    }
                                }
                            },
                            pages: [
                                {
                                    ballerineFileId: ballerineFileId,
                                    fileName: fileName,
                                    type: 'image/jpeg'
                                }
                            ],
                            decision: {}
                        },
                        {
                            id: 'document-certificate-of-directors-and-shareholders',
                            type: 'certificate_of_directors_and_shareholders',
                            issuer: {
                                country: 'ZZ'
                            },
                            version: '1',
                            category: 'proof_of_ownership',
                            properties: {},
                            issuingVersion: 1,
                            propertiesSchema: {
                                type: 'object',
                                properties: {
                                    businessName: {
                                        type: 'string'
                                    },
                                    directors: {
                                        type: 'string'
                                    },
                                    shareholders: {
                                        type: 'string'
                                    },
                                    issueDate: {
                                        format: 'date',
                                        formatMaximum: '2024-04-06',
                                        type: 'string'
                                    }
                                }
                            },
                            pages: [
                                {
                                    ballerineFileId: ballerineFileId,
                                    fileName: fileName,
                                    type: 'image/jpeg'
                                }
                            ],
                            decision: {}
                        },
                        {
                            id: 'document-picture-of-company-seal',
                            type: 'company_seal',
                            issuer: {
                                country: 'ZZ'
                            },
                            version: '1',
                            category: 'proof_of_identity',
                            properties: {},
                            issuingVersion: 1,
                            propertiesSchema: {
                                type: 'object',
                                properties: {
                                    businessName: {
                                        type: 'string'
                                    }
                                }
                            },
                            pages: [
                                {
                                    ballerineFileId: ballerineFileId,
                                    fileName: fileName,
                                    type: 'image/jpeg'
                                }
                            ],
                            decision: {}
                        },
                        {
                            id: 'document-proof-of-bank-account',
                            type: 'proof_of_bank_account_ownership',
                            issuer: {
                                country: 'ZZ'
                            },
                            version: '1',
                            category: 'financial_information',
                            properties: {},
                            issuingVersion: 1,
                            pages: [
                                {
                                    ballerineFileId: ballerineFileId,
                                    fileName: fileName,
                                    type: 'image/jpeg'
                                }
                            ],
                            decision: {}
                        },
                        {
                            id: 'document-other-supplementary-information',
                            type: 'supplementary_document',
                            issuer: {
                                country: 'ZZ'
                            },
                            version: '1',
                            category: 'general_documents',
                            properties: {},
                            issuingVersion: 1,
                            propertiesSchema: {},
                            pages: [
                                {
                                    ballerineFileId: ballerineFileId,
                                    fileName: fileName,
                                    type: 'image/jpeg'
                                }
                            ],
                            decision: {}
                        },
                        {
                            id: 'document-website-pictures-domain-certificate',
                            type: 'domain_purchase_record',
                            issuer: {
                                country: 'ZZ'
                            },
                            version: '1',
                            category: 'proof_of_domain_ownership',
                            properties: {},
                            issuingVersion: 1,
                            propertiesSchema: {
                                type: 'object',
                                properties: {
                                    domainName: {
                                        type: 'string'
                                    },
                                    ownerName: {
                                        type: 'string'
                                    },
                                    purchaseDate: {
                                        format: 'date',
                                        formatMaximum: '2024-04-06',
                                        type: 'string'
                                    },
                                    expiryDate: {
                                        format: 'date',
                                        type: 'string'
                                    }
                                }
                            },
                            pages: [
                                {
                                    ballerineFileId: ballerineFileId,
                                    fileName: fileName,
                                    type: 'image/jpeg'
                                }
                            ],
                            decision: {}
                        },
                        {
                            id: 'document-office-front-door-pictures-1',
                            type: 'front_door_photo',
                            issuer: {
                                country: 'ZZ'
                            },
                            version: '1',
                            category: 'proof_of_location',
                            properties: {},
                            issuingVersion: 1,
                            propertiesSchema: {
                                type: 'object',
                                properties: {
                                    businessName: {
                                        type: 'string'
                                    }
                                }
                            },
                            pages: [
                                {
                                    ballerineFileId: ballerineFileId,
                                    fileName: fileName,
                                    type: 'image/jpeg'
                                }
                            ],
                            decision: {}
                        },
                        {
                            id: 'document-office-interior-pictures-2',
                            type: 'interior_office_photo',
                            issuer: {
                                country: 'ZZ'
                            },
                            version: '1',
                            category: 'proof_of_location',
                            properties: {},
                            issuingVersion: 1,
                            propertiesSchema: {
                                type: 'object',
                                properties: {
                                    businessName: {
                                        type: 'string'
                                    }
                                }
                            },
                            pages: [
                                {
                                    ballerineFileId: ballerineFileId,
                                    fileName: fileName,
                                    type: 'image/jpeg'
                                }
                            ],
                            decision: {}
                        },
                        {
                            id: 'document-transaction-data-last-months',
                            type: 'transaction_data_last_3_6_months',
                            issuer: {
                                country: 'ZZ'
                            },
                            version: '1',
                            category: 'financial_information',
                            properties: {},
                            issuingVersion: 1,
                            propertiesSchema: {
                                type: 'object',
                                properties: {
                                    businessName: {
                                        type: 'string'
                                    },
                                    from: {
                                        format: 'date',
                                        type: 'string'
                                    },
                                    to: {
                                        format: 'date',
                                        type: 'string'
                                    },
                                    totalTransactions: {
                                        type: 'number'
                                    }
                                }
                            },
                            pages: [
                                {
                                    ballerineFileId: ballerineFileId,
                                    fileName: fileName,
                                    type: 'image/jpg'
                                }
                            ],
                            decision: {}
                        },
                        {
                            id: 'document-office-interior-pictures-3',
                            type: 'interior_office_photo',
                            issuer: {
                                country: 'ZZ'
                            },
                            version: '1',
                            category: 'proof_of_location',
                            properties: {},
                            issuingVersion: 1,
                            propertiesSchema: {
                                type: 'object',
                                properties: {
                                    businessName: {
                                        type: 'string'
                                    }
                                }
                            },
                            pages: [
                                {
                                    ballerineFileId: ballerineFileId,
                                    fileName: fileName,
                                    type: 'image/jpeg'
                                }
                            ],
                            decision: {}
                        }
                    ],
                    flowConfig: {
                        stepsProgress: {
                            store_info: {
                                number: 7,
                                isCompleted: true
                            },
                            contacts_page: {
                                number: 5,
                                isCompleted: true
                            },
                            banking_details: {
                                number: 6,
                                isCompleted: true
                            },
                            personal_details: {
                                number: 1,
                                isCompleted: true
                            },
                            company_documents: {
                                number: 10,
                                isCompleted: false
                            },
                            directors_and_ubos: {
                                number: 4,
                                isCompleted: true
                            },
                            processing_details: {
                                number: 9,
                                isCompleted: true
                            },
                            business_information: {
                                number: 2,
                                isCompleted: true
                            },
                            website_basic_requirement: {
                                number: 8,
                                isCompleted: true
                            },
                            business_address_information: {
                                number: 3,
                                isCompleted: true
                            }
                        },
                        appState: 'finish',
                        apiUrl: 'https://api-dev.eu.ballerine.io',
                        tokenId: token,
                        customerCompany: customerCompany
                    },
                    customerName: customerCompany,
                    pluginsOutput: {
                        collection_invite_email: {},
                        fetch_company_information: {
                            error: 'Request Failed: Internal Server Error Error: {"errorCode":"InternalServerError","message":"Request failed with status code 404"}'
                        }
                    },
                    state: 'personal_details',
                    workflowRuntimeId: '1'
                },
                endUser: {
                    email: email,
                    lastName: 'Zboncak',
                    firstName: 'Ansley',
                    additionalInfo: {
                        jobTitle: 'Principal Usability Strategist'
                    },
                    dateOfBirth: dateOfBirth,
                    phone: '50082716538'
                },
                business: {
                    companyName: companyName,
                    additionalInfo: {
                        mainRepresentative: {
                            email: email,
                            lastName: 'Zboncak',
                            firstName: 'Ansley',
                            additionalInfo: {
                                jobTitle: 'Principal Usability Strategist'
                            },
                            dateOfBirth: dateOfBirth,
                            phone: '50082716538'
                        },
                        registeredCapitalInUsd: 249932,
                        headquarters: {
                            physical: {},
                            isDifferentFromPhysical: false,
                            street: '801 Russell Street',
                            streetNumber: 12,
                            city: 'St. George',
                            country: 'UG'
                        },
                        imShareholder: true,
                        ubos: [
                            {
                                additionalInfo: {
                                    __isGeneratedAutomatically: true,
                                    companyName: companyName,
                                    customerCompany: customerCompany,
                                    nationality: 'CG',
                                    fullAddress: '298 Clarendon Road Apt. 387',
                                    percentageOfOwnership: 61
                                },
                                email: email,
                                lastName: 'Zboncak',
                                firstName: 'Ansley',
                                nationalId: '9290711687821'
                            }
                        ],
                        imDirector: true,
                        directors: [
                            {
                                additionalInfo: {
                                    __isGeneratedAutomatically: true,
                                    companyName: companyName,
                                    customerCompany: customerCompany,
                                    nationality: 'CG',
                                    fullAddress: '1831 Clark Street Apt. 624',
                                    documents: [
                                        {
                                            id: 'directors:passport-selfie-[index:0]',
                                            type: 'selfie',
                                            issuer: {
                                                country: 'ZZ'
                                            },
                                            version: '1',
                                            category: 'proof_of_identity_ownership',
                                            properties: {},
                                            issuingVersion: 1,
                                            propertiesSchema: {
                                                type: 'object',
                                                properties: {
                                                    documentNumber: {
                                                        type: 'string'
                                                    },
                                                    firstName: {
                                                        type: 'string'
                                                    },
                                                    lastName: {
                                                        type: 'string'
                                                    }
                                                }
                                            },
                                            pages: [
                                                {
                                                    ballerineFileId: 'cluo9whu6000eu91nhi3t62rh',
                                                    fileName: 'Selfie_ID.jpg',
                                                    type: 'image/jpeg'
                                                }
                                            ],
                                            decision: {}
                                        },
                                        {
                                            id: 'directors:passport-document-[index:0]',
                                            type: 'passport',
                                            issuer: {
                                                country: 'ZZ'
                                            },
                                            version: '1',
                                            category: 'proof_of_identity',
                                            properties: {},
                                            issuingVersion: 1,
                                            propertiesSchema: {
                                                type: 'object',
                                                properties: {
                                                    documentNumber: {
                                                        type: 'string'
                                                    },
                                                    firstName: {
                                                        type: 'string'
                                                    },
                                                    lastName: {
                                                        type: 'string'
                                                    }
                                                }
                                            },
                                            pages: [
                                                {
                                                    ballerineFileId: 'cluo9whyd001ux21o1vivhfqk',
                                                    fileName: 'ID.jpg',
                                                    type: 'image/jpeg'
                                                }
                                            ],
                                            decision: {}
                                        }
                                    ]
                                },
                                email: email,
                                lastName: 'Zboncak',
                                firstName: 'Ansley',
                                nationalId: '0045681329507'
                            }
                        ],
                        mainContact: {
                            firstName: 'Raina',
                            lastName: 'Flatley',
                            email: 'Dayna.Hilpert27@gmail.com',
                            phone: '3464833812'
                        },
                        bank: {
                            holderName: 'Dr. Bryant Brekke',
                            holderFullAddress: '3472 Grady Crossing Apt. 518',
                            accountNumber: '2532934361018',
                            iban: 'RS39002358746501087384',
                            swiftCode: 'BLHZHMCWXXX',
                            routeNumber: 269009295,
                            bankName: 'Jast Group',
                            bankCode: '8469',
                            bankAddress: '98684 W 3rd Street Apt. 411',
                            subBranch: '7753',
                            currency: 'ZMW'
                        },
                        store: {
                            hasMobileApp: false,
                            websiteUrls: 'https://different-cape.org',
                            dba: 'token',
                            industry: 'Outsourcing and Offshoring',
                            products:
                                'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
                            established: '2021-03-08T22:00:00.000Z',
                            website: {
                                mainWebsite: 'https://milky-pan.name/',
                                contactDetails: '91396 Sycamore Drive Suite 631',
                                returnPolicyUrl: 'https://disgusting-bongo.com',
                                shippingPolicyUrl: 'https://twin-identity.net/',
                                aboutUsUrl: 'https://reckless-infection.org/',
                                termsOfUseUrl: 'https://parched-forager.com',
                                privacyPolicyUrl: 'https://misty-boy.org/',
                                productQuantity: 33,
                                productDescription:
                                    'Defluo deludo coerceo.\nCedo truculenter antiquus absconditus teneo conventus villa subito thermae.',
                                productPrice: 39.91,
                                websiteLanguage: 'interlingua (international auxiliary language association)'
                            },
                            processingDetails: {
                                isSpikeInSales: false,
                                monthlySalesVolume: 61460,
                                monthlyTransactions: 27,
                                estimatedMonthlySales: 26779,
                                estimatedMonthlyTransactions: 97,
                                averageTicketAmount: 542.87,
                                minimumTicketAmount: 92.82,
                                maximumTicketAmount: 303.66,
                                volumeInRegion: '87.46',
                                mainCategory: ['B2C'],
                                businessModel: ['Membership', 'Direct Purchase']
                            }
                        },
                        hasConfirmed: true
                    },
                    registrationNumber: '3360492520669',
                    country: countryCode,
                    taxIdentificationNumber: '4001308760125',
                    numberOfEmployees: 31,
                    businessType: 'Non-Profit Organization'
                },
                ballerineEntityId: ballerineEntityId
            }
        };
    } else if (customerCompany == 'OxPay') {
        return {
            data: {
                context: {
                    state: 'personal_details',
                    entity: {
                        id: 'my-user-1713351929',
                        data: {
                            companyName: companyName,
                            additionalInfo: {
                                mainRepresentative: {
                                    email: email,
                                    phone: '12345678909',
                                    lastName: lastName,
                                    firstName: firstName,
                                    dateOfBirth: dateOfBirth,
                                    additionalInfo: {
                                        jobTitle: 'CEO'
                                    }
                                },
                                registeredCapitalInUsd: 12341234,
                                headquarters: {
                                    physical: {},
                                    isDifferentFromPhysical: false,
                                    street: 'TestStreet',
                                    streetNumber: 10,
                                    city: 'Rivne',
                                    country: countryCode
                                },
                                thereNoCompaniesWithMoreThan25: true,
                                imShareholder: true,
                                ubos: [
                                    {
                                        additionalInfo: {
                                            __isGeneratedAutomatically: true,
                                            companyName: companyName,
                                            customerCompany: customerCompany,
                                            nationality: countryCode,
                                            fullAddress: 'test street',
                                            percentageOfOwnership: 25
                                        },
                                        email: email,
                                        lastName: lastName,
                                        firstName: firstName,
                                        nationalId: '1111111111111111hjk'
                                    }
                                ],
                                imDirector: true,
                                directors: [
                                    {
                                        additionalInfo: {
                                            __isGeneratedAutomatically: true,
                                            companyName: companyName,
                                            customerCompany: customerCompany,
                                            nationality: 'AD',
                                            fullAddress: '23452345234,234523452356v3vhh'
                                        },
                                        email: email,
                                        lastName: lastName,
                                        firstName: firstName,
                                        nationalId: '234523452345'
                                    }
                                ],
                                mainContact: {
                                    firstName: 'Leonid',
                                    lastName: 'Mayevskyi',
                                    email: 'test@mail.com',
                                    phone: '12345678909'
                                },
                                bank: {
                                    companyAccountHolderName: '2346345dsfhdfghdfg',
                                    holderFullAddress: 'dfghdfghgfh dyjfyjtyuj',
                                    accountNumber: '2234523452',
                                    iban: '111111111111111111111',
                                    swiftCode: 'DLKJIHKLJGL',
                                    routeNumber: 123456789,
                                    bankName: 'testBank',
                                    bankCode: '1234',
                                    bankAddress: 'test adddreesss',
                                    subBranch: '1234',
                                    currency: 'USD'
                                },
                                store: {
                                    hasMobileApp: false,
                                    websiteUrls: 'https://testsite.com',
                                    dba: 'descriptions',
                                    industry: 'Airlines and Aviation',
                                    products: 'some product',
                                    established: '1991-05-07T21:00:00.000Z',
                                    website: {
                                        mainWebsite: 'https://testsite.com',
                                        contactDetails: 'wdfghsdghdfgh',
                                        returnPolicyUrl: 'https://testsite.com',
                                        shippingPolicyUrl: 'https://testsite.com',
                                        aboutUsUrl: 'https://testsite.com',
                                        termsOfUseUrl: 'https://testsite.com',
                                        privacyPolicyUrl: 'https://testsite.com',
                                        productQuantity: 7,
                                        productDescription: 'sdfghsdfghs dsdf ghsdfg sdfgsdfg',
                                        productPrice: 100,
                                        websiteLanguage: 'english'
                                    },
                                    processingDetails: {
                                        isSpikeInSales: false,
                                        monthlySalesVolume: 1000000,
                                        monthlyTransactions: 500,
                                        estimatedMonthlySales: 40000,
                                        estimatedMonthlyTransactions: 158,
                                        averageTicketAmount: 25,
                                        minimumTicketAmount: 300,
                                        maximumTicketAmount: 1999,
                                        volumeInRegion: '70,30',
                                        mainCategory: ['B2B', 'B2C'],
                                        businessModel: ['Membership', 'Direct Purchase']
                                    }
                                },
                                hasConfirmed: true
                            },
                            registrationNumber: '1111111111111111111',
                            country: 'AR',
                            taxIdentificationNumber: '1234123412341',
                            numberOfEmployees: 10,
                            businessType: 'Limited Partnership (LP)'
                        },
                        type: 'business',
                        ballerineEntityId: ballerineEntityId
                    },
                    metadata: {
                        token: token,
                        customerName: 'OxPay',
                        collectionFlowUrl: 'https://collection-dev.eu.ballerine.io',
                        customerNormalizedName: 'oxpay'
                    },
                    documents: [
                        {
                            id: 'document-certificate-of-incorporation',
                            type: 'certificate_of_incorporation',
                            issuer: {
                                country: 'ZZ'
                            },
                            version: '1',
                            category: 'proof_of_registration',
                            properties: {},
                            issuingVersion: 1,
                            propertiesSchema: {
                                type: 'object',
                                properties: {
                                    businessName: {
                                        type: 'string'
                                    },
                                    registrationNumber: {
                                        pattern: '^[a-zA-Z0-9]*$',
                                        type: 'string'
                                    },
                                    issueDate: {
                                        format: 'date',
                                        formatMaximum: '2024-04-18',
                                        type: 'string'
                                    }
                                }
                            },
                            pages: [
                                {
                                    ballerineFileId: ballerineFileId,
                                    fileName: fileName,
                                    type: 'image/jpeg'
                                }
                            ],
                            decision: {}
                        },
                        {
                            id: 'document-business-registration-certificate',
                            type: 'business_registration_certificate',
                            issuer: {
                                country: 'ZZ'
                            },
                            version: '1',
                            category: 'proof_of_registration',
                            properties: {},
                            issuingVersion: 1,
                            propertiesSchema: {
                                type: 'object',
                                properties: {
                                    businessName: {
                                        type: 'string'
                                    },
                                    registrationNumber: {
                                        pattern: '^[a-zA-Z0-9]*$',
                                        type: 'string'
                                    },
                                    issueDate: {
                                        format: 'date',
                                        formatMaximum: '2024-04-18',
                                        type: 'string'
                                    }
                                }
                            },
                            pages: [
                                {
                                    ballerineFileId: ballerineFileId,
                                    fileName: fileName,
                                    type: 'image/jpeg'
                                }
                            ],
                            decision: {}
                        },
                        {
                            id: 'document-proof-of-address',
                            type: 'general_document',
                            issuer: {
                                country: 'ZZ'
                            },
                            version: '1',
                            category: 'proof_of_address',
                            properties: {},
                            issuingVersion: 1,
                            propertiesSchema: {},
                            pages: [
                                {
                                    ballerineFileId: ballerineFileId,
                                    fileName: fileName,
                                    type: 'image/jpeg'
                                }
                            ],
                            decision: {}
                        },
                        {
                            id: 'document-copy-of-business-license',
                            type: 'business_license',
                            issuer: {
                                country: 'ZZ'
                            },
                            version: '1',
                            category: 'proof_of_registration',
                            properties: {},
                            issuingVersion: 1,
                            pages: [
                                {
                                    ballerineFileId: ballerineFileId,
                                    fileName: fileName,
                                    type: 'image/jpeg'
                                }
                            ],
                            decision: {}
                        },
                        {
                            id: 'document-memorandum-of-article',
                            type: 'memorandum_of_article',
                            issuer: {
                                country: 'ZZ'
                            },
                            version: '1',
                            category: 'proof_of_registration',
                            properties: {},
                            issuingVersion: 1,
                            pages: [
                                {
                                    ballerineFileId: ballerineFileId,
                                    fileName: fileName,
                                    type: 'image/jpeg'
                                }
                            ],
                            decision: {}
                        },
                        {
                            id: 'document-business-ownership-structure-chart',
                            type: 'ownership_structure_chart',
                            issuer: {
                                country: 'ZZ'
                            },
                            version: '1',
                            category: 'proof_of_ownership',
                            properties: {},
                            issuingVersion: 1,
                            pages: [
                                {
                                    ballerineFileId: ballerineFileId,
                                    fileName: fileName,
                                    type: 'image/jpeg'
                                }
                            ],
                            decision: {}
                        },
                        {
                            id: 'document-tenancy-agreement',
                            type: 'tenancy_agreement',
                            issuer: {
                                country: 'ZZ'
                            },
                            version: '1',
                            category: 'proof_of_location',
                            properties: {},
                            issuingVersion: 1,
                            pages: [
                                {
                                    ballerineFileId: ballerineFileId,
                                    fileName: fileName,
                                    type: 'image/jpeg'
                                }
                            ],
                            decision: {}
                        },
                        {
                            id: 'document-tax-return',
                            type: 'tax_return',
                            issuer: {
                                country: 'ZZ'
                            },
                            version: '1',
                            category: 'financial_information',
                            properties: {},
                            issuingVersion: 1,
                            pages: [
                                {
                                    ballerineFileId: ballerineFileId,
                                    fileName: fileName,
                                    type: 'image/jpeg'
                                }
                            ],
                            decision: {}
                        },
                        {
                            id: 'document-settlement-bank-account-statement',
                            type: 'bank_statement',
                            issuer: {
                                country: 'ZZ'
                            },
                            version: '1',
                            category: 'proof_of_bank_account_ownership',
                            properties: {},
                            issuingVersion: 1,
                            pages: [
                                {
                                    ballerineFileId: ballerineFileId,
                                    fileName: fileName,
                                    type: 'image/jpeg'
                                }
                            ],
                            decision: {}
                        },
                        {
                            id: 'document-financial-statements',
                            type: 'general_document',
                            issuer: {
                                country: 'ZZ'
                            },
                            version: '1',
                            category: 'financial_information',
                            properties: {},
                            issuingVersion: 1,
                            pages: [
                                {
                                    ballerineFileId: ballerineFileId,
                                    fileName: fileName,
                                    type: 'application/pdf'
                                }
                            ],
                            decision: {}
                        },
                        {
                            id: 'document-latest-3-months-processing-statements',
                            type: 'card_processing_statements',
                            issuer: {
                                country: 'ZZ'
                            },
                            version: '1',
                            category: 'financial_information',
                            properties: {},
                            issuingVersion: 1,
                            pages: [
                                {
                                    ballerineFileId: ballerineFileId,
                                    fileName: fileName,
                                    type: 'application/pdf'
                                }
                            ],
                            decision: {}
                        },
                        {
                            id: 'document-transaction-information',
                            type: 'transaction_records',
                            issuer: {
                                country: 'ZZ'
                            },
                            version: '1',
                            category: 'financial_information',
                            properties: {},
                            issuingVersion: 1,
                            pages: [
                                {
                                    ballerineFileId: ballerineFileId,
                                    fileName: fileName,
                                    type: 'image/jpeg'
                                }
                            ],
                            decision: {}
                        },
                        {
                            id: 'document-psi-dss-documents',
                            type: 'pci_dss_certification',
                            issuer: {
                                country: 'ZZ'
                            },
                            version: '1',
                            category: 'compliance_documents',
                            properties: {},
                            issuingVersion: 1,
                            pages: [
                                {
                                    ballerineFileId: ballerineFileId,
                                    fileName: fileName,
                                    type: 'image/jpeg'
                                }
                            ],
                            decision: {}
                        },
                        {
                            id: 'document-mailing-acknowledgement-or-form-sample',
                            type: 'mailing_or_acknowledgement_sample',
                            issuer: {
                                country: 'ZZ'
                            },
                            version: '1',
                            category: 'general_documents',
                            properties: {},
                            issuingVersion: 1,
                            pages: [
                                {
                                    ballerineFileId: ballerineFileId,
                                    fileName: fileName,
                                    type: 'image/jpeg'
                                }
                            ],
                            decision: {}
                        }
                    ],
                    flowConfig: {
                        apiUrl: 'https://api-dev.eu.ballerine.io',
                        tokenId: token,
                        appState: 'finish',
                        stepsProgress: {
                            store_info: {
                                number: 7,
                                isCompleted: true
                            },
                            contacts_page: {
                                number: 5,
                                isCompleted: true
                            },
                            banking_details: {
                                number: 6,
                                isCompleted: true
                            },
                            personal_details: {
                                number: 1,
                                isCompleted: true
                            },
                            company_documents: {
                                number: 10,
                                isCompleted: false
                            },
                            company_ownership: {
                                number: 4,
                                isCompleted: true
                            },
                            processing_details: {
                                number: 9,
                                isCompleted: true
                            },
                            business_information: {
                                number: 2,
                                isCompleted: true
                            },
                            website_basic_requirement: {
                                number: 8,
                                isCompleted: true
                            },
                            business_address_information: {
                                number: 3,
                                isCompleted: true
                            }
                        },
                        customerCompany: customerCompany
                    },
                    customerName: customerCompany,
                    pluginsOutput: {
                        collection_invite_email: {},
                        fetch_company_information: {
                            error: 'Request Failed: Internal Server Error Error: {"errorCode":"InternalServerError","message":"Request failed with status code 404"}'
                        }
                    },
                    workflowRuntimeId: '1'
                },
                endUser: {
                    email: email,
                    phone: '12345678909',
                    lastName: lastName,
                    firstName: firstName,
                    dateOfBirth: dateOfBirth,
                    additionalInfo: {
                        jobTitle: 'CEO'
                    }
                },
                business: {
                    companyName: companyName,
                    additionalInfo: {
                        mainRepresentative: {
                            email: email,
                            phone: '12345678909',
                            lastName: lastName,
                            firstName: firstName,
                            dateOfBirth: dateOfBirth,
                            additionalInfo: {
                                jobTitle: 'CEO'
                            }
                        },
                        registeredCapitalInUsd: 12341234,
                        headquarters: {
                            physical: {},
                            isDifferentFromPhysical: false,
                            street: 'TestStreet',
                            streetNumber: 10,
                            city: 'Rivne',
                            country: countryCode
                        },
                        thereNoCompaniesWithMoreThan25: true,
                        imShareholder: true,
                        ubos: [
                            {
                                additionalInfo: {
                                    __isGeneratedAutomatically: true,
                                    companyName: companyName,
                                    customerCompany: customerCompany,
                                    nationality: countryCode,
                                    fullAddress: 'test street',
                                    percentageOfOwnership: 25
                                },
                                email: email,
                                lastName: lastName,
                                firstName: firstName,
                                nationalId: '1111111111111111hjk'
                            }
                        ],
                        imDirector: true,
                        directors: [
                            {
                                additionalInfo: {
                                    __isGeneratedAutomatically: true,
                                    companyName: companyName,
                                    customerCompany: customerCompany,
                                    nationality: 'AD',
                                    fullAddress: '23452345234,234523452356v3vhh'
                                },
                                email: email,
                                lastName: lastName,
                                firstName: firstName,
                                nationalId: '234523452345'
                            }
                        ],
                        mainContact: {
                            firstName: 'Leonid',
                            lastName: 'Mayevskyi',
                            email: 'test@mail.com',
                            phone: '12345678909'
                        },
                        bank: {
                            companyAccountHolderName: '2346345dsfhdfghdfg',
                            holderFullAddress: 'dfghdfghgfh dyjfyjtyuj',
                            accountNumber: '2234523452',
                            iban: '111111111111111111111',
                            swiftCode: 'DLKJIHKLJGL',
                            routeNumber: 123456789,
                            bankName: 'testBank',
                            bankCode: '1234',
                            bankAddress: 'test adddreesss',
                            subBranch: '1234',
                            currency: 'USD'
                        },
                        store: {
                            hasMobileApp: false,
                            websiteUrls: 'https://testsite.com',
                            dba: 'descriptions',
                            industry: 'Airlines and Aviation',
                            products: 'some product',
                            established: '1991-05-07T21:00:00.000Z',
                            website: {
                                mainWebsite: 'https://testsite.com',
                                contactDetails: 'wdfghsdghdfgh',
                                returnPolicyUrl: 'https://testsite.com',
                                shippingPolicyUrl: 'https://testsite.com',
                                aboutUsUrl: 'https://testsite.com',
                                termsOfUseUrl: 'https://testsite.com',
                                privacyPolicyUrl: 'https://testsite.com',
                                productQuantity: 7,
                                productDescription: 'sdfghsdfghs dsdf ghsdfg sdfgsdfg',
                                productPrice: 100,
                                websiteLanguage: 'english'
                            },
                            processingDetails: {
                                isSpikeInSales: false,
                                monthlySalesVolume: 1000000,
                                monthlyTransactions: 500,
                                estimatedMonthlySales: 40000,
                                estimatedMonthlyTransactions: 158,
                                averageTicketAmount: 25,
                                minimumTicketAmount: 300,
                                maximumTicketAmount: 1999,
                                volumeInRegion: '70,30',
                                mainCategory: ['B2B', 'B2C'],
                                businessModel: ['Membership', 'Direct Purchase']
                            }
                        },
                        hasConfirmed: true
                    },
                    registrationNumber: '1111111111111111111',
                    country: 'AR',
                    taxIdentificationNumber: '1234123412341',
                    numberOfEmployees: 10,
                    businessType: 'Limited Partnership (LP)'
                },
                ballerineEntityId: ballerineEntityId
            }
        };
    } else {
        return {
            data: {
                context: {
                    entity: {
                        id: `my-user-${new Date().getTime()}`,
                        data: {
                            companyName: companyName,
                            additionalInfo: {
                                mainRepresentative: {
                                    email: email,
                                    lastName: lastName,
                                    firstName: firstName,
                                    additionalInfo: { jobTitle: 'Principal Usability Strategist' },
                                    dateOfBirth: dateOfBirth,
                                    phone: '50082716538'
                                },
                                registeredCapitalInUsd: 249932,
                                headquarters: {
                                    physical: {},
                                    isDifferentFromPhysical: false,
                                    street: '801 Russell Street',
                                    streetNumber: 12,
                                    city: 'St. George',
                                    country: countryCode
                                },
                                imShareholder: true,
                                ubos: [
                                    {
                                        additionalInfo: {
                                            __isGeneratedAutomatically: true,
                                            companyName: companyName,
                                            customerCompany: 'Clipspay',
                                            nationality: countryCode,
                                            fullAddress: '298 Clarendon Road Apt. 387',
                                            percentageOfOwnership: 61
                                        },
                                        email: email,
                                        lastName: lastName,
                                        firstName: firstName,
                                        nationalId: '9290711687821'
                                    }
                                ],
                                imDirector: true,
                                directors: [
                                    {
                                        additionalInfo: {
                                            __isGeneratedAutomatically: true,
                                            companyName: companyName,
                                            customerCompany: 'Clipspay',
                                            nationality: countryCode,
                                            fullAddress: '1831 Clark Street Apt. 624',
                                            documents: [
                                                {
                                                    id: 'directors:passport-selfie-[index:0]',
                                                    type: 'selfie',
                                                    issuer: { country: countryCode },
                                                    version: '1',
                                                    category: 'proof_of_identity_ownership',
                                                    properties: {},
                                                    issuingVersion: 1,
                                                    propertiesSchema: {
                                                        type: 'object',
                                                        properties: {
                                                            documentNumber: { type: 'string' },
                                                            firstName: { type: 'string' },
                                                            lastName: { type: 'string' }
                                                        }
                                                    },
                                                    pages: [
                                                        {
                                                            ballerineFileId: ballerineFileId,
                                                            fileName: 'Selfie_ID.jpg',
                                                            type: 'image/jpeg'
                                                        }
                                                    ],
                                                    decision: {}
                                                }
                                            ]
                                        },
                                        email: email,
                                        lastName: lastName,
                                        firstName: firstName,
                                        nationalId: '0045681329507'
                                    }
                                ],
                                mainContact: {}
                            },
                            registrationNumber: '3360492520669',
                            country: countryCode,
                            taxIdentificationNumber: '4001308760125',
                            numberOfEmployees: 31,
                            businessType: 'Non-Profit Organization'
                        },
                        type: 'business',
                        ballerineEntityId: ballerineEntityId
                    },
                    metadata: {
                        token: token,
                        customerName: 'Clipspay',
                        collectionFlowUrl: 'https://collection-dev.eu.ballerine.io',
                        customerNormalizedName: 'clipspay'
                    },
                    documents: [],
                    flowConfig: {
                        stepsProgress: {
                            store_info: { number: 7, isCompleted: true },
                            contacts_page: { number: 5, isCompleted: true },
                            banking_details: { number: 6, isCompleted: true },
                            personal_details: { number: 1, isCompleted: true },
                            company_documents: { number: 10, isCompleted: false },
                            directors_and_ubos: { number: 4, isCompleted: true },
                            processing_details: { number: 9, isCompleted: true },
                            business_information: { number: 2, isCompleted: true },
                            website_basic_requirement: { number: 8, isCompleted: true },
                            business_address_information: { number: 3, isCompleted: true }
                        },
                        appState: 'contacts_page',
                        apiUrl: 'https://api-dev.eu.ballerine.io',
                        tokenId: token,
                        customerCompany: 'Clipspay'
                    },
                    customerName: 'Clipspay',
                    pluginsOutput: {
                        collection_invite_email: {},
                        fetch_company_information: {
                            error: 'Request Failed: Internal Server Error Error: {"errorCode":"InternalServerError","message":"Request failed with status code 404"}'
                        }
                    },
                    state: 'personal_details',
                    workflowRuntimeId: '1'
                },
                endUser: {
                    email: email,
                    lastName: lastName,
                    firstName: firstName,
                    additionalInfo: { jobTitle: 'Principal Usability Strategist' },
                    dateOfBirth: dateOfBirth,
                    phone: '50082716538'
                },
                business: {
                    companyName: companyName,
                    additionalInfo: {
                        mainRepresentative: {
                            email: email,
                            lastName: lastName,
                            firstName: firstName,
                            additionalInfo: { jobTitle: 'Principal Usability Strategist' },
                            dateOfBirth: dateOfBirth,
                            phone: '50082716538'
                        },
                        registeredCapitalInUsd: 249932,
                        headquarters: {
                            physical: {},
                            isDifferentFromPhysical: false,
                            street: '801 Russell Street',
                            streetNumber: 12,
                            city: 'St. George',
                            country: countryCode
                        },
                        imShareholder: true,
                        ubos: [
                            {
                                additionalInfo: {
                                    __isGeneratedAutomatically: true,
                                    companyName: companyName,
                                    customerCompany: 'Clipspay',
                                    nationality: countryCode,
                                    fullAddress: '298 Clarendon Road Apt. 387',
                                    percentageOfOwnership: 61
                                },
                                email: email,
                                lastName: lastName,
                                firstName: firstName,
                                nationalId: '9290711687821'
                            }
                        ],
                        imDirector: true,
                        directors: [
                            {
                                additionalInfo: {
                                    __isGeneratedAutomatically: true,
                                    companyName: companyName,
                                    customerCompany: 'Clipspay',
                                    nationality: countryCode,
                                    fullAddress: '1831 Clark Street Apt. 624',
                                    documents: [
                                        {
                                            id: 'directors:passport-selfie-[index:0]',
                                            type: 'selfie',
                                            issuer: { country: countryCode },
                                            version: '1',
                                            category: 'proof_of_identity_ownership',
                                            properties: {},
                                            issuingVersion: 1,
                                            propertiesSchema: {
                                                type: 'object',
                                                properties: {
                                                    documentNumber: { type: 'string' },
                                                    firstName: { type: 'string' },
                                                    lastName: { type: 'string' }
                                                }
                                            },
                                            pages: [
                                                {
                                                    ballerineFileId: ballerineFileId,
                                                    fileName: 'Selfie_ID.jpg',
                                                    type: 'image/jpeg'
                                                }
                                            ],
                                            decision: {}
                                        }
                                    ]
                                },
                                email: email,
                                lastName: lastName,
                                firstName: firstName,
                                nationalId: '0045681329507'
                            }
                        ],
                        mainContact: {}
                    },
                    registrationNumber: '3360492520669',
                    country: countryCode,
                    taxIdentificationNumber: '4001308760125',
                    numberOfEmployees: 31,
                    businessType: 'Non-Profit Organization'
                },
                ballerineEntityId: ballerineEntityId
            }
        };
    }
}
