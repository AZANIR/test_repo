export const endPointAPI = {
    internal: {
        auth: {
            login: '/api/v1/internal/auth/login'
        },
        workflows: {
            assign: '/api/v1/internal/workflows/assign/:workflowId',
            event: '/api/v1/internal/workflows/:workflowId/event'
        }
    },
    external: {
        workflows: {
            run: '/api/v1/external/workflows/run',
            create_collection_flow_run: '/api/v1/external/workflows/create-collection-flow-url'
        }
    },
    collectionFlow: {
        files: '/api/v1/collection-flow/files',
        sync: '/api/v1/collection-flow/sync?token=:token',
        send_event: '/api/v1/collection-flow/send-event?token=:token'
    }
};
