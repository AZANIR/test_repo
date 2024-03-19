export const schema = {
    external: {
        workflows: {
            run: {
                type: 'object',
                properties: {
                    workflowDefinitionId: {
                        type: 'string'
                    },
                    workflowRuntimeId: {
                        type: 'string'
                    },
                    ballerineEntityId: {
                        type: 'string'
                    },
                    entities: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                type: {
                                    type: 'string'
                                },
                                id: {
                                    type: 'string'
                                }
                            },
                            required: ['type', 'id']
                        }
                    }
                },
                required: ['workflowDefinitionId', 'workflowRuntimeId', 'ballerineEntityId', 'entities']
            },
            create_collection_flow_run: {
                type: 'object',
                properties: {
                    token: {
                        type: 'string'
                    },
                    collectionFlowUrl: {
                        type: 'string'
                    }
                },
                required: ['token', 'collectionFlowUrl']
            }
        }
    }
};
