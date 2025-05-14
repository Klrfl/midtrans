/**
 * Wrapper of Axios to do API request to Midtrans API
 */
export class HttpClient {
    /**
     * @constructor
     * */
    constructor(parentObj?: {});
    parent: {};
    /**
     * Axios instance to do HTTP requests.
     * @type {import('axios').AxiosInstance}
     * */
    http_client: import("axios").AxiosInstance;
    /**
     * @param {string} httpMethod
     * @param {string} serverKey
     * @param {string} requestUrl
     * @param {unkown} [firstParam]
     * @param {unkown} [secondParam]
     * @returns Promise<Record<string, unknown>>
     * */
    request(httpMethod: string, serverKey: string, requestUrl: string, firstParam?: unkown, secondParam?: unkown): Promise<any>;
}
//# sourceMappingURL=httpClient.d.ts.map