import * as axios from 'axios';

/**
 *  Config Object that used to store isProduction, serverKey, clientKey.
 *  And also API base urls.
 */
declare class ApiConfig {
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

/**
 * Wrapper of Axios to do API request to Midtrans API
 */
declare class HttpClient {
    /**
     * @constructor
     * */
    constructor(parentObj?: {});
    parent: {};
    /**
     * Axios instance to do HTTP requests.
     * @type {import('axios').AxiosInstance}
     * */
    http_client: axios.AxiosInstance;
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

/**
 * These are wrapper/implementation of API methods described on:
 * https://api-docs.midtrans.com/#midtrans-api
 * @return {Promise} - Promise that contains JSON API response decoded as Object
 */
declare class Transaction {
    /**
     * @param {Object} parentObj
     * @constructor
     * */
    constructor(parentObj?: Object);
    parent: Object;
    /**
     * @param {string} [transactionId] - transaction id
     * */
    status(transactionId?: string): any;
    /**
     * @param {string} [transactionId] - transaction id
     * */
    statusb2b(transactionId?: string): any;
    /**
     * @param {string} [transactionId] - transaction id
     * */
    approve(transactionId?: string): any;
    /**
     * @param {string} [transactionId] - transaction id
     * */
    deny(transactionId?: string): any;
    /**
     * @param {string} [transactionId] - transaction id
     * */
    cancel(transactionId?: string): any;
    /**
     * @param {string} [transactionId] - transaction id
     * */
    expire(transactionId?: string): any;
    /**
     * @param {string} [transactionId] - transaction id
     * @param {Object} parameter
     * */
    refund(transactionId?: string, parameter?: Object): any;
    /**
     * @param {string} [transactionId] - transaction id
     * @param {Object} parameter
     * */
    refundDirect(transactionId?: string, parameter?: Object): any;
    /**
     * @param {Object | string} notificationObj
     * */
    notification(notificationObj?: Object | string): Promise<any>;
}

/**
 * @typedef {Object} ItemDetail
 * @property {string} [id]
 * @property {string} name
 * @property {number} price
 * @property {number} quantity
 * @property {string} [brand]
 * @property {string} [category]
 * @property {string} [merchant_name]
 * @property {string} [url]
 * */
/**
 * @typedef {Object} Address
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {string} [email]
 * @property {string} [phone]
 * @property {string} [address]
 * @property {string} [city]
 * @property {string} [postal_code]
 * @property {string} [country_code]
 * */
/**
 * @typedef {Object} CustomerDetail
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {string} [email]
 * @property {string} [phone]
 * @property {Address} [billing_address]
 * @property {Address} [shipping_address]
 * */
/**
   * @typedef {("credit_card" | "cimb_clicks"| "bca_klikbca" | "bca_klikpay"
    | "bri_epay" | "echannel" | "permata_va" | "bca_va"| "bni_va" | "bri_va"
    | "cimb_va" | "other_va"| "gopay" | "indomaret" | "danamon_online"
    | "akulaku" | "shopeepay" | "kredivo" | "uob_ezpay" | "other_qris"
    | "alfamart" | "indomaret" | "cstore"
    )} EnabledPayment
   * */
/**
 * @typedef {Object} VirtualAccount
 * @property {string} [va_number]
 * */
/**
 * @typedef {Object} BCAVirtualAccount
 * @extends VirtualAccount
 *
 * @property {string} [sub_company_code]
 * @property {FreeText} [free_text]
 * */
/**
 * @typedef {Object} FreeText
 * @property {FreeTextItem[]} inquiry
 * @property {FreeTextItem[]} payment
 * */
/**
 * @typedef {Object} FreeTextItem
 * @property {string} en
 * @property {string} id
 * */
/**
 * @typedef {Object} PermataVirtualAccount
 * @extends VirtualAccount
 *
 * @property {string} [recipient_name]
 * */
/**
 * @typedef {Object} ShopeePay
 * @property {string} [callback_url]
 * */
/**
 * @typedef {Object} GoPay
 * @property {boolean} [enable_callback = false]
 * @property {string} [callback_url]
 * @property {boolean} [tokenization = false]
 * @property {string} [phone_number=null]
 * @property {string} [country_code=null]
 * */
/**
 * @typedef {Object} Callbacks
 * @property {string} [finish]
 * @property {string} [error ]
 * */
/**
 * @typedef {"day" | "hour" | "minute" | "days" | "hours" | "minutes"} ExpiryUnit
 * */
/**
 * @typedef {Object} Expiry
 * @property {string} [start_time]
 * @property {number} duration
 * @property {ExpiryUnit} unit
 * */
/**
 * @typedef {Object} PageExpiry
 *  @property {number} duration
 *  @property {ExpiryUnit} unit
 * */
/**
 * @typedef {Object} Recurring
 * @property {boolean} required
 * @property {string} [start_time]
 * @property {string} [interval_unit]
 * */
/**
 * @typedef {Object} CreditCard
 * @property {boolean} secure
 * @property {string} bank
 * @property {string} channel
 * @property {string} type
 * @property {string[]} whitelist_bins
 * @property {Object} [installment]
 * @property {boolean} [installment.required]
 * @property {Record<string, number[]>} [installment.terms]
 * @property {Object} [dynamic_descriptor]
 * @property {string} [dynamic_descriptor.merchant_name]
 * @property {string} [dynamic_descriptor.city_name]
 * @property {string} [dynamic_descriptor.country_code]
 * */
/**
 * @typedef {Object} TransactionBody
 * @property {Object} transaction_details
 * @property {string} transaction_details.order_id
 * @property {number} transaction_details.gross_amount
 * @property {Array<ItemDetail>} [item_details]
 * @property {CustomerDetail} [costumer_details]
 * @property {Array<EnabledPayment>} [enabled_payments]
 * @property {CreditCard} [credit_card]
 * @property {BCAVirtualAccount} [bca_va]
 * @property {PermataVirtualAccount} [permata_va]
 * @property {VirtualAccount} [bni_va]
 * @property {VirtualAccount} [bri_va]
 * @property {VirtualAccount} [cimb_va]
 * @property {ShopeePay} [shopeepay]
 * @property {GoPay} [gopay]
 * @property {Callbacks} [callbacks]
 * @property {Expiry} [expiry]
 * @property {PageExpiry} [page_expiry]
 * @property {Recurring} [recurring]
 * */
/**
 * @typedef {Object} SnapResponse
 *
 * @property {string} token
 * @property {string} redirect_url
 * */
/**
 * @typedef {Object} SnapRequestError
 *
 * @property {string[]} error_messages
 * */
/**
 * Snap object used to do request to Midtrans Snap API
 */
declare class Snap {
    /**
     * @typedef {Object} SnapOpts
     * @property {boolean} [isProduction=false]
     * @property {string} [serverKey='']
     * @property {string} [clientKey='']
     * */
    /**
     * @param {SnapOpts} options
     * @constructor
     * */
    constructor(options?: {
        isProduction?: boolean | undefined;
        serverKey?: string | undefined;
        clientKey?: string | undefined;
    });
    apiConfig: ApiConfig;
    httpClient: HttpClient;
    transaction: Transaction;
    /**
     * Do `/transactions` API request to Snap API
     *
     * @param {TransactionBody} [parameter = {}] - object of Core API JSON body as
     * parameter, will be converted to JSON (more params detail refer to: https://snap-docs.midtrans.com)
     *
     * @return {Promise<SnapResponse> | Promise<SnapRequestError>} - Promise contains Object from JSON decoded response
     */
    createTransaction(parameter?: TransactionBody): Promise<SnapResponse> | Promise<SnapRequestError>;
    /**
     * Wrapper function that call `createTransaction` then:
     *
     * @param {TransactionBody} [parameter = {}]
     * @return {Promise} - Promise of String token
     */
    createTransactionToken(parameter?: TransactionBody): Promise<any>;
    /**
     * Wrapper function that call `createTransaction` then:
     *
     * @param {TransactionBody} [parameter = {}]
     * @return {Promise} - Promise of String redirect_url
     */
    createTransactionRedirectUrl(parameter?: TransactionBody): Promise<any>;
}
type ItemDetail = {
    id?: string | undefined;
    name: string;
    price: number;
    quantity: number;
    brand?: string | undefined;
    category?: string | undefined;
    merchant_name?: string | undefined;
    url?: string | undefined;
};
type Address = {
    first_name?: string | undefined;
    last_name?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
    address?: string | undefined;
    city?: string | undefined;
    postal_code?: string | undefined;
    country_code?: string | undefined;
};
type CustomerDetail = {
    first_name?: string | undefined;
    last_name?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
    billing_address?: Address | undefined;
    shipping_address?: Address | undefined;
};
type EnabledPayment = ("credit_card" | "cimb_clicks" | "bca_klikbca" | "bca_klikpay" | "bri_epay" | "echannel" | "permata_va" | "bca_va" | "bni_va" | "bri_va" | "cimb_va" | "other_va" | "gopay" | "indomaret" | "danamon_online" | "akulaku" | "shopeepay" | "kredivo" | "uob_ezpay" | "other_qris" | "alfamart" | "indomaret" | "cstore");
type VirtualAccount = {
    va_number?: string | undefined;
};
type ShopeePay = {
    callback_url?: string | undefined;
};
type GoPay = {
    enable_callback?: boolean | undefined;
    callback_url?: string | undefined;
    tokenization?: boolean | undefined;
    phone_number?: string | undefined;
    country_code?: string | undefined;
};
type Callbacks = {
    finish?: string | undefined;
    error?: string | undefined;
};
type ExpiryUnit = "day" | "hour" | "minute" | "days" | "hours" | "minutes";
type Expiry = {
    start_time?: string | undefined;
    duration: number;
    unit: ExpiryUnit;
};
type PageExpiry = {
    duration: number;
    unit: ExpiryUnit;
};
type Recurring = {
    required: boolean;
    start_time?: string | undefined;
    interval_unit?: string | undefined;
};
type CreditCard = {
    secure: boolean;
    bank: string;
    channel: string;
    type: string;
    whitelist_bins: string[];
    installment?: {
        required?: boolean | undefined;
        terms?: Record<string, number[]> | undefined;
    } | undefined;
    dynamic_descriptor?: {
        merchant_name?: string | undefined;
        city_name?: string | undefined;
        country_code?: string | undefined;
    } | undefined;
};
type TransactionBody = {
    transaction_details: {
        order_id: string;
        gross_amount: number;
    };
    item_details?: ItemDetail[] | undefined;
    costumer_details?: CustomerDetail | undefined;
    enabled_payments?: EnabledPayment[] | undefined;
    credit_card?: CreditCard | undefined;
    bca_va?: Object | undefined;
    permata_va?: Object | undefined;
    bni_va?: VirtualAccount | undefined;
    bri_va?: VirtualAccount | undefined;
    cimb_va?: VirtualAccount | undefined;
    shopeepay?: ShopeePay | undefined;
    gopay?: GoPay | undefined;
    callbacks?: Callbacks | undefined;
    expiry?: Expiry | undefined;
    page_expiry?: PageExpiry | undefined;
    recurring?: Recurring | undefined;
};
type SnapResponse = {
    token: string;
    redirect_url: string;
};
type SnapRequestError = {
    error_messages: string[];
};

/**
 * CoreApi object able to do API request to Midtrans Core API
 */
declare class CoreApi {
    /**
     * @typedef {Object} CoreApiOpts
     * @property {boolean} [isProduction=false]
     * @property {string} [serverKey='']
     * @property {string} [clientKey='']
     * */
    /**
     * Initiate with options
     * @param {CoreApiOpts} [options]
     */
    constructor(options?: {
        isProduction?: boolean | undefined;
        serverKey?: string | undefined;
        clientKey?: string | undefined;
    });
    apiConfig: ApiConfig;
    httpClient: HttpClient;
    transaction: Transaction;
    /**
     * Do `/v2/charge` API request to Core API
     * @param  {Object} parameter - object of Core API JSON body as parameter, will be converted to JSON (more params detail refer to: https://api-docs.midtrans.com)
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    charge(parameter?: Object): Promise<any>;
    /**
     * Do `/v2/capture` API request to Core API
     * @param  {Object} parameter - object of Core API JSON body as parameter, will be converted to JSON (more params detail refer to: https://api-docs.midtrans.com)
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    capture(parameter?: Object): Promise<any>;
    /**
     * Do `/v2/card/register` API request to Core API
     * @param  {Object} parameter - object of Core API JSON body as parameter, will be converted to JSON (more params detail refer to: https://api-docs.midtrans.com)
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    cardRegister(parameter?: Object): Promise<any>;
    /**
     * Do `/v2/token` API request to Core API
     * @param  {Object} parameter - object of Core API JSON body as parameter, will be converted to JSON (more params detail refer to: https://api-docs.midtrans.com)
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    cardToken(parameter?: Object): Promise<any>;
    /**
     * Do `/v2/point_inquiry/<tokenId>` API request to Core API
     * @param  {String} tokenId - tokenId of credit card (more params detail refer to: https://api-docs.midtrans.com)
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    cardPointInquiry(tokenId: string): Promise<any>;
    /**
     * Create `/v2/pay/account` API request to Core API
     * @param  {Object} parameter - object of Core API JSON body as parameter, will be converted to JSON (more params detail refer to: https://api-docs.midtrans.com/#create-pay-account)
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    linkPaymentAccount(parameter?: Object): Promise<any>;
    /**
     * Do `/v2/pay/account/<accountId>` API request to Core API
     * @param  {String} accountId - accountId for specific payment channel (more params detail refer to: https://api-docs.midtrans.com/#get-pay-account)
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    getPaymentAccount(accountId: string): Promise<any>;
    /**
     * Unbind `/v2/pay/account/<accountId>/unbind` API request to Core API
     * @param  {String} accountId - accountId for specific payment channel (more params detail refer to: https://api-docs.midtrans.com/#unbind-pay-account)
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    unlinkPaymentAccount(accountId: string): Promise<any>;
    /**
     * @typedef {Object} CreateSubscriptionOpts
     * @param {string} name
     * @param {string} amount
     * @param {string} currency
     * @param {string} payment_type
     * @param {string} token
     * @param {Object} schedule
     * @param {Object} [retry_schedule]
     * @param {Object} [metadata]
     * @param {string} metadata.description
     * @param {Object} [customer_details]
     * @param {string} [customer_details.first_name]
     * @param {string} [customer_details.last_name]
     * @param {string} [customer_details.email]
     * @param {string} [customer_details.phone]
     * @param {Object} [gopay]
     * @param {string} gopay.account_id
     * */
    /**
     * @typedef {Object} SubscriptionResponse
     * @param {string} status_code
     * @param {string} payment_type
     * @param {string} account_id
     * @param {string} status
     * @param {Object} metadata
     * */
    /**
     * Create `/v1/subscription` API request to Core API
     * @param  {CreateSubscriptionOpts} parameter - object of Core API JSON body as parameter, will be converted to JSON (more params detail refer to: https://api-docs.midtrans.com/#create-subscription)
     * @return {Promise<SubscriptionResponse>} - Promise contains Object from JSON decoded response
     */
    createSubscription(parameter?: Object): Promise<Object>;
    /**
     * Do `/v1/subscription/<subscriptionId>` API request to Core API
     * @param  {String} subscriptionId - subscriptionId given by Midtrans (more params detail refer to: https://api-docs.midtrans.com/#get-subscription)
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    getSubscription(subscriptionId: string): Promise<any>;
    /**
     * Do `/v1/subscription/<subscriptionId>/disable` API request to Core API
     * @param  {String} subscriptionId - subscriptionId given by Midtrans (more params detail refer to: https://api-docs.midtrans.com/#disable-subscription)
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    disableSubscription(subscriptionId: string): Promise<any>;
    /**
     * Do `/v1/subscription/<subscriptionId>/enable` API request to Core API
     * @param  {String} subscriptionId - subscriptionId given by Midtrans (more params detail refer to: https://api-docs.midtrans.com/#enable-subscription)
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    enableSubscription(subscriptionId: string): Promise<any>;
    /**
     * Do update subscription `/v1/subscription/<subscriptionId>` API request to Core API
     * @param  {String} subscriptionId - subscriptionId given by Midtrans (more params detail refer to: https://api-docs.midtrans.com/#update-subscription)
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    updateSubscription(subscriptionId: string, parameter?: {}): Promise<any>;
}

/**
 * Iris object able to do API request to Midtrans Iris API
 */
declare class Iris {
    /**
     * @typedef {Object} IrisOpts
     * @property {boolean} [isProduction = false]
     * @property {string} [serverKey = '']
     * */
    /**
     * Initiate with options
     * @param {IrisOpts} [options]
     */
    constructor(options?: {
        isProduction?: boolean | undefined;
        serverKey?: string | undefined;
    });
    apiConfig: ApiConfig;
    httpClient: HttpClient;
    transaction: Transaction;
    /**
     * Do `/ping` API request to Iris API
     * @return {Promise<string>} - pong
     */
    ping(): Promise<string>;
    /**
     * Do create `/beneficiaries` API request to Iris API
     * @param  {Object} parameter - object of Iris API JSON body as parameter, will be converted to JSON (more params detail refer to: https://iris-docs.midtrans.com)
     * @return {Promise<unknown>} - Promise contains Object from JSON decoded response
     */
    createBeneficiaries(parameter?: Object): Promise<unknown>;
    /**
     * Do update `/beneficiaries/<alias_name>` API request to Iris API
     * @param  {string} aliasName - name of the beneficiaries that need to be updated
     * @param  {Object} parameter - object of Iris API JSON body as parameter, will be converted to JSON (more params detail refer to: https://iris-docs.midtrans.com)
     * @return {Promise<unknown>} - Promise contains Object from JSON decoded response
     */
    updateBeneficiaries(aliasName: string, parameter?: Object): Promise<unknown>;
    /**
     * Do `/beneficiaries` API request to Iris API
     * @return {Promise<unknown>} - Promise contains Object from JSON decoded response
     */
    getBeneficiaries(): Promise<unknown>;
    /**
     * Do create `/payouts` API request to Iris API
     * @param  {Object} parameter - object of Iris API JSON body as parameter, will be converted to JSON (more params detail refer to: https://iris-docs.midtrans.com)
     * @return {Promise<unknown>} - Promise contains Object from JSON decoded response
     */
    createPayouts(parameter?: Object): Promise<unknown>;
    /**
     * Do approve `/payouts/approve` API request to Iris API
     * @param  {Object} parameter - object of Iris API JSON body as parameter, will be converted to JSON (more params detail refer to: https://iris-docs.midtrans.com)
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    approvePayouts(parameter?: Object): Promise<any>;
    /**
     * Do reject `/payouts/reject` API request to Iris API
     * @param  {Object} parameter - object of Iris API JSON body as parameter, will be converted to JSON (more params detail refer to: https://iris-docs.midtrans.com)
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    rejectPayouts(parameter?: Object): Promise<any>;
    /**
     * Do `/payouts/<reference_no>` API request to Iris API
     * @param  {string} referenceNo - number of the payout
     * @return {Promise} - Promise contains Object from JSON decoded response
     */
    getPayoutDetails(referenceNo: string): Promise<any>;
    /**
     * @typedef {Object} TransactionHistory
     * @property {string=} reference_no
     * @property {string=} beneficiary_name
     * @property {string=} beneficiary_account
     * @property {string} account
     * @property {string} type
     * @property {number} amount
     * @property {string} status
     * @property {string} created_at timestamp
     *
     * */
    /**
     * Do `/statements` API request to Iris API
     *
     * @returns {Promise<TransactionHistory[]>} - transaction history
     * {@link https://iris-docs.midtrans.com/#transaction-history|Transaction History docs}
     */
    getTransactionHistory(parameter?: {}): Promise<{
        reference_no?: string | undefined;
        beneficiary_name?: string | undefined;
        beneficiary_account?: string | undefined;
        account: string;
        type: string;
        amount: number;
        status: string;
        /**
         * timestamp
         */
        created_at: string;
    }[]>;
    /**
     * @typedef {Object} TopupChannel
     * @property {number} id
     * @property {string} virtual_account_type
     * @property {number} virtual_account_number
     * */
    /**
     * Do `/channels` API request to Iris API
     * @return {Promise<TopupChannel[]>} - Promise contains Object from JSON decoded response
     */
    getTopupChannels(): Promise<{
        id: number;
        virtual_account_type: string;
        virtual_account_number: number;
    }[]>;
    /**
     * Do `/balance` API request to Iris API
     * @return {Promise<number>} balance
     */
    getBalance(): Promise<number>;
    /**
     * @typedef {Object} BankAccount
     * @property {string} bank_account_id
     * @property {string} bank_name
     * @property {string} account_name
     * @property {number} account_number
     * @property {"in_progress" | "live"} status
     * */
    /**
     * Do `/bank_accounts` API request to Iris API
     *
     * @return {Promise<BankAccount[]>} - Promise contains Object from JSON decoded response
     */
    getFacilitatorBankAccounts(): Promise<{
        bank_account_id: string;
        bank_name: string;
        account_name: string;
        account_number: number;
        status: "in_progress" | "live";
    }[]>;
    /**
     * Do `/bank_accounts/<bank_account_id>/balance` API request to Iris API
     *
     * @param {string} bankAccountId - ID of the bank account
     * @return {Promise<{balance: number}[]>} - Promise contains Object from JSON decoded response
     */
    getFacilitatorBalance(bankAccountId: string): Promise<{
        balance: number;
    }[]>;
    /**
     * @typedef {Object} Bank
     * @property {string} code
     * @property {string} name
     * */
    /**
     * Do `/beneficiary_banks` API request to Iris API
     * @return {Promise<{beneficiary_banks: Bank[]}[]>} - Promise contains Object from JSON decoded response
     */
    getBeneficiaryBanks(): Promise<{
        beneficiary_banks: {
            code: string;
            name: string;
        }[];
    }[]>;
    /**
     * @typedef {Object} ValidationOpts
     * @property {string} bank
     * @property {string} account
     * */
    /**
     * Do `/account_validation` API request to Iris API
     * @param  {ValidationOpts} [parameter = {}] - object of Iris API JSON body as parameter, will be converted to GET Query param (more params detail refer to: https://iris-docs.midtrans.com)
     * @return {Promise<unknown>} - Promise contains Object from JSON decoded response
     */
    validateBankAccount(parameter?: {
        bank: string;
        account: string;
    }): Promise<unknown>;
}

/**
 * Custom HTTP Error Class that also expose httpStatusCode, ApiResponse, rawHttpClientData
 * To expose more info for lib user
 */
declare class MidtransError extends Error {
    /**
     * @param {string} message
     * @param {number} [httpStatusCode = null]
     * @param {unknown} [ApiResponse = null]
     * @param {unknown} [rawHttpClientData = null]
     * @constructor
     * */
    constructor(message: string, httpStatusCode?: number, ApiResponse?: unknown, rawHttpClientData?: unknown);
    httpStatusCode: number;
    ApiResponse: unknown;
    rawHttpClientData: unknown;
}

declare class SnapBiConfig {
    /**
     * Static properties for configuration values
     * */
    /** @type boolean */
    static isProduction: boolean;
    /** @type string | null */
    static snapBiClientId: string | null;
    /** @type string | null */
    static snapBiPrivateKey: string | null;
    /** @type string | null */
    static snapBiClientSecret: string | null;
    /** @type string | null */
    static snapBiPartnerId: string | null;
    /** @type string | null */
    static snapBiChannelId: string | null;
    /** @type boolean */
    static enableLogging: boolean;
    /** @type string | null */
    static snapBiPublicKey: string | null;
    static SNAP_BI_SANDBOX_BASE_URL: "https://merchants.sbx.midtrans.com";
    static SNAP_BI_PRODUCTION_BASE_URL: "https://merchants.midtrans.com";
    static getBaseUrl(): "https://merchants.sbx.midtrans.com" | "https://merchants.midtrans.com";
}

declare class SnapBi {
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

declare namespace _default {
    export { Snap };
    export { CoreApi };
    export { Iris };
    export { MidtransError };
    export { SnapBiConfig };
    export { SnapBi };
}
//# sourceMappingURL=index.d.ts.map

export { CoreApi, Iris, MidtransError, Snap, SnapBi, SnapBiConfig, _default as default };
