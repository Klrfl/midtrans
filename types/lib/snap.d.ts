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
export class Snap {
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
export type ItemDetail = {
    id?: string | undefined;
    name: string;
    price: number;
    quantity: number;
    brand?: string | undefined;
    category?: string | undefined;
    merchant_name?: string | undefined;
    url?: string | undefined;
};
export type Address = {
    first_name?: string | undefined;
    last_name?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
    address?: string | undefined;
    city?: string | undefined;
    postal_code?: string | undefined;
    country_code?: string | undefined;
};
export type CustomerDetail = {
    first_name?: string | undefined;
    last_name?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
    billing_address?: Address | undefined;
    shipping_address?: Address | undefined;
};
export type EnabledPayment = ("credit_card" | "cimb_clicks" | "bca_klikbca" | "bca_klikpay" | "bri_epay" | "echannel" | "permata_va" | "bca_va" | "bni_va" | "bri_va" | "cimb_va" | "other_va" | "gopay" | "indomaret" | "danamon_online" | "akulaku" | "shopeepay" | "kredivo" | "uob_ezpay" | "other_qris" | "alfamart" | "indomaret" | "cstore");
export type VirtualAccount = {
    va_number?: string | undefined;
};
export type BCAVirtualAccount = Object;
export type FreeText = {
    inquiry: FreeTextItem[];
    payment: FreeTextItem[];
};
export type FreeTextItem = {
    en: string;
    id: string;
};
export type PermataVirtualAccount = Object;
export type ShopeePay = {
    callback_url?: string | undefined;
};
export type GoPay = {
    enable_callback?: boolean | undefined;
    callback_url?: string | undefined;
    tokenization?: boolean | undefined;
    phone_number?: string | undefined;
    country_code?: string | undefined;
};
export type Callbacks = {
    finish?: string | undefined;
    error?: string | undefined;
};
export type ExpiryUnit = "day" | "hour" | "minute" | "days" | "hours" | "minutes";
export type Expiry = {
    start_time?: string | undefined;
    duration: number;
    unit: ExpiryUnit;
};
export type PageExpiry = {
    duration: number;
    unit: ExpiryUnit;
};
export type Recurring = {
    required: boolean;
    start_time?: string | undefined;
    interval_unit?: string | undefined;
};
export type CreditCard = {
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
export type TransactionBody = {
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
export type SnapResponse = {
    token: string;
    redirect_url: string;
};
export type SnapRequestError = {
    error_messages: string[];
};
import { ApiConfig } from './apiConfig.js';
import { HttpClient } from './httpClient.js';
import { Transaction } from './transaction.js';
//# sourceMappingURL=snap.d.ts.map