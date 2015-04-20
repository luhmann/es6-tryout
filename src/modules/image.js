import { BaseModule } from './baseModule.js';
require('../css/image.sass');

export class Image extends BaseModule {
    get selectors () {
        return {
            container: '.image',
            getButton: '.image--button-get'
        };
    }

    init() {
        this.id = 'Image';

        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.eventBus.on(
            document.querySelector(this.selectors.getButton),
            'click',
            this.getImage.bind(this)
        );
    }

    getImage() {
        let image = this.ajax.get('http://lorempixel.com/1024/768/').end(function (err, res) {
            if (res.ok) {
                
            }
        });
    }
}