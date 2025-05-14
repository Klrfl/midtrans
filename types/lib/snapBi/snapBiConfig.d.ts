export class SnapBiConfig {
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
//# sourceMappingURL=snapBiConfig.d.ts.map