export default Ember.Route.extend({
    model: function(){
        var type = this.modelFor('type');
        var weeksController = this.controllerFor('weeks');
        
        weeksController.set('selected', weeksController.get('currentWeek'));
        
        this.controllerFor('elements').set('week', weeksController.get('selected'));
        this.controllerFor('elements').set('type', type);
        this.controllerFor('elements').set('filterString', '');
        
        return Ember.$.getJSON(window.host + 'v1/elements/'+type).then(function(data){
            var result = [];

            data.forEach(function(value){
                var item = Ember.Object.extend();
                result.push(item.create({
                  name: value,
                  visible: false
                }));
            });

            return result;
        });
    },
    
    renderTemplate: function() {
        // Render default outlet   
        this.render();
        // render extra outlets
        this.render("nav-elements", {
            outlet: "form",
            into: "application" // important when using at root level
        });
    }
});