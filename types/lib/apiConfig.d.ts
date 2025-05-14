/**
 *  Config Object that used to store isProduction, serverKey, clientKey.
 *  And also API base urls.
 */
export class ApiConfig {
    static CORE_SANDBOX_BASE_URL: "https://api.sandbox.midtrans.com";
    static CORE_PRODUCTION_BASE_URL: "https://api.midtrans.com";
    static SNAP_SANDBOX_BASE_URL: "https://app.sandbox.midtrans.com/snap/v1";
    static SNAP_PRODUCTION_BASE_URL: "https://app.midtrans.com/snap/v1";
    /** Iris API url */
    static IRIS_SANDBOX_BASE_URL: "https://app.sandbox.midtrans.com/iris/api/v1";
    static IRIS_PRODUCTION_BASE_URL: "https://app.midtrans.com/iris/api/v1";
    /**
     * @typedef {Object} APIConfigOpts
     * @property {boolean} [isProduction=false]
     * @property {string} [serverKey='']
     * @property {string} [clientKey='']
     * */
    /**
     * Initiate with options
     *
     * @param {APIConfigOpts} [options]
     * @constructor
     */
    constructor(options?: {
        isProduction?: boolean | undefined;
        serverKey?: string | undefined;
        clientKey?: string | undefined;
    });
    /**
     * @type boolean
     * */
    isProduction: boolean;
    /**
     * @type string
     * */
    serverKey: string;
    /**
     * @type string
     * */
    clientKey: string;
    /**
     * Return stored API config
     * @return {APIConfigOpts} api config props
     */
    get(): {
        isProduction?: boolean | undefined;
        serverKey?: string | undefined;
        clientKey?: string | undefined;
    };
    /**
     * Set new API config
     * @param {APIConfigOpts} options
     */
    set(options: {
        isProduction?: boolean | undefined;
        serverKey?: string | undefined;
        clientKey?: string | undefined;
    }): void;
    /**
     * @return {String} core api base url
     */
    getCoreApiBaseUrl(): string;
    /**
     * @return {String} snap api base url
     */
    getSnapApiBaseUrl(): string;
    /**
     * @return {String} Iris api base url
     */
    getIrisApiBaseUrl(): string;
}
//# sourceMappingURL=apiConfig.d.ts.map