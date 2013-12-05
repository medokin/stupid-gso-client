export default Ember.Route.extend({
    activate: function(){
        this.controllerFor('application').set('isLoading', true);
    },
    
    deactivate: function(){
        this.controllerFor('application').set('isLoading', false);
    }
});