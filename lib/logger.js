export class Logger {
    constructor (logObject = window.console) {
        this.logObject = logObject;
    };

    log (...params) {
        this.logObject.log(params);
    }

    warn (...params) {
        this.logObject.warn(params);
    };

    error (...params) {
        this.logObject.error(params);
    }
}