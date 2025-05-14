/**
 * These are wrapper/implementation of API methods described on:
 * https://api-docs.midtrans.com/#midtrans-api
 * @return {Promise} - Promise that contains JSON API response decoded as Object
 */
export class Transaction {
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
//# sourceMappingURL=transaction.d.ts.map