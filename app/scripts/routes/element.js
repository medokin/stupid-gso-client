StupidGsoClient.ElementRoute = Ember.Route.extend({
    model: function (params, queryParams, transition) {
        return params.element_name;
    }
});