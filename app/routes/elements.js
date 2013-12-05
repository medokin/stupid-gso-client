export default Ember.Route.extend({
    model: function(){
        var type = this.modelFor('type');
        var weeksController = this.controllerFor('weeks');
        
        weeksController.set('selected', weeksController.get('currentWeek'));
        
        this.controllerFor('elements').set('week', weeksController.get('selected'));
        this.controllerFor('elements').set('type', type);
        this.controllerFor('elements').set('filterString', '');
        
        return Ember.$.getJSON('http://api.gso.medok.in/'+type+'.json').then(function(data){
            var result = [];

            data.forEach(function(value){
                var item = Ember.Object.extend(value);
                result.push(item.create({visible: false}));
            });

            return result;
        });
    }
});