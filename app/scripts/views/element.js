StupidGsoClient.ElementView = Ember.View.extend({
    didInsertElement: function(){
        this.get('controller.controllers.types').set('isSelected', true);
    }
});
