export default Ember.Route.extend({
    model: function () {
        
        var starredElements = [];
        store.each(function(item, value){
            starredElements.push(value);
        });
        

        
        
        var types = [
            Em.Object.create({
                name: 'classes',
                text: 'Klassen'
            }),
            Em.Object.create({
                name: 'teachers',
                text: 'Lehrer'
            }),
            Em.Object.create({
                name: 'rooms',
                text: 'Räume'
            })
        ];
        
        return {
          'starred': starredElements,
          'types': types
        };
    }
});
