import { BaseModule } from './modules/baseModule.js';
import { ToDo } from './modules/todo.js';
import { Image } from './modules/image.js';

require('bootstrap');

class App extends BaseModule {
    constructor() {
        super();
    }

    init() {
        this.logger.log('Hello World', 'Hello Robot');
        this.todo = new ToDo();
        this.image = new Image();
        this.registerEvents();
    };

    registerEvents() {
        var that = this;
        this.eventBus.on(this, this.todo.events.allItemsCleared, function (event, params) {
            that.logger.log(event, params);
        });
    }
}

new App();
