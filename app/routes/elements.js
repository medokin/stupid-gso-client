export default Ember.Route.extend({
    model: function(){
        var type = this.modelFor('type');
        this.controllerFor('elements').set('type', type);
        
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