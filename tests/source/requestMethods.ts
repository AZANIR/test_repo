import { Base } from '../pageFactory/base.po';
import { config } from 'dotenv';
config();

class requestMethod extends Base {
    baseApiUrl = process.env.BASE_API_URL;
    clipsPayToken = process.env.CLIPS_PAY_TOKEN;
    //authString = `${process.env.USERNAME}:${process.env.PASSWORD}`;
    // encodedAuthString = Buffer.from(this.authString).toString('base64');

    // public async post(request: APIRequestContext, endPoint: string, payload: object = {}, requestHeaders = {}) {
    //     const _response = await request.post(`${this.baseApiUrl}${endPoint}`, {
    //         data: payload,
    //         headers: requestHeaders
    //     });
    //     const res = await _response.json();
    //     return res;
    // }

    // get(endPoint: string, queryParams: string = '', requestHeaders: object = {}): object {
    //     requestHeaders['Authorization'] = `Bearer ${this.clipsPayToken}`;
    //     return {
    //         method: 'get',
    //         maxBodyLength: Infinity,
    //         url: `${this.baseApiUrl}${endPoint}${queryParams}`,
    //         headers: requestHeaders
    //     };
    // }

    post(endPoint: string, payload: object = {}, requestHeaders = {}): object {
        requestHeaders['Authorization'] = `Bearer ${this.clipsPayToken}`;
        return {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${this.baseApiUrl}${endPoint}`,
            headers: requestHeaders,
            data: payload
        };
    }

    // put(endPoint: string, payload: object = {}): object {
    //     return {
    //         method: 'put',
    //         maxBodyLength: Infinity,
    //         url: `${this.baseApiUrl}${endPoint}`,
    //         headers: {
    //             'Content-Type': 'application/json',
    //             Authorization: `Bearer ${this.clipsPayToken}`
    //         },
    //         data: payload
    //     };
    // }

    // delete(endPoint: string): object {
    //     return {
    //         method: 'delete',
    //         maxBodyLength: Infinity,
    //         url: `${this.baseApiUrl}${endPoint}`,
    //         headers: {
    //             Authorization: `Bearer ${this.clipsPayToken}`
    //         }
    //     };
    // }
}

export default new requestMethod();
