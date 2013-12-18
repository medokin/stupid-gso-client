export default Ember.ArrayController.extend({
    selected: null,

    contentObserver: function(){
        var self = this;
        Ember.$.getJSON(window.host + 'v1/weeks').then(function(weeks){
            var selected = self.get('selected');
            var result = [];
            weeks.forEach(function(item){
                if(item == selected){
                    result.push(selected);
                }else{
                    result.push(item);
                }
            });
            self.set('content', result);
        });


    }.observes('selected'),

    currentWeek: function() {
        var d = new Date();
        var target  = new Date(d.valueOf());
        var dayNr   = (d.getDay() + 6) % 7;
        target.setDate(target.getDate() - dayNr + 3);
        var jan4    = new Date(target.getFullYear(), 0, 4);
        var dayDiff = (target - jan4) / 86400000;
        var weekNr = 1 + Math.ceil(dayDiff / 7);
        return weekNr;
    }.property()
});