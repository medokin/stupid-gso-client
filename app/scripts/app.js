Ember.EventDispatcher.reopen({
    events: {
        keydown     : 'keyDown',
        keyup       : 'keyUp',
        keypress    : 'keyPress',
        mousedown   : 'mouseDown',
        mouseup     : 'mouseUp',
        contextmenu : 'contextMenu',
        click       : 'click',
        dblclick    : 'doubleClick',
        mousemove   : 'mouseMove',
        focusin     : 'focusIn',
        focusout    : 'focusOut',
        submit      : 'submit',
        input       : 'input',
        change      : 'change',
        dragstart   : 'dragStart',
        drag        : 'drag',
        dragenter   : 'dragEnter',
        dragleave   : 'dragLeave',
        dragover    : 'dragOver',
        drop        : 'drop',
        dragend     : 'dragEnd'
    }
});

var StupidGsoClient = window.StupidGsoClient = Ember.Application.create({
    LOG_TRANSITIONS: true
});

Ember.FEATURES["query-params"] = true;

/* Order and include as you please. */
require('scripts/base/*');
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/helpers/*');
require('scripts/views/*');
require('scripts/router');
