StupidGsoClient.ElementRoute = Ember.Route.extend({
    model: function (params) {
        var type = this.controllerFor("types").get("type");

        return Ember.$.getJSON('http://api.gso.medok.in/timetable/'+type+'/'+params.element+'/week.json')
    }
});
