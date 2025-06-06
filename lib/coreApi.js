import { ApiConfig } from './apiConfig.js';
import { HttpClient } from './httpClient.js';
import { Transaction } from './transaction.js';

/**
 * CoreApi object able to do API request to Midtrans Core API
 */
export class CoreApi {
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
  constructor(options = { isProduction: false, serverKey: '', clientKey: '' }) {
    this.apiConfig = new ApiConfig(options);
    this.httpClient = new HttpClient(this);
    this.transaction = new Transaction(this);
  }

  /**
   * Do `/v2/charge` API request to Core API
   * @param  {Object} parameter - object of Core API JSON body as parameter, will be converted to JSON (more params detail refer to: https://api-docs.midtrans.com)
   * @return {Promise} - Promise contains Object from JSON decoded response
   */
  charge(parameter = {}) {
    let apiUrl = this.apiConfig.getCoreApiBaseUrl() + '/v2/charge';
    let responsePromise = this.httpClient.request(
      'post',
      this.apiConfig.get().serverKey,
      apiUrl,
      parameter
    );
    return responsePromise;
  }

  /**
   * Do `/v2/capture` API request to Core API
   * @param  {Object} parameter - object of Core API JSON body as parameter, will be converted to JSON (more params detail refer to: https://api-docs.midtrans.com)
   * @return {Promise} - Promise contains Object from JSON decoded response
   */
  capture(parameter = {}) {
    let apiUrl = this.apiConfig.getCoreApiBaseUrl() + '/v2/capture';
    let responsePromise = this.httpClient.request(
      'post',
      this.apiConfig.get().serverKey,
      apiUrl,
      parameter
    );
    return responsePromise;
  }

  /**
   * Do `/v2/card/register` API request to Core API
   * @param  {Object} parameter - object of Core API JSON body as parameter, will be converted to JSON (more params detail refer to: https://api-docs.midtrans.com)
   * @return {Promise} - Promise contains Object from JSON decoded response
   */
  cardRegister(parameter = {}) {
    let apiUrl = this.apiConfig.getCoreApiBaseUrl() + '/v2/card/register';
    let responsePromise = this.httpClient.request(
      'get',
      this.apiConfig.get().serverKey,
      apiUrl,
      parameter
    );
    return responsePromise;
  }

  /**
   * Do `/v2/token` API request to Core API
   * @param  {Object} parameter - object of Core API JSON body as parameter, will be converted to JSON (more params detail refer to: https://api-docs.midtrans.com)
   * @return {Promise} - Promise contains Object from JSON decoded response
   */
  cardToken(parameter = {}) {
    let apiUrl = this.apiConfig.getCoreApiBaseUrl() + '/v2/token';
    let responsePromise = this.httpClient.request(
      'get',
      this.apiConfig.get().serverKey,
      apiUrl,
      parameter
    );
    return responsePromise;
  }

  /**
   * Do `/v2/point_inquiry/<tokenId>` API request to Core API
   * @param  {String} tokenId - tokenId of credit card (more params detail refer to: https://api-docs.midtrans.com)
   * @return {Promise} - Promise contains Object from JSON decoded response
   */
  cardPointInquiry(tokenId) {
    let apiUrl =
      this.apiConfig.getCoreApiBaseUrl() + '/v2/point_inquiry/' + tokenId;
    let responsePromise = this.httpClient.request(
      'get',
      this.apiConfig.get().serverKey,
      apiUrl,
      null
    );
    return responsePromise;
  }

  /**
   * Create `/v2/pay/account` API request to Core API
   * @param  {Object} parameter - object of Core API JSON body as parameter, will be converted to JSON (more params detail refer to: https://api-docs.midtrans.com/#create-pay-account)
   * @return {Promise} - Promise contains Object from JSON decoded response
   */
  linkPaymentAccount(parameter = {}) {
    let apiUrl = this.apiConfig.getCoreApiBaseUrl() + '/v2/pay/account';
    let responsePromise = this.httpClient.request(
      'post',
      this.apiConfig.get().serverKey,
      apiUrl,
      parameter
    );
    return responsePromise;
  }

