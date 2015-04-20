import { BaseModule } from './baseModule';

export class ToDo extends BaseModule {
    get selectors() {
        return {
            container: '.todo',
            todoList: '.todo--list',
            todoItem: '.todo--list-item',
            clearButton: '.todo--button-delete'
        };
    }

    get events() {
        return {
            allItemsCleared: 'TODO_ALL_ITEMS_CLEARED'
        }
    }

    init() {
        this.id = 'ToDo';
        this.eventBus.registerEvents(this.id, this.events);
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.eventBus.on(
            document.querySelector(this.selectors.clearButton),
            'click',
            this.clearAllTodoLisItems.bind(this)
        );
    }

    clearAllTodoLisItems(event) {
        document.querySelector(this.selectors.todoList).innerHTML = '';
        this.eventBus.trigger(this, this.events.allItemsCleared, {
            foo: 'bar'
        });
    }
}
