import * as defaults from '../../lib/defaults.js';

export class BaseModule {
    constructor(logger = defaults.logger, eventBus = defaults.eventBus, ajax = defaults.ajax) {
        this.logger = logger;
        this.eventBus = eventBus;
        this.ajax = ajax;

        this.init();
    }
}