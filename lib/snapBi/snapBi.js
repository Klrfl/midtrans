import { AxiosHeaders } from 'axios';
import { SnapBiApiRequestor } from './snapBiApiRequestor.js';
import { SnapBiConfig } from './snapBiConfig.js';
import { createHash, createVerify, createHmac, sign } from 'crypto';

export class SnapBi {
  static ACCESS_TOKEN = /** @type {const} */ ('/v1.0/access-token/b2b');
  static PAYMENT_HOST_TO_HOST = /** @type const */ (
    '/v1.0/debit/payment-host-to-host'
  );
  static CREATE_VA = /** @type const */ ('/v1.0/transfer-va/create-va');
  static DEBIT_STATUS = /** @type const */ ('/v1.0/debit/status');
  static DEBIT_REFUND = /** @type const */ ('/v1.0/debit/refund');
  static DEBIT_CANCEL = /** @type const */ ('/v1.0/debit/cancel');
  static VA_STATUS = /** @type const */ ('/v1.0/transfer-va/status');
  static VA_CANCEL = /** @type const */ ('/v1.0/transfer-va/delete-va');
  static QRIS_PAYMENT = /** @type const */ ('/v1.0/qr/qr-mpm-generate');
  static QRIS_STATUS = /** @type const */ '/v1.0/qr/qr-mpm-query';
  static QRIS_REFUND = /** @type const */ ('/v1.0/qr/qr-mpm-refund');
  static QRIS_CANCEL = /** @type const */ ('/v1.0/qr/qr-mpm-cancel');

  /**
   * @typedef {'va' | 'qris' | 'directDebit' | ''} PaymentMethod
   * */

  /**
   * @param {PaymentMethod} paymentMethod
   * */
  constructor(paymentMethod) {
    /** @type PaymentMethod */
    this.paymentMethod = paymentMethod;
    /** @type string */
    this.apiPath = '';
    /** @type {AxiosHeaders} */
    this.accessTokenHeader = [];
    this.transactionHeader = [];
    /** @type Record<string, unknown> */
    this.body = {};
    /** @type string */
    this.accessToken = '';
    /** @type string */
    this.deviceId = '';
    /** @type string */
    this.debugId = '';
    /** @type string */
    this.timeStamp = new Date().toISOString();
    /** @type number | null */
    this.timeout = null;
    /** @type string */
    this.signature = '';
    /** @type string */
    this.notificationUrlPath = '';
    /** @type Record<string, unknown> */
    this.notificationPayload = {};
  }

  static directDebit() {
    return new SnapBi('directDebit');
  }

  static va() {
    return new SnapBi('va');
  }

  static qris() {
    return new SnapBi('qris');
  }
  static notification() {
    return new SnapBi('');
  }

  withAccessTokenHeader(headers) {
    this.accessTokenHeader = { ...this.accessTokenHeader, ...headers };
    return this;
  }

  withTransactionHeader(headers) {
    this.transactionHeader = { ...this.transactionHeader, ...headers };
    return this;
  }

  /** @param {string} accessToken */
  withAccessToken(accessToken) {
    this.accessToken = accessToken;
    return this;
  }

  /** @param {Record<string, unknown>} body */
  withBody(body) {
    this.body = body;
    return this;
  }
  withSignature(signature) {
    this.signature = signature;
    return this;
  }
  /** @param {string} timeStamp */
  withTimeStamp(timeStamp) {
    this.timeStamp = timeStamp;
    return this;
  }

  /** @param {Record<string, unknown>} notificationPayload */
  withNotificationPayload(notificationPayload) {
    this.notificationPayload = notificationPayload;
    return this;
  }

  /**@param {string} notificationUrlPath */
  withNotificationUrlPath(notificationUrlPath) {
    this.notificationUrlPath = notificationUrlPath;
    return this;
  }

  /** @param {string} privateKey */
  withPrivateKey(privateKey) {
    SnapBiConfig.snapBiPrivateKey = privateKey;
    return this;
  }

  /** @param {string} clientId */
  withClientId(clientId) {
    SnapBiConfig.snapBiClientId = clientId;
    return this;
  }

