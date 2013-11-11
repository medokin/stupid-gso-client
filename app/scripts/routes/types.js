StupidGsoClient.TypesRoute = Ember.Route.extend({
    model: function (params) {
        var type = params.type_name
        this.controllerFor("types").set('type', type)
        return Ember.$.getJSON('http://api.gso.medok.in/'+type+'.json')
    }
});
