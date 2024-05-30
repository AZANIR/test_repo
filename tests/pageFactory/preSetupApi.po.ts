import Method from '../source/requestMethods.js';
import { Base } from './base.po.js';
import { endPointAPI } from '../source/endpoint.js';
import { faker } from '@faker-js/faker';
import * as fs from 'fs';
import FormData from 'form-data';
import { CollectionDataBuilder } from '../source/colection.js';
import { step } from '../source/step';

export class preSetupApi extends Base {
    //get post request to endpoint

    /**
     * Runs an external workflow.
     * @returns {Promise<any>} The response from the API call.
     */
    @step()
    public async externalWorkflowsRun() {
        const body = {
            workflowId: process.env.WORKFLOW_DEFINITION_ID,
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

    /**
     * Creates a collection flow run for external workflows.
     * @param workflowRuntimeId The ID of the workflow runtime data.
     * @param endUserId The ID of the end user.
     * @returns A promise that resolves with the response from the API.
     */
    @step()
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

    /**
     * Authenticates the user by logging into the back office.
     * 
     * @param login - The email address of the user.
     * @param password - The password of the user.
     * @returns A Promise that resolves to the response from the login API.
     */
    @step()
    public async authLoginToBackOffice(login: string, password: string) {
        const response = await this.request(
            Method.post(endPointAPI.internal.auth.login, { email: login, password: password })
        );
        return response;
    }

    /**
     * Assigns a workflow to a user.
     * 
     * @param userId The ID of the user to assign the workflow to.
     * @param workflowId The ID of the workflow to assign.
     * @returns A promise that resolves to the response from the API.
     */
    @step()
    public async assignWorkflow(userId: string, workflowId: string) {
        const formattedEndpoint = await this.formatEndpoint(endPointAPI.internal.workflows.assign, [
            { workflowId: workflowId }
        ]);
        const response = await this.request(Method.patch(formattedEndpoint, { assigneeId: userId }));
        return response;
    }

    /**
     * Rejects a workflow.
     * @param workflowId The ID of the workflow to reject.
     * @returns A Promise that resolves with the response from the server.
     */
    @step()
    public async rejectWorkflow(workflowId: string) {
        const formattedEndpoint = await this.formatEndpoint(endPointAPI.internal.workflows.event, [
            { workflowId: workflowId }
        ]);
        const response = await this.request(Method.post(formattedEndpoint, { name: 'reject' }));
        return response;
    }

    /**
     * Uploads a collection flow document.
     * 
     * @param filename - The name of the file to be uploaded.
     * @param filePath - The path to the file to be uploaded.
     * @param collectionToken - The token for authorization.
     * @returns A promise that resolves to the response from the upload request.
     */
    @step()
    public async uploadCollectionFlowDocument(filename: string, filePath: string, collectionToken: string) {
        const formData = new FormData();
        formData.append('name', filename);
        formData.append('file', fs.createReadStream(filePath));
        const response = await this.request(
            Method.postUpload(endPointAPI.collectionFlow.files, formData, {
                Authorization: `Bearer ${collectionToken}`
            })
        );
        return response;
    }

    /**
     * Creates a collection flow.
     *
     * @param ballerineEntityId - The ID of the ballerine entity.
     * @param collectionToken - The token for the collection.
     * @returns A promise that resolves with the response from the API.
     */
    @step()
    public async createCollectionFlow(ballerineEntityId: string, collectionToken: string) {
        const body = await CollectionDataBuilder(ballerineEntityId, collectionToken);
        const formattedEndpoint = await this.formatEndpoint(endPointAPI.collectionFlow.sync, [
            { token: collectionToken }
        ]);
        const response = await this.request(
            Method.put(formattedEndpoint, body, {
                Authorization: `Bearer ${collectionToken}`
            })
        );
        return response;
    }

    /**
     * Sends a collection flow event.
     * @param collectionToken - The collection token.
     * @returns The response from the API.
     */
    @step()
    public async sendCollectionFlowEvent(collectionToken: string) {
        const formattedEndpoint = await this.formatEndpoint(endPointAPI.collectionFlow.send_event, [
            { token: collectionToken }
        ]);
        const response = await this.request(
            Method.postWithoutToken(
                formattedEndpoint,
                { eventName: 'COLLECTION_FLOW_FINISHED' },
                {
                    Authorization: `Bearer ${collectionToken}`
                }
            )
        );
        return response;
    }
}
