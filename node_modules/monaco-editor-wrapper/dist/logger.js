export class Logger {
    enabled;
    debugEnabled;
    constructor(config) {
        this.enabled = !config ? true : config.enabled === true;
        this.debugEnabled = this.enabled && config?.debugEnabled === true;
    }
    isEnabled() {
        return this.enabled;
    }
    isDebugEnabled() {
        return this.debugEnabled;
    }
    info(message) {
        if (this.enabled) {
            console.log(message);
        }
    }
    debug(message, force) {
        if (this.enabled && (this.debugEnabled || force === true)) {
            console.debug(message);
        }
    }
}
//# sourceMappingURL=logger.js.map