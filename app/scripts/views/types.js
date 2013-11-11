StupidGsoClient.TypesView = Ember.View.extend({
    didInsertElement: function(){
        this.get('controller').set('isSelected', false);
    }
});
