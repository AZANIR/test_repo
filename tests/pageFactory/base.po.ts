import axios from 'axios';
import { step } from '../source/step';

export class Base {
    /**
     * Sends an HTTP request and measures the response time.
     * @param request - The request object containing the HTTP request details.
     * @returns An object containing the response data and the response time in milliseconds.
     */
    @step()
    async request(request: object) {
        const startTime: number = new Date().getTime();
        const response = await axios(request);
        const endTime: number = new Date().getTime();
        return {
            data: response,
            responseTime: endTime - startTime
        };
    }

    /**
     * Formats the endpoint by replacing the placeholder values with the provided parameters.
     * @param {string} endpoint - The endpoint string with placeholder values.
     * @param {object[]} params - An array of objects containing the parameter values.
     * @returns {string} - The formatted endpoint string.
     * @throws {Error} - If a parameter is not found in the endpoint.
     */
    @step()
    async formatEndpoint(endpoint, params = [{}]) {
        let formattedEndpoint = endpoint;
        if (params.length > 0) {
            for (const param of params) {
                for (const key in param) {
                    if (Object.prototype.hasOwnProperty.call(param, key)) {
                        formattedEndpoint = formattedEndpoint.replace(`:${key}`, param[key]);
                    }
                    else {
                        throw new Error(`Parameter ${key} not found in endpoint ${endpoint}`);
                    }
                }
            }
        }
        return formattedEndpoint;
    }
}
