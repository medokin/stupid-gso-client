export default Ember.Route.extend({
    model: function (params) {
        return params.type_name
    }
});
