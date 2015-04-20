import { Logger } from './logger';
const _ = require('lodash');

/**
 * A simple EventBus for modern Browsers that supports custom-events and passing of parameters
 */
export class EventBus {
    constructor() {
        this.id = 'EventBus';
        this.logger = new Logger();
        this.events = {};
    }

    /**
     *
     * @param module
     * @param eventList
     */
    registerEvents(module, eventList) {
        eventList = _.values(eventList);
        if (_.isArray(eventList)) {
            eventList.forEach(function(eventName) {
                this.events[eventName] = this.createCustomEvent(eventName);
            }, this);
        } else {
            this.logger.error(this.id, `eventList passed by ${module} is not an array`);
        }
    };

    /**
     *
     * @param eventName
     * @returns {*|Event}
     */
    createCustomEvent(eventName) {
        let event = document.createEvent('Event');
        event.initEvent(eventName, true, true);
        return event;
    }

    /**
     *
     * @param element
     * @param eventName
     * @param parameters
     */
    trigger(element, eventName, parameters = null) {
        element = (element instanceof EventTarget) ? element : document;

        if (this.events.hasOwnProperty(eventName)) {
            // We create a new copy of the event object of the same name and add the parameters into that
            let event = this.createCustomEvent(eventName);
            event.parameters = parameters;

            this.logger.log(this.id, 'Triggering', eventName, 'on element', element);
            element.dispatchEvent(event);
        } else {
            this.logger.warn('Tried to trigger an unknown event', eventName);
        }
    }

    /**
     *
     * @param element
     * @param eventName
     * @param handler
     */
    on(element, eventName, handler) {
        element = (element instanceof EventTarget) ? element : document;
        element.addEventListener(eventName, function (event) {
            handler(event, event.parameters);
        });
    }
}
