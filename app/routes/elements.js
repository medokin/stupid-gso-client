export default Ember.Route.extend({
    model: function(){
        var type = this.modelFor('type')
        this.controllerFor('elements').set('type', type)
        return Ember.$.getJSON('http://api.gso.medok.in/'+type+'.json')
    }
});