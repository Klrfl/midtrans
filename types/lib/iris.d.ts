/**
 * Iris object able to do API request to Midtrans Iris API
 */
export class Iris {
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
import { ApiConfig } from './apiConfig.js';
import { HttpClient } from './httpClient.js';
import { Transaction } from './transaction.js';
//# sourceMappingURL=iris.d.ts.map