export class SnapBi {
    static ACCESS_TOKEN: "/v1.0/access-token/b2b";
    static PAYMENT_HOST_TO_HOST: "/v1.0/debit/payment-host-to-host";
    static CREATE_VA: "/v1.0/transfer-va/create-va";
    static DEBIT_STATUS: "/v1.0/debit/status";
    static DEBIT_REFUND: "/v1.0/debit/refund";
    static DEBIT_CANCEL: "/v1.0/debit/cancel";
    static VA_STATUS: "/v1.0/transfer-va/status";
    static VA_CANCEL: "/v1.0/transfer-va/delete-va";
    static QRIS_PAYMENT: "/v1.0/qr/qr-mpm-generate";
    static QRIS_STATUS: string;
    static QRIS_REFUND: "/v1.0/qr/qr-mpm-refund";
    static QRIS_CANCEL: "/v1.0/qr/qr-mpm-cancel";
    static directDebit(): SnapBi;
    static va(): SnapBi;
    static qris(): SnapBi;
    static notification(): SnapBi;
    static getSymmetricSignatureHmacSh512(accessToken: any, requestBody: any, method: any, path: any, clientSecret: any, timeStamp: any): any;
    /**
     * @param {string} clientId
     * @param {string} xTimeStamp
     * @param {string} privateKey
     * @returns string
     * */
    static getAsymmetricSignatureSha256WithRsa(clientId: string, xTimeStamp: string, privateKey: string): any;
    /**
     * @typedef {'va' | 'qris' | 'directDebit' | ''} PaymentMethod
     * */
    /**
     * @param {PaymentMethod} paymentMethod
     * */
    constructor(paymentMethod: "" | "va" | "qris" | "directDebit");
    /** @type PaymentMethod */
    paymentMethod: "" | "va" | "qris" | "directDebit";
    /** @type string */
    apiPath: string;
    /** @type {AxiosHeaders} */
    accessTokenHeader: AxiosHeaders;
    transactionHeader: any[];
    /** @type Record<string, unknown> */
    body: Record<string, unknown>;
    /** @type string */
    accessToken: string;
    /** @type string */
    deviceId: string;
    /** @type string */
    debugId: string;
    /** @type string */
    timeStamp: string;
    /** @type number | null */
    timeout: number | null;
    /** @type string */
    signature: string;
    /** @type string */
    notificationUrlPath: string;
    /** @type Record<string, unknown> */
    notificationPayload: Record<string, unknown>;
    /** @param {AxiosHeaders} headers */
    withAccessTokenHeader(headers: AxiosHeaders): this;
    /** @param {AxiosHeaders} headers */
    withTransactionHeader(headers: AxiosHeaders): this;
    /** @param {string} accessToken */
    withAccessToken(accessToken: string): this;
    /** @param {Record<string, unknown>} body */
    withBody(body: Record<string, unknown>): this;
    withSignature(signature: any): this;
    /** @param {string} timeStamp */
    withTimeStamp(timeStamp: string): this;
    /** @param {Record<string, unknown>} notificationPayload */
    withNotificationPayload(notificationPayload: Record<string, unknown>): this;
    /**@param {string} notificationUrlPath */
    withNotificationUrlPath(notificationUrlPath: string): this;
    /** @param {string} privateKey */
    withPrivateKey(privateKey: string): this;
    /** @param {string} clientId */
    withClientId(clientId: string): this;
    /** @param {string} clientSecret */
    withClientSecret(clientSecret: string): this;
    /** @param {string} partnerId */
    withPartnerId(partnerId: string): this;
    /** @param {string} channelId */
    withChannelId(channelId: string): this;
    /** @param {string} deviceId */
    withDeviceId(deviceId: string): this;
    /** @param {string} debugId */
    withDebugId(debugId: string): this;
    withTimeout(timeout: any): this;
    /** @param {string} externalId */
    createPayment(externalId: string): Promise<object>;
    /** @param {string} externalId */
    cancel(externalId: string): Promise<object>;
    /** @param {string} externalId */
    refund(externalId: string): Promise<object>;
    /** @param {string} externalId */
    getStatus(externalId: string): Promise<object>;
    isWebhookNotificationVerified(): any;
    /** @returns {Promise<Record<string, unknown>>} */
    getAccessToken(): Promise<Record<string, unknown>>;
    /** @param {string | null} externalId */
    createConnection(externalId?: string | null): Promise<object>;
    /**
     * @param {string} externalId
     * @param {string} timeStamp
     * */
    buildSnapBiTransactionHeader(externalId: string, timeStamp: string): {
        'Content-Type': string;
        Accept: string;
        'X-PARTNER-ID': string | null;
        'X-EXTERNAL-ID': string;
        'X-DEVICE-ID': string;
        'CHANNEL-ID': string | null;
        'debug-id': string;
        Authorization: string;
        'X-TIMESTAMP': string;
        'X-SIGNATURE': any;
    };
    /**
     * @param {string} timeStamp */
    buildAccessTokenHeader(timeStamp: string): AxiosHeaders;
    /**
     * @param {PaymentMethod} paymentMethod
     * */
    setupCreatePaymentApiPath(paymentMethod: "" | "va" | "qris" | "directDebit"): "/v1.0/debit/payment-host-to-host" | "/v1.0/transfer-va/create-va" | "/v1.0/qr/qr-mpm-generate";
    /**
     * @param {PaymentMethod} paymentMethod
     * */
    setupRefundApiPath(paymentMethod: "" | "va" | "qris" | "directDebit"): "/v1.0/debit/refund" | "/v1.0/qr/qr-mpm-refund";
    /**
     * @param {PaymentMethod} paymentMethod
     * */
    setupCancelApiPath(paymentMethod: "" | "va" | "qris" | "directDebit"): "/v1.0/debit/cancel" | "/v1.0/transfer-va/delete-va" | "/v1.0/qr/qr-mpm-cancel";
    /**
     * @param {PaymentMethod} paymentMethod
     * */
    setupGetStatusApiPath(paymentMethod: "" | "va" | "qris" | "directDebit"): string;
}
//# sourceMappingURL=snapBi.d.ts.map