export type LoggerConfig = {
    enabled: boolean;
    debugEnabled?: boolean;
};
export declare class Logger {
    private enabled;
    private debugEnabled;
    constructor(config?: LoggerConfig);
    isEnabled(): boolean;
    isDebugEnabled(): boolean;
    info(message: string): void;
    debug(message: string, force?: boolean): void;
}
//# sourceMappingURL=logger.d.ts.map