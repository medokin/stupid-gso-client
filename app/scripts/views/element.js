StupidGsoClient.ElementView = Ember.View.extend({
    didInsertElement: function(){
        this.get('controller.controllers.types').set('isSelected', true);
    },

    willDestroyElement: function(){
        this.get('controller.controllers.types').set('isSelected', false);
    }
});
