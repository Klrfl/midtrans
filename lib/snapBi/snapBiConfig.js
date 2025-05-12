export class SnapBiConfig {
  /**
   * Static properties for configuration values
   * */
  /** @type boolean */
  static isProduction = false;
  /** @type string | null */
  static snapBiClientId = null;
  /** @type string | null */
  static snapBiPrivateKey = null;
  /** @type string | null */
  static snapBiClientSecret = null;
  /** @type string | null */
  static snapBiPartnerId = null;
  /** @type string | null */
  static snapBiChannelId = null;
  /** @type boolean */
  static enableLogging = false;
  /** @type string | null */
  static snapBiPublicKey = null;

  // Constants for base URLs
  static SNAP_BI_SANDBOX_BASE_URL = /** @type const*/ (
    'https://merchants.sbx.midtrans.com'
  );
  static SNAP_BI_PRODUCTION_BASE_URL = /** @type const */ (
    'https://merchants.midtrans.com'
  );
  static getBaseUrl() {
    return this.isProduction
      ? this.SNAP_BI_PRODUCTION_BASE_URL
      : this.SNAP_BI_SANDBOX_BASE_URL;
  }
}
