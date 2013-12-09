export default Ember.ArrayController.extend({
    type: null,

    actions: {
        submit: function() {
            var search = this.get('filterString').toLowerCase();
            var found = 0;
            var element = null;
            
            this.get('content').forEach(function(item){
                var match = item.name.toLowerCase().indexOf(search) !== -1;
                if(match){
                    found = found+1;
                    element = item;
                    return;
                }
            });
            
            if(found == 1){
                this.transitionToRoute("timetable", this.get('type'), element.name);
            }
        }
    },
        
    filterString: '',
        
    filterObserver: function(){
        var search = this.get('filterString').toLowerCase();
        
        this.get('content').forEach(function(item){
            var match = item.name.toLowerCase().indexOf(search) !== -1;
            if(match){
                item.set('visible', true);
                return;
            }
            item.set('visible', false);
            
        });

    }.observes('content', 'filterString')
    
    
});
