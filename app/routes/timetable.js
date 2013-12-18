export default Ember.Route.extend({
    beforeModel: function(queryParams, transition){
        var controller = this.controllerFor('weeks');
        if(queryParams.week == undefined){
            return this.transitionTo('timetable', this.modelFor('element'), {queryParams: {week: controller.get('currentWeek')}});
        }

    },

    model: function (params, queryParams, transition) {
        var controller = this.controllerFor('timetable');
        var weeksController = this.controllerFor('weeks');
        var type = this.modelFor('type')
        var element = this.modelFor('element')

        controller.set('type', type);
        controller.set('element', element);
        controller.set('weeks', weeksController);
        controller.set('currentWeek', queryParams.week);
        weeksController.set('selected', queryParams.week);

        return Ember.$.getJSON(window.host +'v1/timetable/'+type+'/'+element+'/'+queryParams.week);
    },
    
    renderTemplate: function() {
        // Render default outlet   
        this.render();
        // render extra outlets
        this.render("nav-timetable", {
            outlet: "nav",
            into: "application" // important when using at root level
        });
    }
});