  /** @param {string} clientSecret */
  withClientSecret(clientSecret) {
    SnapBiConfig.snapBiClientSecret = clientSecret;
    return this;
  }

  /** @param {string} partnerId */
  withPartnerId(partnerId) {
    SnapBiConfig.snapBiPartnerId = partnerId;
    return this;
  }

  withChannelId(channelId) {
    SnapBiConfig.snapBiChannelId = channelId;
    return this;
  }

  withDeviceId(deviceId) {
    this.deviceId = deviceId;
    return this;
  }

  withDebugId(debugId) {
    this.debugId = debugId;
    return this;
  }

  withTimeout(timeout) {
    this.timeout = timeout;
    return this;
  }

  async createPayment(externalId) {
    this.apiPath = this.setupCreatePaymentApiPath(this.paymentMethod);
    return await this.createConnection(externalId);
  }

  async cancel(externalId) {
    this.apiPath = this.setupCancelApiPath(this.paymentMethod);
    return await this.createConnection(externalId);
  }

  async refund(externalId) {
    this.apiPath = this.setupRefundApiPath(this.paymentMethod);
    return await this.createConnection(externalId);
  }

  async getStatus(externalId) {
    this.apiPath = this.setupGetStatusApiPath(this.paymentMethod);
    return await this.createConnection(externalId);
  }

  isWebhookNotificationVerified() {
    if (SnapBiConfig.snapBiPublicKey == null) {
      throw new Error(
        "The public key is null, You need to set the public key from SnapBiConfig.'\n" +
          'For more details, contact support at support@midtrans.com if you have any questions.'
      );
    }
    var notificationHttpMethod = 'POST';
    var minifiedNotificationBodyJsonString = JSON.stringify(
      this.notificationPayload
    );
    var hashedNotificationBodyJsonString = createHash('sha256')
      .update(minifiedNotificationBodyJsonString)
      .digest('hex')
      .toLowerCase();

    var rawStringDataToVerifyAgainstSignature =
      notificationHttpMethod +
      ':' +
      this.notificationUrlPath +
      ':' +
      hashedNotificationBodyJsonString +
      ':' +
      this.timeStamp;

    var verifier = createVerify('SHA256');
    verifier.update(rawStringDataToVerifyAgainstSignature, 'utf8');
    var isSignatureVerified = verifier.verify(
      SnapBiConfig.snapBiPublicKey,
      this.signature,
      'base64'
    );
    return isSignatureVerified;
  }

  /** @returns Promise<Object> */
  async getAccessToken() {
    const snapBiAccessTokenHeader = this.buildAccessTokenHeader(this.timeStamp);
    const openApiPayload = {
      grant_type: 'client_credentials',
    };
    return await SnapBiApiRequestor.remoteCall(
      SnapBiConfig.getBaseUrl() + SnapBi.ACCESS_TOKEN,
      snapBiAccessTokenHeader,
      openApiPayload,
      this.timeout
    );
  }

  /** @param {string | null} externalId */
  async createConnection(externalId = null) {
    if (!this.accessToken) {
      const accessTokenResponse = await this.getAccessToken();
      if (!accessTokenResponse.accessToken) {
        return accessTokenResponse;
      }
      this.accessToken = accessTokenResponse.accessToken;
    }

    const snapBiTransactionHeader = this.buildSnapBiTransactionHeader(
      externalId,
      this.timeStamp
    );
    return await SnapBiApiRequestor.remoteCall(
      SnapBiConfig.getBaseUrl() + this.apiPath,
      snapBiTransactionHeader,
      this.body,
      this.timeout
    );
  }

  static getSymmetricSignatureHmacSh512(
    accessToken,
    requestBody,
    method,
    path,
    clientSecret,
    timeStamp
  ) {
    const minifiedBody = JSON.stringify(requestBody);
    const hashedBody = createHash('sha256')
      .update(minifiedBody)
      .digest('hex')
      .toLowerCase();

    const payload = `${method.toUpperCase()}:${path}:${accessToken}:${hashedBody}:${timeStamp}`;
    const hmac = createHmac('sha512', clientSecret)
      .update(payload)
      .digest('base64');

    return hmac;
  }

