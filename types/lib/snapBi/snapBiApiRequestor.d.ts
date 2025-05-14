export class SnapBiApiRequestor {
    /**
     * Make a remote API call with the specified URL, headers, and request body.
     * @param {string} url - The API endpoint URL.
     * @param {object} header - The headers for the request.
     * @param {object} body - The JSON payload for the request.
     * @returns {Promise<object>} - The JSON response from the API.
     */
    static remoteCall(url: string, header: object, body: object, timeout?: number): Promise<object>;
}
//# sourceMappingURL=snapBiApiRequestor.d.ts.map