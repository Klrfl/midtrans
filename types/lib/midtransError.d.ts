/**
 * Custom HTTP Error Class that also expose httpStatusCode, ApiResponse, rawHttpClientData
 * To expose more info for lib user
 */
export class MidtransError extends Error {
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
//# sourceMappingURL=midtransError.d.ts.map