  /**
   * Do `/v2/pay/account/<accountId>` API request to Core API
   * @param  {String} accountId - accountId for specific payment channel (more params detail refer to: https://api-docs.midtrans.com/#get-pay-account)
   * @return {Promise} - Promise contains Object from JSON decoded response
   */
  getPaymentAccount(accountId) {
    let apiUrl =
      this.apiConfig.getCoreApiBaseUrl() + '/v2/pay/account/' + accountId;
    let responsePromise = this.httpClient.request(
      'get',
      this.apiConfig.get().serverKey,
      apiUrl,
      null
    );
    return responsePromise;
  }

  /**
   * Unbind `/v2/pay/account/<accountId>/unbind` API request to Core API
   * @param  {String} accountId - accountId for specific payment channel (more params detail refer to: https://api-docs.midtrans.com/#unbind-pay-account)
   * @return {Promise} - Promise contains Object from JSON decoded response
   */
  unlinkPaymentAccount(accountId) {
    let apiUrl =
      this.apiConfig.getCoreApiBaseUrl() +
      '/v2/pay/account/' +
      accountId +
      '/unbind';
    let responsePromise = this.httpClient.request(
      'post',
      this.apiConfig.get().serverKey,
      apiUrl,
      null
    );
    return responsePromise;
  }

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
  createSubscription(parameter = {}) {
    let apiUrl = this.apiConfig.getCoreApiBaseUrl() + '/v1/subscriptions';
    let responsePromise = this.httpClient.request(
      'post',
      this.apiConfig.get().serverKey,
      apiUrl,
      parameter
    );
    return responsePromise;
  }

  /**
   * Do `/v1/subscription/<subscriptionId>` API request to Core API
   * @param  {String} subscriptionId - subscriptionId given by Midtrans (more params detail refer to: https://api-docs.midtrans.com/#get-subscription)
   * @return {Promise} - Promise contains Object from JSON decoded response
   */
  getSubscription(subscriptionId) {
    let apiUrl =
      this.apiConfig.getCoreApiBaseUrl() +
      '/v1/subscriptions/' +
      subscriptionId;
    let responsePromise = this.httpClient.request(
      'get',
      this.apiConfig.get().serverKey,
      apiUrl,
      null
    );
    return responsePromise;
  }

  /**
   * Do `/v1/subscription/<subscriptionId>/disable` API request to Core API
   * @param  {String} subscriptionId - subscriptionId given by Midtrans (more params detail refer to: https://api-docs.midtrans.com/#disable-subscription)
   * @return {Promise} - Promise contains Object from JSON decoded response
   */
  disableSubscription(subscriptionId) {
    let apiUrl =
      this.apiConfig.getCoreApiBaseUrl() +
      '/v1/subscriptions/' +
      subscriptionId +
      '/disable';
    let responsePromise = this.httpClient.request(
      'post',
      this.apiConfig.get().serverKey,
      apiUrl,
      null
    );
    return responsePromise;
  }

  /**
   * Do `/v1/subscription/<subscriptionId>/enable` API request to Core API
   * @param  {String} subscriptionId - subscriptionId given by Midtrans (more params detail refer to: https://api-docs.midtrans.com/#enable-subscription)
   * @return {Promise} - Promise contains Object from JSON decoded response
   */
  enableSubscription(subscriptionId) {
    let apiUrl =
      this.apiConfig.getCoreApiBaseUrl() +
      '/v1/subscriptions/' +
      subscriptionId +
      '/enable';
    let responsePromise = this.httpClient.request(
      'post',
      this.apiConfig.get().serverKey,
      apiUrl,
      null
    );
    return responsePromise;
  }

  /**
   * Do update subscription `/v1/subscription/<subscriptionId>` API request to Core API
   * @param  {String} subscriptionId - subscriptionId given by Midtrans (more params detail refer to: https://api-docs.midtrans.com/#update-subscription)
   * @return {Promise} - Promise contains Object from JSON decoded response
   */
  updateSubscription(subscriptionId, parameter = {}) {
    let apiUrl =
      this.apiConfig.getCoreApiBaseUrl() +
      '/v1/subscriptions/' +
      subscriptionId;
    let responsePromise = this.httpClient.request(
      'patch',
      this.apiConfig.get().serverKey,
      apiUrl,
      parameter
    );
    return responsePromise;
  }
}
