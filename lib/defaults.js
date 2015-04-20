import { Logger } from './logger.js';
import { EventBus } from './events.js';

export const logger = new Logger();
export const eventBus = new EventBus();
export const ajax = require('superagent');