  /**
   * @param {string} clientId
   * @param {string} xTimeStamp
   * @param {string} privateKey
   * @returns string
   * */
  static getAsymmetricSignatureSha256WithRsa(clientId, xTimeStamp, privateKey) {
    const stringToSign = clientId + '|' + xTimeStamp;
    return sign('RSA-SHA256', Buffer.from(stringToSign), privateKey).toString(
      'base64'
    );
  }

  /**
   * @param {string} externalId
   * @param {string} timeStamp
   * */
  buildSnapBiTransactionHeader(externalId, timeStamp) {
    let snapBiTransactionHeader = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-PARTNER-ID': SnapBiConfig.snapBiPartnerId,
      'X-EXTERNAL-ID': externalId,
      'X-DEVICE-ID': this.deviceId,
      'CHANNEL-ID': SnapBiConfig.snapBiChannelId,
      'debug-id': this.debugId,
      Authorization: `Bearer ${this.accessToken}`,
      'X-TIMESTAMP': timeStamp,
      'X-SIGNATURE': SnapBi.getSymmetricSignatureHmacSh512(
        this.accessToken,
        this.body,
        'post',
        this.apiPath,
        SnapBiConfig.snapBiClientSecret,
        timeStamp
      ),
    };

    if (this.transactionHeader) {
      snapBiTransactionHeader = {
        ...snapBiTransactionHeader,
        ...this.transactionHeader,
      };
    }

    return snapBiTransactionHeader;
  }

  /**
   * @param {string} timeStamp */
  buildAccessTokenHeader(timeStamp) {
    /**
     * @type {AxiosHeaders}
     * */
    let snapBiAccessTokenHeader = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-CLIENT-KEY': SnapBiConfig.snapBiClientId,
      'X-SIGNATURE': SnapBi.getAsymmetricSignatureSha256WithRsa(
        SnapBiConfig.snapBiClientId,
        timeStamp,
        SnapBiConfig.snapBiPrivateKey
      ),
      'X-TIMESTAMP': timeStamp,
      'debug-id': this.debugId,
    };

    if (this.accessTokenHeader) {
      snapBiAccessTokenHeader = {
        ...snapBiAccessTokenHeader,
        ...this.accessTokenHeader,
      };
    }

    return snapBiAccessTokenHeader;
  }

  /**
   * @param {PaymentMethod} paymentMethod
   * */
  setupCreatePaymentApiPath(paymentMethod) {
    switch (paymentMethod) {
      case 'va':
        return SnapBi.CREATE_VA;
      case 'qris':
        return SnapBi.QRIS_PAYMENT;
      case 'directDebit':
        return SnapBi.PAYMENT_HOST_TO_HOST;
      default:
        throw new Error(`Payment method not implemented: ${paymentMethod}`);
    }
  }

  /**
   * @param {PaymentMethod} paymentMethod
   * */
  setupRefundApiPath(paymentMethod) {
    switch (paymentMethod) {
      case 'qris':
        return SnapBi.QRIS_REFUND;
      case 'directDebit':
        return SnapBi.DEBIT_REFUND;
      default:
        throw new Error(`Payment method not implemented: ${paymentMethod}`);
    }
  }

  /**
   * @param {PaymentMethod} paymentMethod
   * */
  setupCancelApiPath(paymentMethod) {
    switch (paymentMethod) {
      case 'va':
        return SnapBi.VA_CANCEL;
      case 'qris':
        return SnapBi.QRIS_CANCEL;
      case 'directDebit':
        return SnapBi.DEBIT_CANCEL;
      default:
        throw new Error(`Payment method not implemented: ${paymentMethod}`);
    }
  }

  /**
   * @param {PaymentMethod} paymentMethod
   * */
  setupGetStatusApiPath(paymentMethod) {
    switch (paymentMethod) {
      case 'va':
        return SnapBi.VA_STATUS;
      case 'qris':
        return SnapBi.QRIS_STATUS;
      case 'directDebit':
        return SnapBi.DEBIT_STATUS;
      default:
        throw new Error(`Payment method not implemented: ${paymentMethod}`);
    }
  }
}
