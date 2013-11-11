var StupidGsoClient = window.StupidGsoClient = Ember.Application.create({
    LOG_TRANSITIONS: true
});

/* Order and include as you please. */
require('scripts/base/*');
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/helpers/*');
require('scripts/views/*');
require('scripts/router');
