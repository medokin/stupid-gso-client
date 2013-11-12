StupidGsoClient.TimetableRoute = Ember.Route.extend({
    model: function (params, queryParams, transition) {
        var controller = this.controllerFor('timetable');
        var type = this.modelFor('type')

        controller.set('type', type);
        controller.set('element', params.element_name);

        if (queryParams.week != undefined){
            return Ember.$.getJSON('http://api.gso.medok.in/timetable/'+type+'/'+params.element_name+'/'+queryParams.week+'/week.json')
        }
        return Ember.$.getJSON('http://api.gso.medok.in/timetable/'+type+'/'+params.element_name+'/week.json')
    },

    getWeekNumber: function (d) {
        // Copy date so don't modify original
        d = new Date(d);
        d.setHours(0,0,0);
        // Set to nearest Thursday: current date + 4 - current day number
        // Make Sunday's day number 7
        d.setDate(d.getDate() + 4 - (d.getDay()||7));
        // Get first day of year
        var yearStart = new Date(d.getFullYear(),0,1);
        // Calculate full weeks to nearest Thursday
        var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7)
        // Return array of year and week number
        return [d.getFullYear(), weekNo];
    }
});
