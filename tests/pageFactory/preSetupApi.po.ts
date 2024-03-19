import Method from '../source/requestMethods.js';
import { Base } from './base.po.js';
import { endPointAPI } from '../source/endpoint.js';
import { faker } from '@faker-js/faker';
export class preSetupApi extends Base {
    //get post request to endpoint
    public async externalWorkflowsRun() {
        const body = {
            workflowId: 'kyb_dynamic_ui_session_example',
            context: {
                entity: {
                    id: `my-user-${new Date().getTime()}`,
                    data: {
                        companyName: `${faker.company.name()}`,
                        additionalInfo: {
                            mainRepresentative: {
                                firstName: `${faker.person.firstName()}`,
                                lastName: `${faker.person.lastName()}`,
                                email: 'ballerine@mailsac.com'
                            }
                        }
                    },
                    type: 'business'
                },
                documents: []
            },
            config: {
                subscriptions: [
                    {
                        type: 'webhook',
                        url: 'https://webhook.site/41c33647-cff6-41d6-b538-9d5152ca9271',
                        events: ['workflow.completed']
                    }
                ]
            }
        };
        const response = await this.request(Method.post(endPointAPI.external.workflows.run, body));
        return response;
    }

    public async externalWorkflowsCreateCollectionFlowRun(workflowRuntimeId: string, endUserId: string) {
        const body = {
            workflowRuntimeDataId: workflowRuntimeId,
            endUserId: endUserId,
            expiry: 30
        };
        const response = await this.request(
            Method.post(endPointAPI.external.workflows.create_collection_flow_run, body)
        );
        return response;
    }
}
