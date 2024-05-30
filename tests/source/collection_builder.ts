import path from 'path';
import { Countries, CountryCodes } from '../enums/countries.enum';
import { preSetupApi } from '../pageFactory/preSetupApi.po';
import { faker } from '@faker-js/faker';

// export async function CollectionDataBuilder(

type DocumentPage = {
    type: string;
    fileName: string;
    ballerineFileId: string;
};

type Document = {
    id: string;
    type: string;
    pages: DocumentPage[];
    issuer: {
        country: 'ZZ';
    };
    version: string;
    category: string;
    decision: {};
    properties: {};
    issuingVersion: number;
    propertiesSchema: {};
};

type AdditionalInfo = {
    bank: {
        iban: string;
        bankCode: string;
        bankName: string;
        currency: string;
        subBranch: string;
        swiftCode: string;
        holderName: string;
        bankAddress: string;
        routeNumber: number;
        accountNumber: string;
        holderFullAddress: string;
    };
    ubos: any[];
    store: any;
    directors: any[];
    imDirector: boolean;
    mainContact: any;
    hasConfirmed: boolean;
    headquarters: any;
    imShareholder: boolean;
    mainRepresentative: any;
    registeredCapitalInUsd: number;
};

class CollectionDataBuilder {
    private data: any;

    constructor() {
        this.data = {
            data: {
                context: {
                    state: '',
                    entity: {
                        id: '',
                        data: {
                            country: '',
                            companyName: '',
                            businessType: '',
                            additionalInfo: {} as AdditionalInfo
                        },
                        type: '',
                        ballerineEntityId: ''
                    },
                    metadata: {},
                    documents: [] as Document[],
                    flowConfig: {},
                    customerName: '',
                    pluginsOutput: {},
                    workflowRuntimeId: ''
                },
                endUser: {},
                business: {},
                ballerineEntityId: ''
            }
        };
    }

    setState(state: string) {
        this.data.data.context.state = state;
        return this;
    }

    setEntityId(id: string) {
        this.data.data.context.entity.id = id;
        return this;
    }

    setCountry(country: string) {
        this.data.data.context.entity.data.country = country;
        return this;
    }

    setCompanyName(companyName: string) {
        this.data.data.context.entity.data.companyName = companyName;
        return this;
    }

    setBusinessType(businessType: string) {
        this.data.data.context.entity.data.businessType = businessType;
        return this;
    }

    setAdditionalInfo(additionalInfo: AdditionalInfo) {
        this.data.data.context.entity.data.additionalInfo = additionalInfo;
        return this;
    }

    setEntityType(type: string) {
        this.data.data.context.entity.type = type;
        return this;
    }

    setBallerineEntityId(ballerineEntityId: string) {
        this.data.data.context.entity.ballerineEntityId = ballerineEntityId;
        return this;
    }

    addDocument(document: Document) {
        this.data.data.context.documents.push(document);
        return this;
    }

    build() {
        return this.data;
    }
}

// Usage
const builder = new CollectionDataBuilder();
const jsonOutput = builder
    .setState('directors_and_ubos')
    .setEntityId('my-user-1712418712937')
    .setCountry('KZ')
    .setCompanyName('Hegmann - Collier')
    .setBusinessType('Non-Profit Organization')
    .setEntityType('business')
    .setBallerineEntityId('cluo9vzln0001u91n8n4h8eqz')
    .addDocument({
        id: 'document-certificates-of-incorporation',
        type: 'certificate_of_incorporation',
        pages: [
            {
                type: 'image/jpeg',
                fileName: 'cer_verif.jpg',
                ballerineFileId: 'cluo9wqm2002gr21ns9xdh43b'
            }
        ],
        issuer: { country: 'ZZ' },
        version: '1',
        category: 'proof_of_registration',
        decision: {},
        properties: {},
        issuingVersion: 1,
        propertiesSchema: {}
    })
    .build();

console.log(JSON.stringify(jsonOutput, null, 2));
