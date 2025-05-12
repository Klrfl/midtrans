import { pick, merge } from 'lodash-es';

/**
 *  Config Object that used to store isProduction, serverKey, clientKey.
 *  And also API base urls.
 */
export class ApiConfig {
  // Static vars
  static CORE_SANDBOX_BASE_URL = /** @type const */ (
    'https://api.sandbox.midtrans.com'
  );
  static CORE_PRODUCTION_BASE_URL = /** @type const */ (
    'https://api.midtrans.com'
  );
  static SNAP_SANDBOX_BASE_URL = /** @type const */ (
    'https://app.sandbox.midtrans.com/snap/v1'
  );
  static SNAP_PRODUCTION_BASE_URL = /** @type const */ (
    'https://app.midtrans.com/snap/v1'
  );
  /** Iris API url */
  static IRIS_SANDBOX_BASE_URL = /** @type const */ (
    'https://app.sandbox.midtrans.com/iris/api/v1'
  );
  static IRIS_PRODUCTION_BASE_URL = /** @type const */ (
    'https://app.midtrans.com/iris/api/v1'
  );

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
  constructor(options = { isProduction: false, serverKey: '', clientKey: '' }) {
    /**
     * @type boolean
     * */
    this.isProduction = false;
    /**
     * @type string
     * */
    this.serverKey = '';
    /**
     * @type string
     * */
    this.clientKey = '';

    this.set(options);
  }

  /**
   * Return stored API config
   * @return {APIConfigOpts} api config props
   */
  get() {
    const currentConfig = {
      isProduction: this.isProduction,
      serverKey: this.serverKey,
      clientKey: this.clientKey,
    };

    return currentConfig;
  }

  /**
   * Set new API config
   * @param {APIConfigOpts} options
   */
  set(options) {
    let currentConfig = {
      isProduction: this.isProduction,
      serverKey: this.serverKey,
      clientKey: this.clientKey,
    };

    const parsedOptions = pick(options, [
      'isProduction',
      'serverKey',
      'clientKey',
    ]);

    let mergedConfig = merge({}, currentConfig, parsedOptions);

    this.isProduction = mergedConfig.isProduction;
    this.serverKey = mergedConfig.serverKey;
    this.clientKey = mergedConfig.clientKey;
  }

  /**
   * @return {String} core api base url
   */
  getCoreApiBaseUrl() {
    return this.isProduction
      ? ApiConfig.CORE_PRODUCTION_BASE_URL
      : ApiConfig.CORE_SANDBOX_BASE_URL;
  }

  /**
   * @return {String} snap api base url
   */
  getSnapApiBaseUrl() {
    return this.isProduction
      ? ApiConfig.SNAP_PRODUCTION_BASE_URL
      : ApiConfig.SNAP_SANDBOX_BASE_URL;
  }

  /**
   * @return {String} Iris api base url
   */
  getIrisApiBaseUrl() {
    return this.isProduction
      ? ApiConfig.IRIS_PRODUCTION_BASE_URL
      : ApiConfig.IRIS_SANDBOX_BASE_URL;
  }
}
