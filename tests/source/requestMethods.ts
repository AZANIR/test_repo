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

    get(
        endPoint: string,
        queryParams: string = '',
        requestHeaders: object = {},
        baseUrl: string = this.baseApiUrl
    ): object {
        requestHeaders['Authorization'] = `Bearer ${this.clipsPayToken}`;
        return {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${baseUrl}${endPoint}${queryParams}`,
            headers: requestHeaders
        };
    }

    post(endPoint: string, payload: object = {}, requestHeaders = {}, baseUrl: string = this.baseApiUrl): object {
        requestHeaders['Authorization'] = `Bearer ${this.clipsPayToken}`;
        return {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${baseUrl}${endPoint}`,
            headers: requestHeaders,
            data: payload
        };
    }

    postWithoutToken(
        endPoint: string,
        payload: object = {},
        requestHeaders = {},
        baseUrl: string = this.baseApiUrl
    ): object {
        return {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${baseUrl}${endPoint}`,
            headers: requestHeaders,
            data: payload
        };
    }

    put(endPoint: string, payload: object = {}, requestHeaders = {}, baseUrl: string = this.baseApiUrl): object {
        requestHeaders['Content-Type'] = 'application/json';
        return {
            method: 'put',
            maxBodyLength: Infinity,
            url: `${baseUrl}${endPoint}`,
            headers: requestHeaders,
            data: payload
        };
    }
    patch(endPoint: string, payload: object = {}, requestHeaders = {}, baseUrl: string = this.baseApiUrl): object {
        requestHeaders['Authorization'] = `Bearer ${this.clipsPayToken}`;
        return {
            method: 'patch',
            maxBodyLength: Infinity,
            url: `${baseUrl}${endPoint}`,
            headers: requestHeaders,
            data: payload
        };
    }
    postUpload(endPoint: string, payload: any, requestHeaders = {}, baseUrl: string = this.baseApiUrl): object {
        requestHeaders['Content-Type'] = 'multipart/form-data';
        return {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${baseUrl}${endPoint}`,
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
