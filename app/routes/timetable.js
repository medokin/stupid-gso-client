export default Ember.Route.extend({
    beforeModel: function(queryParams, transition){
        var self = this;
        var controller = this.controllerFor('weeks');
        if(queryParams.week == undefined){
            self.transitionTo('timetable', self.modelFor('element'), {queryParams: {week: controller.get('currentWeek')}});
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
        weeksController.set('selected', queryParams.week);

        return Ember.$.getJSON('http://api.gso.medok.in/timetable/'+type+'/'+element+'/'+queryParams.week+'/week.json')
    }
});