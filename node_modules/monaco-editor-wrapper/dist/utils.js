export const createUrl = (config) => {
    let buildUrl = '';
    if (config.url) {
        const options = config;
        if (!options.url.startsWith('ws://') && !options.url.startsWith('wss://')) {
            throw new Error(`This is not a proper websocket url: ${options.url}`);
        }
        buildUrl = options.url;
    }
    else {
        const options = config;
        const protocol = options.secured ? 'wss' : 'ws';
        buildUrl = `${protocol}://${options.host}`;
        if (options.port) {
            if (options.port !== 80) {
                buildUrl += `:${options.port}`;
            }
        }
        if (options.path) {
            buildUrl += `/${options.path}`;
        }
        if (options.extraParams) {
            const url = new URL(buildUrl);
            for (const [key, value] of Object.entries(options.extraParams)) {
                if (value) {
                    url.searchParams.set(key, value instanceof Array ? value.join(',') : value.toString());
                }
            }
            buildUrl = url.toString();
        }
    }
    return buildUrl;
};
export const verifyUrlorCreateDataUrl = (input) => {
    return (input instanceof URL) ? input.href : new URL(`data:text/plain;base64,${btoa(input)}`).href;
};
//# sourceMappingURL=utils.js.map